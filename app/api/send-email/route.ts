import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Helper function to wait for a specified time
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to retry an operation with exponential backoff
async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000
): Promise<T> {
  let lastError: Error | unknown;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      const isNetworkError = error instanceof Error &&
        (error.message.includes('ECONNRESET') ||
          error.message.includes('socket hang up') ||
          error.message.includes('ETIMEDOUT') ||
          error.message.includes('ECONNREFUSED'));

      if (!isNetworkError || attempt === maxRetries) {
        throw error;
      }

      const delayTime = baseDelayMs * Math.pow(2, attempt - 1);
      console.log(`Network error on attempt ${attempt}/${maxRetries}. Retrying in ${delayTime}ms...`);
      await delay(delayTime);
    }
  }

  throw lastError;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, empresa, tamanhoOperacao, dorPrincipal } = body;

    // Validate required fields
    if (!name || !email || !phone || !empresa) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare row data early so we can log it if Google Sheets fails
    const timestamp = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    const leadData = {
      timestamp,
      name,
      email,
      phone,
      empresa,
      tamanhoOperacao: tamanhoOperacao || 'Não informado',
      dorPrincipal: dorPrincipal || ''
    };

    // Check if Google Sheets credentials are configured
    if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY) {
      console.error('Google Sheets credentials not configured');
      // Log the lead data so it's not lost
      console.log('LEAD_BACKUP (no credentials):', JSON.stringify(leadData));
      return NextResponse.json(
        { error: 'Google Sheets not configured' },
        { status: 503 }
      );
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Wrap Google API calls in retry logic
    const saveToSheets = async () => {
      // Dynamically get the name of the first sheet (e.g., 'Página1' or 'Sheet1')
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        fields: 'sheets.properties.title',
      });

      const sheetTitle = spreadsheetInfo.data.sheets?.[0]?.properties?.title || 'Página1';

      const rowData = [
        leadData.timestamp,
        leadData.name,
        leadData.email,
        leadData.phone,
        leadData.empresa,
        leadData.tamanhoOperacao,
        leadData.dorPrincipal
      ];

      // Append data to sheet using the correct sheet title
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: `${sheetTitle}!A:G`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [rowData],
        },
      });

      return true;
    };

    try {
      await retryWithBackoff(saveToSheets, 3, 2000);
      console.log('Data saved to Google Sheets:', { name, email, empresa });
    } catch (sheetsError) {
      // Log the lead data as backup so no leads are lost
      console.error('Failed to save to Google Sheets after retries:', sheetsError);
      console.log('LEAD_BACKUP (sheets failed):', JSON.stringify(leadData));

      // Still return success to the user - we have the data logged
      // In production, you might want to save to a local file or database
      return NextResponse.json(
        { success: true, message: 'Lead received (backup mode)' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Google Sheets error:', error);

    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }

    return NextResponse.json(
      { error: 'Failed to save data. Please try again.' },
      { status: 500 }
    );
  }
}
