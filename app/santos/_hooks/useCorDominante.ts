'use client';

import { useEffect, useState } from 'react';

const FALLBACK_COR = '#8b6f3d'; // dourado
const cache = new Map<string, string>();

export function useCorDominante(imageSrc: string | null): string {
  const [cor, setCor] = useState(FALLBACK_COR);

  useEffect(() => {
    if (!imageSrc) return;

    // Cache hit
    if (cache.has(imageSrc)) {
      setCor(cache.get(imageSrc)!);
      return;
    }

    // Extrai cor dominante usando Canvas
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Amostra pequena pra performance
        const size = 50;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const data = ctx.getImageData(0, 0, size, size).data;

        // Conta as cores agrupadas (quantização simples)
        const cores: Record<string, { r: number; g: number; b: number; count: number }> = {};

        for (let i = 0; i < data.length; i += 16) { // pula pixels pra velocidade
          const r = Math.round(data[i] / 32) * 32;
          const g = Math.round(data[i + 1] / 32) * 32;
          const b = Math.round(data[i + 2] / 32) * 32;
          const a = data[i + 3];

          // Ignora transparentes e muito claros/escuros
          if (a < 128) continue;
          const brilho = (r + g + b) / 3;
          if (brilho < 30 || brilho > 230) continue;

          const key = `${r},${g},${b}`;
          if (!cores[key]) {
            cores[key] = { r, g, b, count: 0 };
          }
          cores[key].count++;
        }

        // Pega a cor mais frequente
        let melhor = { r: 139, g: 111, b: 61, count: 0 }; // fallback dourado
        Object.values(cores).forEach((c) => {
          if (c.count > melhor.count) melhor = c;
        });

        const hex = `#${melhor.r.toString(16).padStart(2, '0')}${melhor.g.toString(16).padStart(2, '0')}${melhor.b.toString(16).padStart(2, '0')}`;

        cache.set(imageSrc, hex);
        setCor(hex);
      } catch {
        setCor(FALLBACK_COR);
      }
    };

    img.onerror = () => setCor(FALLBACK_COR);
  }, [imageSrc]);

  return cor;
}