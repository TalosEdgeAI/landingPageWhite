import { google } from 'googleapis';

async function testGoogleSheetsConnection() {
    try {
        console.log('🔍 Testing Google Sheets API configuration...\n');

        // Check environment variables
        console.log('1. Checking environment variables:');
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!spreadsheetId) {
            console.error('❌ GOOGLE_SHEETS_SPREADSHEET_ID is missing');
            return;
        }
        console.log(`✅ Spreadsheet ID: ${spreadsheetId}`);

        if (!serviceEmail) {
            console.error('❌ GOOGLE_SERVICE_ACCOUNT_EMAIL is missing');
            return;
        }
        console.log(`✅ Service Account Email: ${serviceEmail}`);

        if (!privateKey) {
            console.error('❌ GOOGLE_PRIVATE_KEY is missing');
            return;
        }
        console.log('✅ Private Key is set\n');

        // Initialize Google Auth
        console.log('2. Initializing Google Auth...');
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: serviceEmail,
                private_key: privateKey.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        console.log('✅ Auth initialized\n');

        // Create Sheets client
        console.log('3. Creating Sheets API client...');
        const sheets = google.sheets({ version: 'v4', auth });
        console.log('✅ Sheets client created\n');

        // Test reading the spreadsheet
        console.log('4. Testing read access to spreadsheet...');
        const response = await sheets.spreadsheets.get({
            spreadsheetId: spreadsheetId,
        });
        console.log(`✅ Successfully connected to: "${response.data.properties?.title}"\n`);

        // Test writing to the spreadsheet
        console.log('5. Testing write access (appending test row)...');
        const timestamp = new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo'
        });

        const testData = [
            timestamp,
            'TESTE',
            'teste@example.com',
            '(11) 99999-9999',
            'Empresa Teste',
            '10-50'
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Sheet1!A:F',
            valueInputOption: 'RAW',
            requestBody: {
                values: [testData],
            },
        });
        console.log('✅ Successfully wrote test data to spreadsheet\n');

        console.log('🎉 All tests passed! Google Sheets API is configured correctly.');
        console.log('📊 Check your Google Sheet - a test row should have been added.');

    } catch (error) {
        console.error('\n❌ Error occurred:');
        if (error instanceof Error) {
            console.error('Message:', error.message);
            if ('code' in error) {
                console.error('Code:', error.code);
            }
        }
        console.error('\nFull error:', error);
    }
}

testGoogleSheetsConnection();
