'use client';

// Imports que você já tinha
import React, { useState, FormEvent, useRef, ChangeEvent } from 'react';
import { FaFileAlt, FaClipboardList, FaFileSignature, FaChartLine, FaPaperPlane, FaRobot, FaLightbulb, FaAtom, FaSpinner, FaUpload, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import DashboardLayout from '../dashboard/DashboardLayout';

// Imports novos para a funcionalidade
import { useAuth } from '@/contexts/AuthContext';
import { analisarEdital, enviarPdfParaAnalise } from '@/contexts/api'; // Certifique-se que este caminho está correto

// NOVO: Definindo um tipo para as mensagens do chat, para organizar melhor
interface Message {
  author: 'user' | 'ai';
  text: string;
}

// Interface para erros tipados
interface ApiError extends Error {
  message: string;
}

export default function AgentesPage() {
  // O estado para gerenciar o input
  const [inputText, setInputText] = useState('');

  // NOVOS: Estados para controlar o histórico do chat e o carregamento
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Estados para controle de upload de arquivo
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfName, setPdfName] = useState<string>('');
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // NOVO: Pegando o token de autenticação
  const { token } = useAuth();

  // Seus 'tabItems' continuam exatamente iguais
  const tabItems = [
    { id: 'analista', icon: <FaFileAlt />, label: 'Analista de Editais' },
    { id: 'proposta', icon: <FaClipboardList />, label: 'Elaborador de Proposta' },
    { id: 'documentos', icon: <FaFileSignature />, label: 'Elaborador de Documentos' },
    { id: 'precos', icon: <FaChartLine />, label: 'Viabilidade de Preços' }
  ];

  const sugestoes = [
    { texto: 'Analisar um edital', icone: <FaFileAlt /> },
    { texto: 'Verificar requisitos', icone: <FaClipboardList /> },
    { texto: 'Elaborar uma proposta', icone: <FaFileSignature /> },
    { texto: 'Resumir documentação', icone: <FaRobot /> },
    { texto: 'Avaliar viabilidade', icone: <FaChartLine /> },
    { texto: 'Dicas de precificação', icone: <FaLightbulb /> },
  ];
  
  // Função para lidar com a seleção de arquivo PDF
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        alert('Por favor, selecione um arquivo PDF.');
        return;
      }
      
      setPdfFile(file);
      setPdfName(file.name);
    }
  };

  // Função para limpar o arquivo selecionado
  const clearSelectedFile = () => {
    setPdfFile(null);
    setPdfName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Função para acionar o input de arquivo
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Função para enviar o PDF para análise
  const handlePdfUpload = async () => {
    if (!pdfFile || !token || isUploadingPdf) return;

    const userMessage: Message = { 
      author: 'user', 
      text: `Solicitando análise do arquivo: ${pdfName}` 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsUploadingPdf(true);

    try {
      const aiResponseText = await enviarPdfParaAnalise(pdfFile, token);
      const aiMessage: Message = { author: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
      clearSelectedFile(); // Limpa o arquivo após o upload bem-sucedido
    } catch (error) {
      console.error(error);
      const err = error as ApiError;
      const errorMessage: Message = { 
        author: 'ai', 
        text: `Desculpe, ocorreu um erro ao analisar o PDF: ${err.message}` 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsUploadingPdf(false);
    }
  };
  
  // NOVO: Função completa para enviar a mensagem para a API
  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !token || isLoading) return;

    const userMessage: Message = { author: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]); // Adiciona a mensagem do usuário na tela
    const currentInput = inputText;
    setInputText(''); // Limpa o campo
    setIsLoading(true);

    try {
      const aiResponseText = await analisarEdital(currentInput, token);
      const aiMessage: Message = { author: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]); // Adiciona a resposta da IA
    } catch (error) {
      console.error(error);
      const err = error as ApiError;
      const errorMessage: Message = { author: 'ai', text: `Desculpe, ocorreu um erro: ${err.message}` };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)] max-w-7xl mx-auto">
        {/* Cabeçalho da página (seu código original, sem mudanças) */}
        <motion.div 
          className="mb-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-secondary mb-2">Agentes de IA</h1>
          <p className="text-gray-500 text-lg">Assistentes especializados para auxiliar em cada etapa do seu processo licitatório</p>
        </motion.div>

        {/* Abas dos tipos de agente (seu código original, sem mudanças) */}
        <motion.div 
          className="flex mb-8 overflow-x-auto pb-1 gap-2 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {tabItems.map((tab) => (
            <motion.button key={tab.id} /* ... seu código das abas aqui ... */>
                 {/* seu código de botão de aba aqui... */}
            </motion.button>
          ))}
        </motion.div>

        {/* ÁREA DE CHAT - AQUI FICA A LÓGICA COMBINADA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.length === 0 ? (
            // SE NÃO HOUVER MENSAGENS, MOSTRA SUA TELA DE BOAS-VINDAS
            <motion.div 
              className="flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div /* ... sua animação do átomo ... */>
                  <FaAtom className="text-6xl text-primary/70" />
              </motion.div>
              <motion.h2 /* ... seu h2 de "Comece uma conversa" ... */>
                Comece uma conversa
              </motion.h2>
              <motion.p /* ... seu parágrafo de instrução ... */>
                Escolha uma sugestão, envie um PDF ou digite sua mensagem para interagir...
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full px-4 mt-8">
                {sugestoes.map((sugestao, index) => (
                  <motion.div 
                    key={index}
                    onClick={() => setInputText(sugestao.texto)}
                    /* ... seu card de sugestão aqui ... */
                  >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg text-primary">{sugestao.icone}</div>
                        <p className="text-secondary font-medium">{sugestao.texto}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // SE HOUVER MENSAGENS, MOSTRA O HISTÓRICO DO CHAT
            messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 ${msg.author === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.author === 'ai' && <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0"><FaRobot /></div>}
                <div
                  className={`max-w-xl p-4 rounded-xl ${
                    msg.author === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white shadow-soft text-gray-700 rounded-bl-none'
                  }`}
                >
                  <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                </div>
              </motion.div>
            ))
          )}
          {/* Mostra o indicador de "digitando" */}
          {isLoading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0"><FaRobot /></div>
              <div className="max-w-lg p-4 rounded-xl bg-white shadow-soft flex items-center gap-2">
                <FaSpinner className="animate-spin text-primary" />
                <span className="text-gray-600">Analisando...</span>
              </div>
            </motion.div>
          )}
          {isUploadingPdf && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0"><FaRobot /></div>
              <div className="max-w-lg p-4 rounded-xl bg-white shadow-soft flex items-center gap-2">
                <FaSpinner className="animate-spin text-primary" />
                <span className="text-gray-600">Processando PDF...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Campo de mensagem e upload de PDF */}
        <motion.div 
          className="p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {/* Área de upload de PDF */}
          <div className="mb-3 max-w-4xl mx-auto">
            <input 
              type="file" 
              accept=".pdf" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
            />
            
            {!pdfFile ? (
              <button 
                onClick={triggerFileInput}
                className="flex items-center gap-2 text-sm border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50 transition-all"
              >
                <FaUpload className="text-primary" />
                <span>Enviar PDF para análise</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 bg-gray-50">
                <FaFilePdf className="text-primary" />
                <span className="text-sm truncate flex-1" title={pdfName}>{pdfName}</span>
                {isUploadingPdf ? (
                  <FaSpinner className="animate-spin text-primary" />
                ) : (
                  <>
                    <button 
                      onClick={clearSelectedFile}
                      className="text-xs text-gray-500 hover:text-red-500"
                    >
                      Remover
                    </button>
                    <button 
                      onClick={handlePdfUpload}
                      className="ml-2 bg-primary text-white px-3 py-1 rounded-full text-xs hover:bg-primaryDark"
                      disabled={isUploadingPdf}
                    >
                      Analisar
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Campo de texto para entrada manual */}
          <form onSubmit={handleSendMessage} className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Envie o texto do edital para ser analisado..."
              className="w-full border border-gray-300 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 pr-16 text-secondary"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading || isUploadingPdf}
            />
            <motion.button 
              type="submit"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md transition-all ${!inputText.trim() || isLoading || isUploadingPdf ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primaryDark hover:shadow-lg'}`}
              whileHover={inputText.trim() && !isLoading && !isUploadingPdf ? { scale: 1.1 } : {}}
              whileTap={inputText.trim() && !isLoading && !isUploadingPdf ? { scale: 0.95 } : {}}
              disabled={!inputText.trim() || isLoading || isUploadingPdf}
            >
              <FaPaperPlane size={16} />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </DashboardLayout>
  );
}