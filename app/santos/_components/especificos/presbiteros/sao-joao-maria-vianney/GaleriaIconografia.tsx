'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../../../_styles/especificos/presbiteros/sao-joao-maria-vianney/GaleriaIconografia.module.css';

// Interface ajustada (sem o campo de dimensões)
interface Obra {
  id: string;
  imagemUrl: string;
  titulo: string;
  tipo: string;
  descricao: string;
}

// O banco de dados completo com as 25 obras ordenadas de 1 a 25
const OBRAS_VIANNEY: Obra[] = [
  { 
    id: '1', 
    titulo: "Saint Jean Vianney (George Desvallières)", 
    tipo: "Pintura a óleo (1920)", 
    descricao: "Retrato de São João Maria Vianney apresentado de maneira frontal e solene, com sua característica aparência sacerdotal, criado pelo renomado artista George Desvallières.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/1.webp" 
  },
  { 
    id: '2', 
    titulo: "Ajoelhado em oração (Cabuchet)", 
    tipo: "Escultura em mármore", 
    descricao: "Vianney aparece ajoelhado, com as mãos em oração e os olhos elevados ao céu, em atitude de êxtase.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/2.webp" 
  },
  { 
    id: '3', 
    titulo: "Estátua - Prairie de l'église souterraine", 
    tipo: "Escultura (Maison Raffl)", 
    descricao: "Representação de corpo inteiro de Vianney, instalada no santuário de Ars-sur-Formans. Obra de Louis Noël.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/3.webp" 
  },
  { 
    id: '4', 
    titulo: "Enfant retrouvé en prière (Paul Borel)", 
    tipo: "Pintura mural", 
    descricao: "Representa Jean-Marie Vianney ainda criança, encontrado pela mãe em oração enquanto cuidava dos animais. Pintura integrante do ciclo da Basílica de Ars.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/4.webp" 
  },
  { 
    id: '5', 
    titulo: "Villefranche-de-Rouergue", 
    tipo: "Gesso policromado", 
    descricao: "Representado de corpo inteiro, de frente, com as mãos juntas e vestes sacerdotais.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/5.webp" 
  },
  { 
    id: '6', 
    titulo: "Le Fugeret (Pierre Vermare)", 
    tipo: "Estatueta em gesso", 
    descricao: "Vianney aparece de pé, com as mãos juntas e a cabeça levemente inclinada.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/6.webp" 
  },
  { 
    id: '7', 
    titulo: "Prêchant sur la colline (Paul Borel)", 
    tipo: "Pintura mural", 
    descricao: "Vianney aparece pregando a um grupo de camponeses em uma colina na planície da Dombes, enfatizando seu trabalho de evangelização.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/7.webp" 
  },
  { 
    id: '8', 
    titulo: "Grand-Champ", 
    tipo: "Madeira policromada", 
    descricao: "Vianney é representado como sacerdote em oração. Faz parte de um conjunto de três santos.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/8.webp" 
  },
  { 
    id: '9', 
    titulo: "Statuette 'Saint Curé d'Ars' - Lanhélin", 
    tipo: "Gesso policromado", 
    descricao: "Pequena representação de Vianney produzida por Pieraccini.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/9.webp" 
  },
  { 
    id: '10', 
    titulo: "Bénissant les enfants (Paul Borel)", 
    tipo: "Pintura mural", 
    descricao: "Vianney aparece diante do presbitério abençoando as crianças. Uma representação narrativa tocante na Basílica de Ars.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/10.webp" 
  },
  { 
    id: '11', 
    titulo: "Fressin (Jules Déchin)", 
    tipo: "Escultura em gesso", 
    descricao: "Vianney é representado segurando os símbolos eucarísticos: cálice e hóstia.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/11.webp" 
  },
  { 
    id: '12', 
    titulo: "Au confessionnal (Paul Borel)", 
    tipo: "Pintura mural", 
    descricao: "Vianney junto ao confessionário atenta a um penitente ajoelhado, retratando o aspecto mais famoso de seu ministério pastoral.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/12.webp" 
  },
  { 
    id: '13', 
    titulo: "Guérison de saint Jean-Marie Vianney (1843)", 
    tipo: "Pintura a óleo sobre tela", 
    descricao: "Registra a cura de Vianney atribuída à intercessão de Santa Filomena, que aparece nas nuvens enquanto sacerdotes e leigos rezam ao lado de seu leito.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/13.webp" 
  },
  { 
    id: '14', 
    titulo: "'Le Curé d'Ars' - Shelley P.", 
    tipo: "Pintura a óleo sobre tela", 
    descricao: "Retrato de Vianney sentado, mostrado da cintura para cima, ligeiramente de três quartos, usando sobrepeliz e estola.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/14.webp" 
  },
  { 
    id: '15', 
    titulo: "La Mort du Curé d'Ars", 
    tipo: "Pintura a óleo sobre tela", 
    descricao: "Cena histórica do momento da morte: Vianney está deitado em seu quarto na reitoria, cercado pelo médico Saunier, o padre Louis Beau e colaboradores.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/15.webp" 
  },
  { 
    id: '16', 
    titulo: "Portrait du Curé d'Ars mort (Armbruster)", 
    tipo: "Pintura (1862)", 
    descricao: "Vianney representado já falecido, visto de perfil no travesseiro, obra feita pelo artista e fotógrafo Jean-François Armbruster.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/16.webp" 
  },
  { 
    id: '17', 
    titulo: "Le Curé d'Ars (Paul Borel)", 
    tipo: "Pintura", 
    descricao: "Retrato individual em tela produzido por Paul Borel, registrado na documentação patrimonial francesa.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/17.webp" 
  },
  { 
    id: '18', 
    titulo: "Aparição da Virgem", 
    tipo: "Vitral (Basílica de Ars)", 
    descricao: "Vianney aparece ajoelhado diante da Virgem Maria, que lhe aparece sobre uma nuvem.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/18.webp" 
  },
  { 
    id: '19', 
    titulo: "Vitral de Boulogne-sur-Mer", 
    tipo: "Vitral", 
    descricao: "Vianney é representado junto a um confessionário, reunido a outros santos e referências ao Sagrado Coração.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/19.webp" 
  },
  { 
    id: '20', 
    titulo: "Vitral de Tendu", 
    tipo: "Vitral", 
    descricao: "Figura de Vianney em pé, integrante de um conjunto de quatro vitrais com santos.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/20.webp" 
  },
  { 
    id: '21', 
    titulo: "Vitral de Saint-Martin-Rivière", 
    tipo: "Vitral", 
    descricao: "Vianney aparece em uma das dez janelas da nave, identificado como 'Saint Curé d'Ars'.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/21.webp" 
  },
  { 
    id: '22', 
    titulo: "Vitral de Aveyron", 
    tipo: "Vitral", 
    descricao: "Vianney aparece de corpo inteiro, vestido com traje sacerdotal e segurando um crucifixo.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/22.webp" 
  },
  { 
    id: '23', 
    titulo: "Com São Francisco de Sales (P. Louzier)", 
    tipo: "Vitral", 
    descricao: "Grande vitral originalmente produzido para Notre-Dame de Paris, mostrando Vianney ao lado de São Francisco de Sales.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/23.webp" 
  },
  { 
    id: '24', 
    titulo: "Vitral de Rimbach-près-Masevaux", 
    tipo: "Vitral", 
    descricao: "Representação moderna de Vianney em vitral, com auréola dourada e vestes sacerdotais.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/24.webp" 
  },
  { 
    id: '25', 
    titulo: "Retrato Frontal (Matías del Rey)", 
    tipo: "Pintura a óleo", 
    descricao: "Retrato frontal de Vianney usando sobrepeliz e estola roxa, contra fundo escuro. Representação pictórica moderna.", 
    imagemUrl: "/santos/biografia/presbiteros/sao-joao-maria-vianney/iconografia/25.webp" 
  }
];

