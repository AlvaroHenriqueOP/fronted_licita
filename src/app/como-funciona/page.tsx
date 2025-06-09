'use client';

import React from 'react';
import { 
  FaRocket, 
  FaSearch, 
  FaFileAlt, 
  FaRobot, 
  FaChartLine, 
  FaUsers, 
  FaLightbulb, 
  FaCheckCircle, 
  FaClock, 
  FaShieldAlt,
  FaArrowRight,
  FaQuestionCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import DashboardLayout from '../dashboard/DashboardLayout';

export default function ComoFuncionaPage() {
  const etapas = [
    {
      numero: 1,
      titulo: "Busque Oportunidades",
      descricao: "Encontre licitações relevantes para sua empresa através de nossa plataforma inteligente",
      icone: <FaSearch />,
      detalhes: [
        "Filtros avançados por categoria",
        "Notificações em tempo real",
        "Histórico de participações"
      ]
    },
    {
      numero: 2,
      titulo: "Analise com IA",
      descricao: "Nossos agentes de IA analisam editais e identificam requisitos essenciais",
      icone: <FaRobot />,
      detalhes: [
        "Análise automática de editais",
        "Identificação de requisitos",
        "Resumo dos pontos importantes"
      ]
    },
    {
      numero: 3,
      titulo: "Elabore Propostas",
      descricao: "Crie propostas competitivas com auxílio de nossa inteligência artificial",
      icone: <FaFileAlt />,
      detalhes: [
        "Templates personalizados",
        "Análise de precificação",
        "Verificação de conformidade"
      ]
    },
    {
      numero: 4,
      titulo: "Monitore Resultados",
      descricao: "Acompanhe o desempenho de suas propostas e otimize estratégias futuras",
      icone: <FaChartLine />,
      detalhes: [
        "Dashboard de performance",
        "Relatórios detalhados",
        "Análise de concorrência"
      ]
    }
  ];

  const vantagens = [
    {
      titulo: "Economia de Tempo",
      descricao: "Reduza em até 80% o tempo gasto na análise de editais com nossa automação inteligente",
      icone: <FaClock />,
      cor: "from-primary to-primaryDark"
    },
    {
      titulo: "Precisão Aumentada",
      descricao: "Minimize erros e garanta conformidade total com os requisitos dos editais",
      icone: <FaCheckCircle />,
      cor: "from-primary to-primaryLight"
    },
    {
      titulo: "Segurança Total",
      descricao: "Seus dados estão protegidos com criptografia de ponta e backup automático",
      icone: <FaShieldAlt />,
      cor: "from-primary to-primaryDark"
    },
    {
      titulo: "Suporte Especializado",
      descricao: "Equipe de especialistas em licitações disponível para auxiliar seu sucesso",
      icone: <FaUsers />,
      cor: "from-primaryLight to-primary"
    }
  ];

  const ferramentas = [
    {
      nome: "Analista de Editais",
      descricao: "Inteligência artificial especializada em análise e interpretação de documentos licitatórios",
      recursos: [
        "Extração automática de requisitos",
        "Identificação de critérios de julgamento",
        "Análise de documentação necessária",
        "Prazos e cronogramas"
      ]
    },
    {
      nome: "Elaborador de Propostas",
      descricao: "Ferramenta para criação de propostas técnicas e comerciais otimizadas",
      recursos: [
        "Templates personalizáveis",
        "Cálculos automáticos",
        "Verificação de conformidade",
        "Histórico de propostas"
      ]
    },
    {
      nome: "Precificador Inteligente",
      descricao: "Sistema de análise de preços baseado em dados de mercado e histórico de licitações",
      recursos: [
        "Análise de viabilidade econômica",
        "Comparação com concorrentes",
        "Sugestões de precificação",
        "Margem de lucro otimizada"
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary to-primaryDark p-4 rounded-full">
              <FaRocket className="text-4xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-secondary mb-4">Como Funciona o Licita em Prática</h1>
          <p className="text-xl text-indigo-DEFAULT max-w-3xl mx-auto">
            Descubra como nossa plataforma revoluciona o processo de participação em licitações públicas, 
            combinando inteligência artificial com expertise em contratos governamentais.
          </p>
        </motion.div>

        {/* Processo Passo a Passo */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Processo Simplificado em 4 Etapas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              >
                <div className="absolute -top-4 left-6">
                  <div className="bg-gradient-to-r from-primary to-primaryDark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {etapa.numero}
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-4">
                    <div className="text-2xl text-purple-600">
                      {etapa.icone}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{etapa.titulo}</h3>
                  <p className="text-indigo-DEFAULT text-sm mb-4">{etapa.descricao}</p>
                </div>
                
                <ul className="space-y-2">
                  {etapa.detalhes.map((detalhe, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                      {detalhe}
                    </li>
                  ))}
                </ul>
                
                {index < etapas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-gray-300 text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Principais Vantagens */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Por que Escolher Nossa Plataforma?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vantagens.map((vantagem, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${vantagem.cor}`}>
                  <div className="text-white text-xl">
                    {vantagem.icone}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{vantagem.titulo}</h3>
                  <p className="text-indigo-DEFAULT">{vantagem.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ferramentas Disponíveis */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Ferramentas Inteligentes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ferramentas.map((ferramenta, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
                    <FaLightbulb className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{ferramenta.nome}</h3>
                  <p className="text-indigo-DEFAULT text-sm mb-6">{ferramenta.descricao}</p>
                </div>
                
                <div className="space-y-3">
                  {ferramenta.recursos.map((recurso, idx) => (
                    <div key={idx} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <span className="text-gray-600">{recurso}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Rápido */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaQuestionCircle className="text-purple-500 mr-3" />
                    <h3 className="font-bold text-secondary">É seguro usar a plataforma?</h3>
                  </div>
                  <p className="text-gray-600">
                    Sim, utilizamos criptografia de ponta e seguimos todas as normas de segurança para proteger seus dados.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaQuestionCircle className="text-purple-500 mr-3" />
                    <h3 className="font-bold text-secondary">Preciso de treinamento?</h3>
                  </div>
                  <p className="text-gray-600">
                    Nossa interface é intuitiva, mas oferecemos suporte completo e materiais de treinamento.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaQuestionCircle className="text-purple-500 mr-3" />
                    <h3 className="font-bold text-secondary">Como funciona a IA?</h3>
                  </div>
                  <p className="text-gray-600">
                    Nossa IA analisa padrões em editais e utiliza aprendizado de máquina para fornecer insights precisos.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaQuestionCircle className="text-purple-500 mr-3" />
                    <h3 className="font-bold text-secondary">Posso testar gratuitamente?</h3>
                  </div>
                  <p className="text-gray-600">
                    Oferecemos um período de teste gratuito para que você possa avaliar todas as funcionalidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


      </div>
    </DashboardLayout>
  );
} 