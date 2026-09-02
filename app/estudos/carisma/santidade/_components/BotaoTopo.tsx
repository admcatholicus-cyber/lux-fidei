'use client';

import { useEffect, useState } from 'react';
import layout from '../_styles/layout.module.css';

export default function BotaoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisivel(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${layout.btnTopo} ${visivel ? layout.btnTopoVisivel : ''}`}
      aria-label="Voltar ao topo"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}