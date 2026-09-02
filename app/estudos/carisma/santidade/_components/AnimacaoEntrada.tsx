'use client';

import { useEffect } from 'react';
import cards from '../_styles/cards.module.css';

export default function AnimacaoEntrada() {
  useEffect(() => {
    const seletores = [
      // Prefixos usam camelCase do CSS Module, então buscamos pelos class names finais
      // Como CSS Modules geram hash, vamos usar as classes específicas geradas
    ];

    // Como os componentes já têm as classes do CSS Module (com hash),
    // vamos adicionar a classe `animavel` via querySelectorAll usando as classes hasheadas.
    // Estratégia mais simples: aplicar a todos os elementos que contenham as substrings.
    const todosElementos = document.querySelectorAll(
      '[class*="dimensaoItem"], [class*="profetaCard"], [class*="padreCard"], [class*="doutorCard"], [class*="santoCard"], [class*="viaCard"], [class*="objecaoCard"], [class*="teseItem"], [class*="etapaCard"], [class*="timelineItem"], [class*="conceitoCard"], [class*="estadoCard"], [class*="mariaCard"], [class*="sacramentoCard"], [class*="caractCard"], [class*="trindadeCard"], [class*="virtudeCard"], [class*="filosofoCard"], [class*="dimensaoCard"], [class*="distincaoItem"]'
    );

    todosElementos.forEach((el) => el.classList.add(cards.animavel));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(cards.visivel);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    todosElementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}