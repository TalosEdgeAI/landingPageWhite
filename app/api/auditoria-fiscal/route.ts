import { NextRequest, NextResponse } from 'next/server'

interface CNPJData {
    cnpj: string
    razao_social: string
    nome_fantasia: string
    descricao_situacao_cadastral: string
    data_situacao_cadastral: string
    motivo_situacao_cadastral: string
    descricao_tipo_de_logradouro: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cep: string
    uf: string
    municipio: string
    porte: string
    natureza_juridica: string
    cnae_fiscal: number
    cnae_fiscal_descricao: string
    data_inicio_atividade: string
    qsa: Array<{
        nome_socio: string
        cnpj_cpf_do_socio: string
        qualificacao_socio: string
    }>
}

interface AuditResult {
    cnpj: string
    status: 'ok' | 'alerta' | 'erro'
    razao_social?: string
    situacao?: string
    data_situacao?: string
    porte?: string
    natureza_juridica?: string
    uf?: string
    municipio?: string
    cnae?: string
    error?: string
}

async function consultarCNPJ(cnpj: string): Promise<AuditResult> {
    // Remove formatação
    const cnpjLimpo = cnpj.replace(/\D/g, '')

    if (cnpjLimpo.length !== 14) {
        return {
            cnpj: cnpj,
            status: 'erro',
            error: 'CNPJ deve ter 14 dígitos'
        }
    }

    try {
        const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjLimpo}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // Adicione esta linha mágica para evitar o erro 403:
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            cache: 'no-store' // Garante que não pegue dados velhos
        })
        if (!response.ok) {
            if (response.status === 404) {
                return {
                    cnpj: cnpjLimpo,
                    status: 'erro',
                    error: 'CNPJ não encontrado na base da Receita Federal'
                }
            }
            throw new Error(`HTTP ${response.status}`)
        }

        const data: CNPJData = await response.json()

        // Determina o status baseado na situação cadastral
        const situacoesOk = ['ATIVA']
        const situacoesAlerta = ['SUSPENSA', 'INAPTA', 'BAIXADA', 'NULA']

        let status: 'ok' | 'alerta' | 'erro' = 'ok'
        if (situacoesAlerta.includes(data.descricao_situacao_cadastral?.toUpperCase())) {
            status = 'alerta'
        } else if (!situacoesOk.includes(data.descricao_situacao_cadastral?.toUpperCase())) {
            status = 'alerta' // Qualquer status diferente de ATIVA é alerta
        }

        return {
            cnpj: data.cnpj,
            status,
            razao_social: data.razao_social,
            situacao: data.descricao_situacao_cadastral,
            data_situacao: data.data_situacao_cadastral,
            porte: data.porte,
            natureza_juridica: data.natureza_juridica,
            uf: data.uf,
            municipio: data.municipio,
            cnae: data.cnae_fiscal_descricao
        }
    } catch (error) {
        console.error(`Erro ao consultar CNPJ ${cnpjLimpo}:`, error)
        return {
            cnpj: cnpjLimpo,
            status: 'erro',
            error: 'Erro ao consultar a Receita Federal. Tente novamente.'
        }
    }
}

