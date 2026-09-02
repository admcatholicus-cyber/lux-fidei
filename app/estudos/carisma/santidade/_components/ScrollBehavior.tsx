'use client';

import { useEffect } from 'react';

export default function ScrollBehavior() {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const dest = document.querySelector(href);
      if (!dest) return;

      e.preventDefault();
      const offsetTop = (dest as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}