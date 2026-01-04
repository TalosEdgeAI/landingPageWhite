import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

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

    // Check if Google Sheets credentials are configured
    if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY) {
      console.error('Google Sheets credentials not configured');
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

    // Dynamically get the name of the first sheet (e.g., 'Página1' or 'Sheet1')
    const spreadsheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      fields: 'sheets.properties.title',
    });

    const sheetTitle = spreadsheetInfo.data.sheets?.[0]?.properties?.title || 'Página1';

    // Prepare row data
    const timestamp = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    const rowData = [
      timestamp,
      name,
      email,
      phone,
      empresa,
      tamanhoOperacao || 'Não informado',
      dorPrincipal || ''
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

    console.log('Data saved to Google Sheets:', { name, email, empresa });

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
