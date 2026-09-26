'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const consentimento = localStorage.getItem('lux_fidei_cookie_consent');
    if (!consentimento) {
      setVisivel(true);
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem('lux_fidei_cookie_consent', 'aceito');
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: '#1c1816',
      color: '#ece7dc',
      padding: '16px 24px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
      zIndex: 9999,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      fontSize: '13px',
      borderTop: '1px solid #d4b872',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ flex: '1 1 300px', lineHeight: '1.5' }}>
        Utilizamos cookies e tecnologias semelhantes para melhorar a navegação, analisar métricas e veicular anúncios personalizados do Google. Ao continuar navegando, você concorda com a nossa{' '}
        <Link href="/privacidade" style={{ color: '#d4b872', textDecoration: 'underline' }}>
          Política de Privacidade
        </Link>.
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={aceitarCookies}
          style={{
            backgroundColor: '#d4b872',
            color: '#1c1816',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
}
