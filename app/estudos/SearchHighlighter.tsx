'use client';

import { useEffect } from 'react';

/**
 * Lê ?highlight=palavra da URL e:
 * 1. Encontra o elemento que contém a palavra
 * 2. Rola até ele suavemente
 * 3. Destaca temporariamente por 3 segundos
 */
export default function SearchHighlighter() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const highlight = params.get('highlight');
    if (!highlight) return;

    const normalize = (t: string) =>
      t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const tokens = normalize(highlight).split(/\s+/).filter((t) => t.length > 1);
    if (tokens.length === 0) return;

    // Aguarda o DOM ficar pronto
    setTimeout(() => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (!node.textContent || node.textContent.trim().length < 3) {
              return NodeFilter.FILTER_REJECT;
            }
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName.toLowerCase();
            if (['script', 'style', 'noscript'].includes(tag)) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      let firstMatch: HTMLElement | null = null;
      const matchedElements: HTMLElement[] = [];

      let node: Node | null;
      while ((node = walker.nextNode())) {
        const text = normalize(node.textContent || '');
        const allTokensPresent = tokens.every((t) => text.includes(t));
        if (allTokensPresent && node.parentElement) {
          matchedElements.push(node.parentElement);
          if (!firstMatch) firstMatch = node.parentElement;
        }
      }

      if (firstMatch) {
        // Rola até o elemento
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Destaca temporariamente
        matchedElements.forEach((el) => {
          const originalBg = el.style.backgroundColor;
          const originalTransition = el.style.transition;

          el.style.transition = 'background-color 0.4s ease';
          el.style.backgroundColor = 'rgba(212, 176, 106, 0.55)';
          el.style.borderRadius = '4px';
          el.style.padding = '2px 4px';

          setTimeout(() => {
            el.style.backgroundColor = originalBg;
            setTimeout(() => {
              el.style.transition = originalTransition;
            }, 500);
          }, 3500);
        });
      }
    }, 400);
  }, []);

  return null;
}