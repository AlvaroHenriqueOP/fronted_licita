
/*Função para analisar texto de edital usando a API */
export async function analisarEdital(texto: string, token: string): Promise<string> {
try {
    const response = await fetch('http://localhost:8000/analisar-edital', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ texto })
    });

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Erro ao analisar o edital');
    }

    const data = await response.json();
    return data.resposta;
} catch (error) {
    console.error('Erro na API:', error);
    throw error;
}
}

/**
 * Função para enviar arquivo PDF para análise
 */
export async function enviarPdfParaAnalise(arquivo: File, token: string): Promise<string> {
try {
    if (!arquivo.name.toLowerCase().endsWith('.pdf')) {
    throw new Error('O arquivo deve ser um PDF');
    }

    const formData = new FormData();
    formData.append('file', arquivo);

    const response = await fetch('http://localhost:8000/upload-edital', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`
        // Não incluir Content-Type ao usar FormData
    },
    body: formData
    });

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Erro ao processar o PDF');
    }

    const data = await response.json();
    return data.resposta;
} catch (error) {
    console.error('Erro ao enviar PDF:', error);
    throw error;
}
}

/**
 * Função para enviar mensagem de chat
 */
export async function enviarMensagemChat(
mensagem: string, 
sessaoId: number | null, 
token: string
): Promise<{ resposta: string; sessaoId: number }> {
try {
    const response = await fetch('http://localhost:8000/chat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        mensagem,
        sessao_id: sessaoId
    })
    });

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Erro ao processar mensagem');
    }

    const data = await response.json();
    return {
    resposta: data.resposta,
    sessaoId: data.sessao_id
    };
} catch (error) {
    console.error('Erro na API de chat:', error);
    throw error;
}
}