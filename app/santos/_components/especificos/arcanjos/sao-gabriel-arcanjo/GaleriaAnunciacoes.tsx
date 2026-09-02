'use client';

import { useState } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/galeria-anunciacoes.module.css';

type Obra = {
  id: string;
  arquivo: string;
  autor: string;
  titulo: string;
  ano: string;
  escola: string;
  local: string;
  nota: string;
  categoria: 'medieval' | 'gotico' | 'renascentista' | 'barroco' | 'moderno' | 'oriental';
};

const BASE = '/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/galeria';

const OBRAS: Obra[] = [
  { id: 'priscila', arquivo: '01-catacumba-priscila.webp', autor: 'Anônimo', titulo: 'Suposta Anunciação', ano: 'séc. III', escola: 'Paleocristã', local: 'Catacumba de Priscila, Roma', nota: 'Identificação disputada. A cena mais antiga possivelmente relacionada à Anunciação.', categoria: 'medieval' },
  { id: 'maggiore', arquivo: '02-santa-maria-maggiore.webp', autor: 'Anônimo', titulo: 'Anunciação do arco triunfal', ano: '432–440', escola: 'Paleocristã romana', local: 'Basílica de Santa Maria Maggiore', nota: 'Primeira Anunciação segura. Gabriel em vestes imperiais, sem lírio.', categoria: 'medieval' },
  { id: 'ustyug', arquivo: '03-ustyug-anunciacao.webp', autor: 'Anônimo', titulo: 'Anunciação de Ustyug', ano: 'séc. XII', escola: 'Bizantina russa', local: 'Galeria Tretyakov, Moscou', nota: 'Ícone-modelo da tradição oriental. Cristo já visível no ventre de Maria.', categoria: 'oriental' },
  { id: 'ohrid', arquivo: '04-ohrid-anunciacao.webp', autor: 'Anônimo', titulo: 'Anunciação de Ohrid', ano: 'séc. XIV', escola: 'Bizantina macedônia', local: 'Igreja de São Clemente, Ohrid', nota: 'Fusão entre modelo bizantino clássico e delicadeza paleóloga.', categoria: 'oriental' },
  { id: 'reims', arquivo: '05-reims-ange-sourire.webp', autor: 'Escola de Reims', titulo: 'Anjo Sorridente', ano: '1245–1255', escola: 'Gótico francês', local: 'Catedral de Reims', nota: 'Escultura de pedra. O sorriso mais célebre da arte medieval.', categoria: 'gotico' },
  { id: 'martini', arquivo: '06-simone-martini.webp', autor: 'Simone Martini', titulo: 'Anunciação com São Ansano', ano: '1333', escola: 'Gótico internacional', local: 'Uffizi, Florença', nota: 'Ramo de oliveira, filactério dourado em relevo, asas multicolores.', categoria: 'gotico' },
  { id: 'broederlam', arquivo: '07-broederlam.webp', autor: 'Melchior Broederlam', titulo: 'Anunciação', ano: '1394–1399', escola: 'Flamenga', local: 'Musée des Beaux-Arts, Dijon', nota: 'Arquitetura complexa, ainda com fundo dourado gótico.', categoria: 'gotico' },
  { id: 'vaneyck', arquivo: '08-van-eyck.webp', autor: 'Jan van Eyck', titulo: 'Anunciação', ano: 'ca. 1434–1436', escola: 'Primitivos flamengos', local: 'National Gallery, Washington', nota: 'Precisão óptica flamenga aplicada ao interior de uma igreja gótica.', categoria: 'renascentista' },
  { id: 'angelico', arquivo: '09-fra-angelico.webp', autor: 'Carlo Crivelli', titulo: 'Anunciação com Santo Emídio', ano: '1486', escola: 'Renascimento veneziano', local: 'National Gallery, Londres', nota: 'Arquitetura veneziana detalhíssima, pomba em raio de luz, simbolismo oculto em cada fresta.', categoria: 'renascentista' },
  { id: 'leonardo', arquivo: '10-leonardo.webp', autor: 'Leonardo da Vinci', titulo: 'Anunciação', ano: 'ca. 1472–1475', escola: 'Renascimento florentino', local: 'Uffizi, Florença', nota: 'Asas anatomicamente estudadas. Primeira paisagem natural na Anunciação.', categoria: 'renascentista' },
  { id: 'botticelli', arquivo: '11-botticelli-cestello.webp', autor: 'Sandro Botticelli', titulo: 'Anunciação de Cestello', ano: '1489–1490', escola: 'Renascimento florentino', local: 'Uffizi, Florença', nota: 'Dinamismo dramático. Gabriel ainda em movimento; Maria recua com o corpo todo.', categoria: 'renascentista' },
  { id: 'grunewald', arquivo: '12-grunewald.webp', autor: 'Matthias Grünewald', titulo: 'Anunciação (Retábulo de Isenheim)', ano: '1512–1516', escola: 'Renascimento alemão', local: 'Musée Unterlinden, Colmar', nota: 'Intensidade expressionista antes do expressionismo. Cores violentas.', categoria: 'renascentista' },
  { id: 'elgreco', arquivo: '13-el-greco.webp', autor: 'Lorenzo Lotto',titulo: 'Anunciação', ano: '1534', escola: 'Maneirismo veneziano', local: 'Museo Civico Villa Colloredo Mels, Recanati', nota: 'O gato em fuga apavorado aos pés de Maria é detalhe único em toda a iconografia da Anunciação.', categoria: 'renascentista'},
  { id: 'murillo', arquivo: '14-murillo.webp', autor: 'Guido Reni', titulo: 'Anunciação', ano: 'ca. 1629–1630', escola: 'Barroco espanhol', local: 'Museo del Prado, Madrid', nota: 'Doçura tridentina. Gabriel em nuvem, querubins ao redor.', categoria: 'barroco' },
  { id: 'tanner', arquivo: '15-tanner.webp', autor: 'Henry Ossawa Tanner', titulo: 'Anunciação', ano: '1898', escola: 'Realismo moderno', local: 'Philadelphia Museum of Art', nota: 'Gabriel como coluna de luz. Maria como jovem palestina real, sem idealização.', categoria: 'moderno' },
];

