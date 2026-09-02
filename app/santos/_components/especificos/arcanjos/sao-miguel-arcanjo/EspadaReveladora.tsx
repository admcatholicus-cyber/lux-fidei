'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/interativos.module.css';

type Props = {
  imagemSuperior: string;
  imagemInferior: string;
  legendaSuperior: string;
  legendaInferior: string;
  titulo: string;
  descricao?: ReactNode;
};

export default function EspadaReveladora({
  imagemSuperior,
  imagemInferior,
  legendaSuperior,
  legendaInferior,
  titulo,
  descricao,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState(50);
  const [ativo, setAtivo] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosicao(Math.max(0, Math.min(100, x)));
    setAtivo(true);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPosicao(Math.max(0, Math.min(100, x)));
    setAtivo(true);
  };

  return (
    <div
      ref={ref}
      className={`${styles.espadaContainer} ${visivel ? styles.espadaVisivel : ''}`}
    >
      <div className={styles.espadaHeader}>
        <h3 className={styles.espadaTitulo}>{titulo}</h3>
        {descricao && <div className={styles.espadaDescricao}>{descricao}</div>}
      </div>

      <div
        className={styles.espadaImagemArea}
        onMouseMove={handleMove}
        onMouseLeave={() => setAtivo(false)}
        onTouchMove={handleTouch}
        onTouchEnd={() => setAtivo(false)}
      >
        {/* Imagem inferior (revelada) */}
        <div
          className={styles.espadaImagemInferior}
          style={{ backgroundImage: `url(${imagemInferior})` }}
        />

        {/* Imagem superior */}
        <div
          className={styles.espadaImagemSuperior}
          style={{
            backgroundImage: `url(${imagemSuperior})`,
            clipPath: `polygon(0 0, ${posicao}% 0, ${posicao}% 100%, 0 100%)`,
          }}
        />

        {/* Linha da espada */}
        <div
          className={`${styles.espadaLamina} ${ativo ? styles.espadaLaminaAtiva : ''}`}
          style={{ left: `${posicao}%` }}
        >
          <div className={styles.espadaBrilho} />
          <div className={styles.espadaCabo}>
            <div className={styles.espadaCabecaIcone}>✧</div>
          </div>
          <div className={styles.espadaLinhaMovimento} />
        </div>

        {/* Indicador de arraste */}
        <div className={`${styles.espadaHint} ${ativo ? styles.espadaHintOculto : ''}`}>
          <span className={styles.espadaSetaEsq}>◄</span>
          <span>arraste</span>
          <span className={styles.espadaSetaDir}>►</span>
        </div>
      </div>

      {/* Legendas posicionadas abaixo da imagem no mobile */}
      <div className={styles.espadaLegendas}>
        <div className={styles.espadaLegendaEsq}>
          <div className={styles.espadaLegendaLabel}>Superfície</div>
          <div className={styles.espadaLegendaTexto}>{legendaSuperior}</div>
        </div>
        <div className={styles.espadaLegendaDir}>
          <div className={styles.espadaLegendaLabel}>Revelação</div>
          <div className={styles.espadaLegendaTexto}>{legendaInferior}</div>
        </div>
      </div>
    </div>
  );
}