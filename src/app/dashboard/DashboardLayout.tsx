'use client';

import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaUserAlt,
  FaChartLine,
  FaCog,
  FaQuestionCircle,
  FaBell,
  FaTelegram,
  FaBars,
  FaTimes,
  FaInfoCircle,
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar clique fora do menu para fechá-lo em dispositivos móveis
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Animações para os itens do menu
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  // Links de navegação
  const navItems = [
    { icon: <FaUserAlt />, label: 'Agentes de IA', href: '/agentes' },
    { icon: <FaSearch />, label: 'Oportunidades', href: '/oportunidades' },
    { icon: <FaChartLine />, label: 'Precificador', href: '/precificador' },
    { icon: <FaCog />, label: 'Configurações', href: '/configuracoes' },
    { icon: <FaInfoCircle />, label: 'Como Funciona', href: '/como-funciona' },
    { icon: <FaQuestionCircle />, label: 'Manual & FAQ', href: '/manual' },
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fc] overflow-hidden">
      {/* Mobile menu toggle */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-white shadow-md text-secondary"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Sidebar - Desktop */}
      <motion.div 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[250px] bg-gradient-to-b from-secondary to-secondary/95 text-white flex-col fixed h-full z-30 hidden lg:flex shadow-xl"
      >
        {/* Logo */}
        <motion.div 
          className="p-6 flex items-center h-20 border-b border-secondaryLight" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img 
            src="/fotos/logo_licita.png" 
            alt="Licita em Prática" 
            className="h-12 w-auto"
          />
        </motion.div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden
                    ${pathname === item.href ? 
                      'bg-secondaryLight text-white' : 
                      'text-gray-300 hover:bg-secondaryLight/60 hover:text-white'}`}
                >
                  {hoveredItem === index && pathname !== item.href && (
                    <motion.div 
                      className="absolute inset-0 bg-secondaryLight/20 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layoutId="hoverBackground"
                    />
                  )}
                  <div className={`transition-all duration-200 ${pathname === item.href ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {pathname === item.href && (
                    <motion.div 
                      className="w-1 h-8 bg-gradient-to-b from-red-light to-primary absolute right-0 rounded-l-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Telegram Group */}
        <div className="p-4 mt-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary to-primaryDark text-white p-5 rounded-lg shadow-lg"
            whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(190, 30, 31, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <FaTelegram className="mr-2 text-xl" />
              <span className="font-bold text-lg">Grupo Telegram</span>
            </div>
            <p className="text-sm mb-3 opacity-90">
              Participe do nosso grupo gratuito e receba dicas, novidades e oportunidades exclusivas
            </p>
                          <motion.button 
              className="bg-white text-primary text-sm font-semibold py-2 px-4 rounded-md w-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaTelegram className="mr-2" />
              Entrar no Grupo
            </motion.button>
          </motion.div>
        </div>
        
        {/* Support */}
        <div className="p-5 border-t border-secondaryLight flex justify-between items-center">
          <span className="text-sm text-gray-400 font-medium">Suporte</span>
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 5 }} 
            whileTap={{ scale: 0.9 }}
          >
            <FaTelegram className="text-gray-400 hover:text-blue-DEFAULT cursor-pointer text-lg" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Sidebar - Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="mobile-menu-container w-[280px] bg-gradient-to-b from-secondary to-secondary/95 text-white h-full flex flex-col shadow-2xl"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-5 border-b border-secondaryLight flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src="/fotos/logo_licita.png" 
                    alt="Licita em Prática" 
                    className="h-8 w-auto"
                  />
                </div>
                <motion.button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-gray-400" />
                </motion.button>
              </div>
              
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={item.href} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                          ${pathname === item.href ? 
                            'bg-secondaryLight text-white' : 
                            'text-gray-300 hover:bg-secondaryLight/60 hover:text-white'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={pathname === item.href ? 'text-accent' : 'text-gray-400'}>
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-4">
                <motion.div 
                  className="bg-gradient-to-br from-blue-DEFAULT to-blue-dark text-white p-4 rounded-lg shadow-lg"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center mb-1">
                    <FaTelegram className="mr-2" />
                    <span className="font-bold">Grupo Telegram</span>
                  </div>
                  <p className="text-xs mb-2 opacity-90">
                    Participe do nosso grupo gratuito
                  </p>
                  <motion.button 
                    className="bg-white text-blue-dark text-xs font-medium py-1.5 px-3 rounded-md w-full flex items-center justify-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTelegram className="mr-1" />
                    Entrar no Grupo
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content Area */}
      <div className="lg:ml-[250px] flex-1 flex flex-col">
        {/* Header */}
        <motion.header 
          className={`bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20 transition-all duration-300 ${scrolled ? 'h-16 shadow-sm' : 'h-20'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-xl font-bold text-secondary">
            {pathname === '/agentes' ? 'Agentes de IA' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
          </h1>
          <div className="flex items-center space-x-5">
            <motion.button 
              className="flex items-center text-white bg-gradient-primary px-4 py-2 rounded-md text-sm font-semibold shadow-sm"
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(190, 30, 31, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>/Assinatura Atual/</span>
            </motion.button>
            <motion.button 
              className="flex items-center text-secondary bg-gray-light/10 border border-primary/20 px-4 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.03, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>/X créditos/</span>
            </motion.button>
            <motion.button 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaBell className="text-gray-500 text-xl" />
              <span className="absolute -top-1 -right-1 bg-accent text-secondary text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
            </motion.button>
            <motion.div 
              className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white cursor-pointer shadow-sm"
              whileHover={{ scale: 1.05, boxShadow: "shadow-glow" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">KM</span>
            </motion.div>
          </div>
        </motion.header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 