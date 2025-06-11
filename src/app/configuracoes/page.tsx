'use client';

import React from 'react';
import DashboardLayout from '../dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';

export default function Configuracoes() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-6">
            <FaCog className="text-secondary mr-3 text-xl" />
            <h1 className="text-2xl font-bold text-secondary">Configurações</h1>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-600 mb-4">
              Esta é a página de Configurações (placeholder).
            </p>
            <p className="text-gray-500">
              Aqui serão implementadas as opções de configuração da plataforma.
            </p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 