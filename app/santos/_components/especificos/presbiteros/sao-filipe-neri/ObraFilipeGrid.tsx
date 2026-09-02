'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { gerarCartasLegiveis } from '../../../../../biblioteca/sao-filipe-neri/lib/cartas-unificadas';
import { maximas } from '../../../../../biblioteca/sao-filipe-neri/data/maximas';
import { sonetos } from '../../../../../biblioteca/sao-filipe-neri/data/sonetos';
import styles from '../../../../_styles/especificos/presbiteros/sao-filipe-neri/obras.module.css';

type ObraItem = {
  id: string;
  tipo: 'Carta' | 'Máxima' | 'Soneto';
  icone: string;
  titulo: string;
  previa: string;
  textoCompleto: string;
  urlBiblioteca: string;
};

export default function ObraFilipeGrid() {
  const [modalAberto, setModalAberto] = useState(false);
  const [telaCheia, setTelaCheia] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<ObraItem | null>(null);

  // 1. Pegar algumas cartas icônicas
  const cartasRaw = gerarCartasLegiveis().slice(0, 4); 
  const cartasMapeadas: ObraItem[] = cartasRaw.map((c) => ({
    id: c.id,
    tipo: 'Carta',
    icone: '📜',
    titulo: `A ${c.destinatario}`,
    previa: c.cartaHistorica?.portugues.texto.substring(0, 120) + '...',
    textoCompleto: c.cartaHistorica?.portugues.texto ?? '',
    urlBiblioteca: `/biblioteca/sao-filipe-neri/cartas/${c.id}`,
  }));

  // 2. Pegar algumas máximas icônicas
  const maximasRaw = maximas.slice(0, 4);
  const maximasMapeadas: ObraItem[] = maximasRaw.map((m: any) => ({
    id: m.id,
    tipo: 'Máxima',
    icone: '✦',
    titulo: `${m.dia} de ${m.mes}`,
    previa: m.portugues.texto,
    textoCompleto: m.portugues.texto,
    urlBiblioteca: `/biblioteca/sao-filipe-neri/maximas/${m.id}`,
  }));

  // 3. Pegar o soneto autêntico
  const sonetoRaw = sonetos[0] as any;
  const sonetoMapeado: ObraItem = {
    id: sonetoRaw.id,
    tipo: 'Soneto',
    icone: '🎵',
    titulo: sonetoRaw.titulo,
    previa: sonetoRaw.portugues.versos.slice(0, 4).join('\n') + '...',
    textoCompleto: sonetoRaw.portugues.versos.join('\n'),
    urlBiblioteca: `/biblioteca/sao-filipe-neri/sonetos/${sonetoRaw.id}`,
  };

  const abrirModal = (item: ObraItem) => {
    setItemSelecionado(item);
    setTelaCheia(false);
    setModalAberto(true);
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTimeout(() => setItemSelecionado(null), 300);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={styles.secaoObras}>
        <h2 className={styles.tituloSecao}>Cartas Selecionadas</h2>
        <div className={styles.grid}>
          {cartasMapeadas.map((item) => (
            <button key={item.id} className={styles.card} onClick={() => abrirModal(item)}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcone}>{item.icone}</span>
                <span className={styles.cardTipo}>{item.tipo}</span>
              </div>
              <h3 className={styles.cardTitulo}>{item.titulo}</h3>
              <p className={styles.cardPrevia}>{item.previa}</p>
            </button>
          ))}
        </div>

        <h2 className={styles.tituloSecao}>Máximas Espirituais</h2>
        <div className={styles.grid}>
          {maximasMapeadas.map((item) => (
            <button key={item.id} className={styles.card} onClick={() => abrirModal(item)}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcone}>{item.icone}</span>
                <span className={styles.cardTipo}>{item.tipo}</span>
              </div>
              <h3 className={styles.cardTitulo}>{item.titulo}</h3>
              <p className={styles.cardPrevia}>{item.previa}</p>
            </button>
          ))}
          
          <button className={styles.card} onClick={() => abrirModal(sonetoMapeado)}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcone}>{sonetoMapeado.icone}</span>
              <span className={styles.cardTipo}>{sonetoMapeado.tipo}</span>
            </div>
            <h3 className={styles.cardTitulo}>{sonetoMapeado.titulo}</h3>
            <p className={styles.cardPrevia}>{sonetoMapeado.previa}</p>
          </button>
        </div>
      </div>

      {/* MODAL */}
      <div className={`${styles.modalOverlay} ${modalAberto ? styles.aberto : ''}`} onClick={fecharModal}>
        <div 
          className={`${styles.modalBox} ${telaCheia ? styles.telaCheia : ''}`} 
          onClick={(e) => e.stopPropagation()}
        >
          {itemSelecionado && (
            <>
              <header className={styles.modalHeader}>
                <h3 className={styles.modalTitulo}>
                  {itemSelecionado.tipo}: {itemSelecionado.titulo}
                </h3>
                <button className={styles.modalClose} onClick={fecharModal}>&times;</button>
              </header>

              <div className={styles.modalContent}>
                <div className={styles.textoObra}>
                  {itemSelecionado.textoCompleto.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <footer className={styles.modalFooter}>
                <button 
                  className={`${styles.btnAcao} ${styles.btnTelaCheia}`}
                  onClick={() => setTelaCheia(!telaCheia)}
                >
                  {telaCheia ? 'Sair da Tela Cheia' : 'Ler em Tela Cheia'}
                </button>

                <Link href={itemSelecionado.urlBiblioteca} className={`${styles.btnAcao} ${styles.btnBiblioteca}`}>
                  🏛 Ver na Biblioteca
                </Link>
              </footer>
            </>
          )}
        </div>
      </div>
    </>
  );
}