import React from 'react';
import styles from '../../_styles/biografia.module.css';

interface EpisodioProps {
  titulo: string;
  fonte?: string;
  children: React.ReactNode;
}

export function Episodio({ titulo, fonte, children }: EpisodioProps) {
  return (
    <div className={styles.episodioCard}>
      <header className={styles.episodioHeader}>
        <span className={styles.episodioIcone}>❖</span>
        <h4 className={styles.episodioTitulo}>{titulo}</h4>
      </header>
      
      <div className={styles.episodioCorpo}>
        {children}
      </div>

      {fonte && (
        <footer className={styles.episodioFonte}>
          {fonte}
        </footer>
      )}
    </div>
  );
}