import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AOSInitializer from './AOSInitializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Licita em Prática',
  description: 'A plataforma que utiliza inteligência artificial para otimizar seus processos de licitação',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
} 