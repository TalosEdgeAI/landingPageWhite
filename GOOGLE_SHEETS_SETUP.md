# Google Sheets Integration - Setup Guide

## Passo 1: Criar Google Sheet

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "Leads Landing Page"
3. Na primeira linha (cabeçalho), adicione:
   - A1: Data/Hora
   - B1: Nome
   - C1: Email
   - D1: Telefone
   - E1: Empresa
   - F1: Funcionários (Tamanho Op.)
   - G1: Dor Principal
4. Copie o ID da planilha da URL (a parte entre `/d/` e `/edit`):
   - Exemplo: `https://docs.google.com/spreadsheets/d/`**`1ABC...XYZ`**`/edit`

## Passo 2: Criar Service Account (GRATUITO - Não precisa cartão)

1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto (ou use existente)
3. Vá em **APIs & Services** > **Enable APIs and Services**
4. Procure e ative **Google Sheets API**
5. Vá em **APIs & Services** > **Credentials**
6. Clique em **Create Credentials** > **Service Account**
7. Preencha:
   - Nome: `landing-page-sheets`
   - Clique em **Create and Continue**
   - Pule as permissões (clique em **Continue** e **Done**)
8. Clique no service account criado
9. Vá na aba **Keys**
10. Clique em **Add Key** > **Create New Key** > **JSON**
11. Baixe o arquivo JSON

## Passo 3: Compartilhar Sheet com Service Account

1. Abra o arquivo JSON baixado
2. Copie o valor de `client_email` (algo como `landing-page-sheets@...iam.gserviceaccount.com`)
3. Volte no Google Sheet
4. Clique em **Compartilhar**
5. Cole o email do service account
6. Dê permissão de **Editor**
7. Desmarque "Notificar pessoas"
8. Clique em **Compartilhar**

## Passo 4: Configurar .env.local

Abra o arquivo JSON do service account e copie os valores:

```env
# ID da planilha (da URL)
GOOGLE_SHEETS_SPREADSHEET_ID=1ABC...XYZ

# Email do service account (do JSON: client_email)
GOOGLE_SERVICE_ACCOUNT_EMAIL=landing-page-sheets@...iam.gserviceaccount.com

# Chave privada (do JSON: private_key) - copie TUDO, incluindo -----BEGIN/END-----
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...sua_chave_aqui...\n-----END PRIVATE KEY-----\n"
```

## Passo 5: Testar

1. Salve o `.env.local`
2. Reinicie o servidor (`Ctrl+C` e `npm run dev`)
3. Preencha o formulário na landing page
4. Clique em "Parar de Perder Dinheiro"
5. Verifique se uma nova linha apareceu no Google Sheet!

## Dicas

- O Google Sheets API é **100% gratuito**
- Não precisa de cartão de crédito
- Limite: 500 requisições por 100 segundos (mais que suficiente)
- Os dados aparecem instantaneamente no Sheet
