// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollConfig() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar de ruta, mueve el scroll al inicio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // no renderiza nada
}