'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return null;
} 