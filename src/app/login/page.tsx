'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaBuilding, FaFileContract, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

  // Array de ícones relacionados a licitações
const backgroundIcons = [
    { Icon: FaBuilding, top: '15%', left: '10%', size: '3rem', opacity: 0.12, rotate: 15 },
    { Icon: FaFileContract, top: '25%', left: '80%', size: '2.5rem', opacity: 0.1, rotate: -10 },
    { Icon: FaChartLine, top: '70%', left: '15%', size: '2.8rem', opacity: 0.13, rotate: 5 },
    { Icon: FaClipboardCheck, top: '65%', left: '75%', size: '2.3rem', opacity: 0.11, rotate: -5 },
    { Icon: FaBuilding, top: '45%', left: '90%', size: '2rem', opacity: 0.09, rotate: 20 },
    { Icon: FaFileContract, top: '85%', left: '40%', size: '2.2rem', opacity: 0.1, rotate: -15 },
    { Icon: FaChartLine, top: '10%', left: '40%', size: '2.4rem', opacity: 0.12, rotate: 10 },
    { Icon: FaClipboardCheck, top: '40%', left: '5%', size: '2.1rem', opacity: 0.09, rotate: -8 },
];

const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulação de chamada à API
    console.log('Chamando API de login com:', email, password);
    
      // Simulando um atraso para mostrar o estado de carregamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
      // Aqui seria feita a chamada real à API
      // const response = await api.login(email, password);
    
      // Redirecionamento após login bem-sucedido
      // router.push('/dashboard');
    } catch (err) {
    console.error('Erro ao fazer login:', err);
    setError('Credenciais inválidas. Por favor, tente novamente.');
    } finally {
    setIsLoading(false);
    }
};

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
};

return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fundo base com gradiente */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-secondary"></div>
    
      {/* Padrão geométrico de fundo */}
    <div className="absolute inset-0 opacity-10" 
        style={{ 
            backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
        }}>
    </div>
    
      {/* Forma decorativa superior */}
    <motion.div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-primary opacity-10 rounded-full"
        animate={{ 
        scale: [1, 1.05, 1],
        }}
        transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
        }}
    />

      {/* Forma decorativa inferior */}
    <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary opacity-10 rounded-full"
        animate={{ 
        scale: [1, 1.08, 1],
        }}
        transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
        }}
    />
    
      {/* Linha ondulada decorativa - mais visível */}
    <motion.div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ top: '35%' }}
        animate={{ 
        opacity: [0.2, 0.4, 0.2],
        y: [0, 10, 0],
        }}
        transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
        }}
    />
    
    <motion.div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primaryLight/30 to-transparent"
        style={{ top: '65%' }}
        animate={{ 
        opacity: [0.2, 0.4, 0.2],
        y: [0, -10, 0],
        }}
        transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
        }}
    />
    
      {/* Ícones relacionados a licitações no fundo */}
    {backgroundIcons.map((item, index) => {
        const { Icon, top, left, size, opacity, rotate } = item;
        return (
        <motion.div
            key={index}
            className="absolute text-white"
            style={{
            top,
            left,
            fontSize: size,
            opacity,
            transform: `rotate(${rotate}deg)`,
            }}
            animate={{ 
            y: [0, -10, 0, 10, 0],
              opacity: [opacity, opacity * 1.3, opacity],
            }}
            transition={{
            duration: 10 + index,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
              delay: index * 0.5,
            }}
        >
            <Icon />
        </motion.div>
        );
    })}
    
      {/* Conteúdo do formulário */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden z-10"
    >
        <div className="p-8">
                  <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img 
                src="/fotos/logo_licita.png" 
                alt="Licita em Prática" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-secondary">Acesse sua Conta</h2>
            <p className="text-gray-600 text-sm mt-2">Entre para gerenciar suas licitações</p>
        </div>

        {error && (
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm"
            >
            {error}
            </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
                </div>
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full rounded-lg border border-gray-light/20 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:outline-none"
                placeholder="seu@email.com"
                />
            </div>
            </div>

            <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-secondary">
                Senha
                </label>
                <Link
                href="#"
                className="text-xs font-medium text-primary hover:text-primaryDark transition-colors"
                >
                Esqueci minha senha
                </Link>
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
                </div>
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full rounded-lg border border-gray-light/20 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:outline-none"
                placeholder="••••••••"
                />
            </div>
            </div>

            <div>
            <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ) : (
                'Entrar'
                )}
            </motion.button>
            </div>
        </form>

        <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
            Não tem uma conta?{' '}
            <Link href="#" className="font-medium text-blue-DEFAULT hover:text-blue-dark">
                Criar conta
            </Link>
            </p>
        </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-light/10 to-blue-light/10 p-6 border-t border-indigo-light/10">
        <p className="text-xs text-center text-gray-500">
            Licita em Prática © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
        </div>
    </motion.div>
    </div>
);
} 