export function GaleriaIconografia() {
  const [obraSelecionada, setObraSelecionada] = useState<Obra | null>(null);

  // Fecha o modal se o usuário apertar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setObraSelecionada(null);
    };
    if (obraSelecionada) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [obraSelecionada]);

  // Trava o scroll do body quando o lightbox tá aberto
  useEffect(() => {
    if (obraSelecionada) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [obraSelecionada]);

  return (
    <>
      <div className={styles.masonryGrid}>
        {OBRAS_VIANNEY.map((obra) => (
          <div 
            key={obra.id} 
            className={styles.card}
            onClick={() => setObraSelecionada(obra)}
            title="Clique para ampliar"
          >
            <img 
              src={obra.imagemUrl} 
              alt={obra.titulo} 
              className={styles.image}
              loading="lazy"
            />
            
            <div className={styles.overlay}>
              <div className={styles.metaCategoria}>
                <span>{obra.id.padStart(2, '0')}</span>
                <span>•</span>
                <span>{obra.tipo}</span>
              </div>
              <h3 className={styles.titulo}>{obra.titulo}</h3>
              <p className={styles.descricaoCurta}>{obra.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Tela Cheia Discreta */}
      {obraSelecionada && (
        <div 
          className={styles.lightboxOverlay} 
          onClick={() => setObraSelecionada(null)}
        >
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
          >
            <button 
              className={styles.lightboxClose}
              onClick={() => setObraSelecionada(null)}
              aria-label="Fechar"
            >
              &times;
            </button>
            
            <img 
              src={obraSelecionada.imagemUrl} 
              alt={obraSelecionada.titulo}
              className={styles.lightboxImage} 
            />
            
            <div className={styles.lightboxInfo}>
              <h2 className={styles.lightboxTitle}>{obraSelecionada.titulo}</h2>
              <div className={styles.lightboxDetails}>
                <p><strong>Tipo:</strong> {obraSelecionada.tipo}</p>
                <p className="mt-2">{obraSelecionada.descricao}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}