const CATEGORIAS = [
  { id: 'todas', label: 'Todas' },
  { id: 'medieval', label: 'Paleocristã' },
  { id: 'oriental', label: 'Oriental' },
  { id: 'gotico', label: 'Gótico' },
  { id: 'renascentista', label: 'Renascimento' },
  { id: 'barroco', label: 'Barroco' },
  { id: 'moderno', label: 'Moderno' },
] as const;

export default function GaleriaAnunciacoes() {
  const [filtro, setFiltro] = useState<string>('todas');
  const [selecionada, setSelecionada] = useState<Obra | null>(null);

  const obrasFiltradas =
    filtro === 'todas' ? OBRAS : OBRAS.filter((o) => o.categoria === filtro);

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <span className={styles.label}>Muro do Museu</span>
        <h3 className={styles.titulo}>Quinze Anunciações, Dezoito Séculos</h3>
        <p className={styles.sub}>
          Uma antologia visual da Anunciação — do séc. III ao XIX, das catacumbas romanas
          aos ícones russos, dos frescos florentinos ao realismo moderno
        </p>
      </header>

      <div className={styles.filtros}>
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            onClick={() => setFiltro(c.id)}
            className={`${styles.filtroBtn} ${filtro === c.id ? styles.filtroAtivo : ''}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className={styles.muro}>
        {obrasFiltradas.map((o) => (
          <button
            key={o.id}
            onClick={() => setSelecionada(o)}
            className={styles.quadro}
          >
            <div className={styles.moldura}>
              <div className={styles.imgWrap}>
                <img src={`${BASE}/${o.arquivo}`} alt={`${o.titulo} de ${o.autor}`} loading="lazy" />
              </div>
            </div>
            <div className={styles.placa}>
              <p className={styles.placaAutor}>{o.autor}</p>
              <p className={styles.placaTitulo}>{o.titulo}</p>
              <p className={styles.placaAno}>{o.ano}</p>
            </div>
          </button>
        ))}
      </div>

      {selecionada && (
        <div className={styles.overlay} onClick={() => setSelecionada(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.fechar} onClick={() => setSelecionada(null)}>
              ×
            </button>
            <div className={styles.modalImg}>
              <img
                src={`${BASE}/${selecionada.arquivo}`}
                alt={`${selecionada.titulo} de ${selecionada.autor}`}
              />
            </div>
            <div className={styles.modalInfo}>
              <span className={styles.modalEscola}>{selecionada.escola}</span>
              <h4 className={styles.modalTitulo}>{selecionada.titulo}</h4>
              <p className={styles.modalAutor}>
                {selecionada.autor} · <em>{selecionada.ano}</em>
              </p>
              <p className={styles.modalLocal}>{selecionada.local}</p>
              <p className={styles.modalNota}>{selecionada.nota}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}