function gerarHTMLRelatorio(resultados: AuditResult[], email: string): string {
    const resumo = {
        total: resultados.length,
        ok: resultados.filter(r => r.status === 'ok').length,
        alerta: resultados.filter(r => r.status === 'alerta').length,
        erro: resultados.filter(r => r.status === 'erro').length
    }

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 10px 0 0; opacity: 0.8; font-size: 14px; }
            .logo { font-size: 32px; margin-bottom: 10px; }
            .content { padding: 30px; }
            .resumo { display: flex; gap: 10px; margin-bottom: 30px; }
            .resumo-item { flex: 1; text-align: center; padding: 15px; border-radius: 8px; }
            .resumo-ok { background: #d4edda; color: #155724; }
            .resumo-alerta { background: #fff3cd; color: #856404; }
            .resumo-erro { background: #f8d7da; color: #721c24; }
            .resumo-num { font-size: 28px; font-weight: bold; }
            .resumo-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
            .resultado { border-left: 4px solid #ccc; background: #f9f9f9; padding: 15px 20px; margin-bottom: 15px; border-radius: 0 8px 8px 0; }
            .resultado-ok { border-color: #28a745; }
            .resultado-alerta { border-color: #ffc107; background: #fffbeb; }
            .resultado-erro { border-color: #dc3545; background: #fff5f5; }
            .resultado h3 { margin: 0 0 8px; font-size: 16px; }
            .resultado p { margin: 4px 0; font-size: 13px; color: #666; }
            .resultado .status { font-weight: bold; }
            .status-ok { color: #28a745; }
            .status-alerta { color: #e67e00; }
            .status-erro { color: #dc3545; }
            .icon { font-size: 18px; margin-right: 8px; }
            .cta { text-align: center; padding: 30px; background: #0a0a0a; }
            .cta-btn { display: inline-block; background: #CEFF05; color: #0a0a0a; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; }
            .footer { text-align: center; padding: 20px; font-size: 11px; color: #999; }
            .tempo { background: #e8f5e9; color: #2e7d32; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🔍</div>
                <h1>Relatório de Auditoria Fiscal</h1>
                <p>Gerado automaticamente por Talos Edge AI</p>
            </div>
            
            <div class="content">
                <div class="resumo">
                    <div class="resumo-item resumo-ok">
                        <div class="resumo-num">${resumo.ok}</div>
                        <div class="resumo-label">Regular</div>
                    </div>
                    <div class="resumo-item resumo-alerta">
                        <div class="resumo-num">${resumo.alerta}</div>
                        <div class="resumo-label">Atenção</div>
                    </div>
                    <div class="resumo-item resumo-erro">
                        <div class="resumo-num">${resumo.erro}</div>
                        <div class="resumo-label">Erro</div>
                    </div>
                </div>
    `

    for (const resultado of resultados) {
        const iconClass = resultado.status === 'ok' ? '✅' : resultado.status === 'alerta' ? '⚠️' : '❌'
        const statusClass = `resultado resultado-${resultado.status}`
        const statusTextClass = `status status-${resultado.status}`

        if (resultado.status === 'erro') {
            html += `
                <div class="${statusClass}">
                    <h3><span class="icon">${iconClass}</span>CNPJ: ${resultado.cnpj}</h3>
                    <p class="${statusTextClass}">${resultado.error}</p>
                </div>
            `
        } else {
            html += `
                <div class="${statusClass}">
                    <h3><span class="icon">${iconClass}</span>${resultado.razao_social || 'N/A'}</h3>
                    <p><strong>CNPJ:</strong> ${resultado.cnpj}</p>
                    <p><strong>Situação:</strong> <span class="${statusTextClass}">${resultado.situacao}</span></p>
                    <p><strong>Localização:</strong> ${resultado.municipio}/${resultado.uf}</p>
                    <p><strong>Atividade:</strong> ${resultado.cnae || 'N/A'}</p>
                </div>
            `
        }
    }

    html += `
                <div class="tempo">
                    ⚡ <strong>Tempo de processamento:</strong> Menos de 30 segundos<br>
                    <small>Uma pessoa levaria ~15 minutos para consultar e validar isso manualmente.</small>
                </div>
            </div>
            
            <div class="cta">
                <p style="color: #ccc; margin: 0 0 15px;">Quer monitorar <strong style="color: white;">todos os seus clientes</strong> automaticamente?</p>
                <a href="https://talos.ai/lp/contadores#form-contadores" class="cta-btn">Agendar Implementação</a>
            </div>
            
            <div class="footer">
                <p>Este relatório foi enviado para ${email}</p>
                <p>Talos Edge AI © 2026 - Automação Inteligente para Contabilidade</p>
                <p style="margin-top: 10px;">Os dados exibidos são consultados diretamente na base pública da Receita Federal via BrasilAPI.</p>
            </div>
        </div>
    </body>
    </html>
    `

    return html
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, cnpjs } = body

        if (!email || !cnpjs || !Array.isArray(cnpjs) || cnpjs.length === 0) {
            return NextResponse.json(
                { error: 'E-mail e pelo menos 1 CNPJ são obrigatórios' },
                { status: 400 }
            )
        }

        // Consulta todos os CNPJs em paralelo
        const resultados = await Promise.all(
            cnpjs.map((cnpj: string) => consultarCNPJ(cnpj))
        )

        // Gera o HTML do relatório
        const htmlRelatorio = gerarHTMLRelatorio(resultados, email)

        // Determina o assunto baseado nos resultados
        const alertas = resultados.filter(r => r.status === 'alerta').length
        const assunto = alertas > 0
            ? `🚨 Relatório de Auditoria: ${alertas} Risco${alertas > 1 ? 's' : ''} Encontrado${alertas > 1 ? 's' : ''}`
            : `✅ Relatório de Auditoria: Situação Regular`

        // Envia o e-mail usando a mesma lógica do send-email existente
        // Por enquanto, retorna os resultados para o frontend
        // Em produção, integrar com SendGrid/Resend ou redirecionar para n8n webhook

        // Tenta enviar para o webhook do n8n se configurado
        const n8nWebhookUrl = process.env.N8N_AUDITORIA_WEBHOOK_URL

        if (n8nWebhookUrl) {
            try {
                await fetch(n8nWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email,
                        assunto,
                        html: htmlRelatorio,
                        resultados
                    })
                })
            } catch (e) {
                console.error('Erro ao enviar para n8n:', e)
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Auditoria processada com sucesso',
            resultados,
            resumo: {
                total: resultados.length,
                regulares: resultados.filter(r => r.status === 'ok').length,
                alertas: resultados.filter(r => r.status === 'alerta').length,
                erros: resultados.filter(r => r.status === 'erro').length
            }
        })

    } catch (error) {
        console.error('Erro na auditoria fiscal:', error)
        return NextResponse.json(
            { error: 'Erro interno ao processar auditoria' },
            { status: 500 }
        )
    }
}
