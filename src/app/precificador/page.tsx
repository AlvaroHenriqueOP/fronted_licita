'use client';

import React from 'react';
import DashboardLayout from '../dashboard/DashboardLayout';
import { motion } from 'framer-motion';

export default function Precificador() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h1 className="text-2xl font-bold text-secondary mb-6">Precificador</h1>
          
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-600 mb-4">
              Esta é a página do Precificador (placeholder).
            </p>
            <p className="text-gray-500">
              Aqui serão implementadas as funcionalidades para cálculo e análise de precificação para licitações.
            </p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 