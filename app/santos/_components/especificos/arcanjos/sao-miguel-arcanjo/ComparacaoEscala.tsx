'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/comparacao-escala.module.css';

type Santuario = {
  nome: string;
  pais: string;
  altura: number;
  descricao: string;
  imagem: string;
  focoY?: string; // ← Ajuste vertical individual para cada foto (padrão: center)
};

const SANTUARIOS: Santuario[] = [
  {
    nome: 'Skellig Michael',
    pais: 'Irlanda',
    altura: 218,
    descricao: 'Ilha rochosa do Atlântico',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/skellig-hero.jpg',
    focoY: 'center',
  },
  {
    nome: 'Mont Saint-Michel',
    pais: 'França',
    altura: 170,
    descricao: 'Ilha granítica da Normandia',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/mont-saint-michel-hero.jpg',
    focoY: 'center',
  },
  {
    nome: 'Sacra di San Michele',
    pais: 'Itália',
    altura: 962,
    descricao: 'Monte Pirchiriano (Piemonte)',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/sacra-hero.jpg',
    focoY: 'center',
  },
  {
    nome: "Monte Sant'Angelo",
    pais: 'Itália',
    altura: 800,
    descricao: 'Promontório do Gargano',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/gargano-hero.jpg',
    focoY: 'center',
  },
];

export default function ComparacaoEscala() {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const maxAltura = Math.max(...SANTUARIOS.map((s) => s.altura));

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.container} ${visivel ? styles.visivel : ''}`}
    >
      <div className={styles.header}>
        <div className={styles.suprat}>◆ Escala Comparativa ◆</div>
        <h2 className={styles.titulo}>Os Quatro Grandes em Perspectiva</h2>
        <p className={styles.subtitulo}>
          Miguel habita os cumes — mas cada cume tem sua altitude. Compare as elevações
          dos principais santuários miguelinos, do mais baixo ao mais alto.
        </p>
      </div>

      <div className={styles.comparacao}>
        {/* Marcadores de altura à esquerda */}
        <div className={styles.escala}>
          <div className={styles.escalaMarcador} style={{ bottom: '100%' }}>
            <span>{maxAltura}m</span>
          </div>
          <div className={styles.escalaMarcador} style={{ bottom: '75%' }}>
            <span>{Math.round(maxAltura * 0.75)}m</span>
          </div>
          <div className={styles.escalaMarcador} style={{ bottom: '50%' }}>
            <span>{Math.round(maxAltura * 0.5)}m</span>
          </div>
          <div className={styles.escalaMarcador} style={{ bottom: '25%' }}>
            <span>{Math.round(maxAltura * 0.25)}m</span>
          </div>
          <div className={styles.escalaMarcador} style={{ bottom: '0%' }}>
            <span>0m</span>
          </div>
        </div>

        {/* Colunas dos santuários */}
        <div className={styles.colunas}>
          {SANTUARIOS.map((s, i) => {
            const alturaPercent = (s.altura / maxAltura) * 100;
            return (
              <div key={s.nome} className={styles.coluna}>
                <div
                  className={styles.silhueta}
                  style={{
                    height: visivel ? `${alturaPercent}%` : '0%',
                    transitionDelay: `${0.3 + i * 0.2}s`,
                  }}
                >
                  {/* Imagem real (não background) — permite object-fit correto */}
                  <img
                    src={s.imagem}
                    alt={s.nome}
                    className={styles.silhuetaImg}
                    style={{ objectPosition: `center ${s.focoY || 'center'}` }}
                    loading="lazy"
                  />
                  <div className={styles.silhuetaOverlay}></div>
                  <div className={styles.silhuetaAltura}>{s.altura}m</div>
                </div>

                <div className={styles.colunaLabel}>
                  <div className={styles.colunaNome}>{s.nome}</div>
                  <div className={styles.colunaPais}>{s.pais}</div>
                  <div className={styles.colunaDesc}>{s.descricao}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.legenda}>
        <p>
          <strong>Observação:</strong> alturas referem-se à altitude do ponto mais alto de cada santuário
          acima do nível do mar. Sacra di San Michele domina em altitude absoluta, mas Skellig e Mont
          Saint-Michel emergem de forma mais dramática por serem ilhas rochosas verticais.
        </p>
      </div>
    </div>
  );
}