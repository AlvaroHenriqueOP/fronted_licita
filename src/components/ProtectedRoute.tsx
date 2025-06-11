'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!isAuthenticated && pathname !== '/login') {
      // Redireciona para a página de login
      router.push('/login');
    }
  }, [isAuthenticated, router, pathname]);

  // Se não estiver autenticado e não estiver na página de login, não renderiza nada
  if (!isAuthenticated && pathname !== '/login') {
    return null;
  }

  // Se estiver autenticado ou estiver na página de login, renderiza os filhos
  return <>{children}</>;
} 