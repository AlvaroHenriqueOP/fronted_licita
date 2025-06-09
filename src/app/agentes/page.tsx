'use client';

import React, { useState } from 'react';
import { FaFileAlt, FaClipboardList, FaFileSignature, FaChartLine, FaPaperPlane, FaRobot, FaLightbulb, FaAtom } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../dashboard/DashboardLayout';

export default function AgentesPage() {
  const [activeTab, setActiveTab] = useState('analista');
  const [messageText, setMessageText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const tabItems = [
    { id: 'analista', icon: <FaFileAlt />, label: 'Analista de Editais' },
    { id: 'proposta', icon: <FaClipboardList />, label: 'Elaborador de Proposta' },
    { id: 'documentos', icon: <FaFileSignature />, label: 'Elaborador de Documentos' },
    { id: 'precos', icon: <FaChartLine />, label: 'Viabilidade de Preços' }
  ];

  // Animação para cards de sugestão
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(94, 96, 206, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  const sugestoes = [
    { texto: 'Analisar um edital', icone: <FaFileAlt /> },
    { texto: 'Verificar requisitos', icone: <FaClipboardList /> },
    { texto: 'Elaborar uma proposta', icone: <FaFileSignature /> },
    { texto: 'Resumir documentação', icone: <FaRobot /> },
    { texto: 'Avaliar viabilidade', icone: <FaChartLine /> },
    { texto: 'Dicas de precificação', icone: <FaLightbulb /> },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da página */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-secondary mb-2">Agentes de IA</h1>
          <p className="text-indigo-DEFAULT text-lg">Assistentes especializados para auxiliar em cada etapa do seu processo licitatório</p>
        </motion.div>

        {/* Abas dos tipos de agente */}
        <motion.div 
          className="flex mb-8 overflow-x-auto pb-1 gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {tabItems.map((tab, index) => (
            <motion.button 
              key={tab.id}
              className={`flex items-center gap-3 px-5 py-3 font-medium rounded-lg relative transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-white text-secondary shadow-md border border-indigo-light/20' 
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div className={`p-2 rounded-lg ${
                activeTab === tab.id 
                  ? 'bg-gradient-primary text-white' 
                  : 'bg-indigo-light/10 text-indigo-DEFAULT'
              }`}>
                {tab.icon}
              </div>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent rounded-t-full" 
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>



        {/* Área de chat */}
        <motion.div 
          className="flex flex-col items-center justify-center h-[55vh] mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-purple-light/20 to-blue-light/30 p-6 rounded-full mb-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <FaAtom className="text-6xl text-purple-DEFAULT" />
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold mb-3 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Comece uma conversa
          </motion.h2>
          <motion.p 
            className="text-indigo-DEFAULT text-center max-w-xl mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Escolha uma sugestão ou digite sua mensagem para interagir com o {activeTab === 'analista' ? 'Analista de Editais' : tabItems.find(t => t.id === activeTab)?.label}
          </motion.p>

          {/* Cards de sugestão */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full px-4">
            <AnimatePresence>
              {sugestoes.map((sugestao, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white p-5 rounded-xl border border-indigo-light/20 shadow-sm cursor-pointer transition-all duration-200"
                  onClick={() => setMessageText(sugestao.texto)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-purple-light/10 to-blue-light/20 rounded-lg text-blue-DEFAULT">
                      {sugestao.icone}
                    </div>
                    <p className="text-secondary font-medium">{sugestao.texto}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Campo de mensagem */}
        <motion.div 
          className="fixed bottom-8 inset-x-6 lg:ml-[250px] lg:mr-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              className={`absolute inset-0 rounded-full ${isInputFocused ? 'shadow-lg ring-2 ring-purple-DEFAULT/30' : 'shadow-md'}`}
              animate={{ boxShadow: isInputFocused ? '0 10px 25px -5px rgba(94, 96, 206, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            />
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-full border border-indigo-light/20 rounded-full py-4 px-6 focus:outline-none bg-white pr-16 text-secondary"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            <motion.button 
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-primary text-white p-3 rounded-full shadow-md ${!messageText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-glow'}`}
              whileHover={messageText.trim() ? { scale: 1.1 } : {}}
              whileTap={messageText.trim() ? { scale: 0.9 } : {}}
              disabled={!messageText.trim()}
              transition={{ duration: 0.2 }}
            >
              <FaPaperPlane className="text-white" size={18} />
            </motion.button>
          </div>
          <p className="text-center text-indigo-light text-sm mt-3">Pressione Enter para enviar</p>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 