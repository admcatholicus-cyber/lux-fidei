'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../_components/layout/Footer';
import styles from './liturgia.module.css';
import '../home.css';

export interface LiturgiaData {
  liturgia: string;
  data: string;
  cor: string;
  primeiraLeitura?: any;
  salmo?: any;
  segundaLeitura?: any;
  evangelho?: any;
}

/* ============================================================
   UTIL: FAXINA PESADA DE API (Remove lixo de WordPress e áudio)
============================================================ */
function limparSujeiraAPI(texto: string): string {
  if (!texto) return '';
  let t = texto;

  // 1. Remove qualquer coisa entre colchetes [ ... ]
  // Isso mata o [ cn-embed ...] ou [audio ...] independente de espaços ou atributos
  t = t.replace(/\[[\s\S]*?\]/g, '');

  // 2. Remove nomes de arquivos gerados por sistema (ex: 2026_09_09_portal_liturgia_audio...)
  // Procura por 4 dígitos, _, 2 dígitos, _, 2 dígitos e remove até o próximo espaço
  t = t.replace(/\d{4}_\d{2}_\d{2}[^\s]*/g, '');

  // 3. Remove shortcodes residuais soltos (caso venham sem colchetes por erro da API)
  t = t.replace(/cn-embed/gi, '');
  t = t.replace(/\/cn-embed/gi, '');

  // 4. Limpa espaços duplos e quebras de linha estranhas que sobraram da faxina
  t = t.replace(/\s+/g, ' ').trim();

  return t;
}

/* ============================================================
   UTIL: EXTRAI A STRING E JÁ APLICA A FAXINA
============================================================ */
function extrairTexto(input: any): string {
  if (!input) return '';
  let res = '';
  
  if (typeof input === 'string') {
    res = input;
  } else if (Array.isArray(input)) {
    res = input.map(extrairTexto).filter(Boolean).join(' ');
  } else if (typeof input === 'object') {
    const direto = input.texto || input.text || input.content || input.body || input.conteudo;
    if (typeof direto === 'string') {
      res = direto;
    } else if (direto) {
      res = extrairTexto(direto);
    } else {
      res = Object.values(input).filter((v) => typeof v === 'string').join(' ');
    }
  } else {
    res = String(input);
  }
  
  // A mágica acontece aqui: limpa toda a sujeira técnica antes de interpretar o texto litúrgico
  return limparSujeiraAPI(res);
}

function extrairReferencia(input: any): string {
  if (!input) return '';
  if (typeof input === 'string') return '';
  return (
    input.referencia ||
    input.reference ||
    input.title ||
    input.titulo ||
    ''
  );
}

function extrairRefrao(input: any): string {
  if (!input || typeof input !== 'object') return '';
  return input.refrao || input.refrain || input.antifona || '';
}

function extrairRefDoTexto(textoBruto: string, tipo: 'leitura' | 'evangelho' | 'salmo'): string {
  if (!textoBruto) return '';
  const t = textoBruto.replace(/\s+/g, ' ').trim();

  if (tipo === 'evangelho') {
    const m = t.match(/Evangelho\s*\(\s*([^)]+?)\s*\)/i);
    return m ? m[1].trim().replace(/\s+/g, ' ') : '';
  }

  if (tipo === 'salmo') {
    const m = t.match(/Responsório\s+(Sl\s*\d+(?:\(\d+\))?[,.\d\-a-c\s]*?)\s*\(R\./i);
    return m ? m[1].trim().replace(/\s+/g, ' ').replace(/[,\s]+$/, '') : '';
  }

  const m = t.match(/(?:Primeira|Segunda|Terceira)\s+Leitura\s*\(\s*([^)]+?)\s*\)/i);
  return m ? m[1].trim().replace(/\s+/g, ' ') : '';
}

function extrairRefraoDoTexto(textoBruto: string): string {
  if (!textoBruto) return '';
  const m = textoBruto.match(/\(R\.\s*[^)]+\)\s*[-—]\s*([^-—]+?[.!])\s*[-—]/i);
  if (m) return m[1].trim();
  const m2 = textoBruto.match(/^Responsório\s+[^-—]+[-—]\s*([^-—]+?[.!])\s*[-—]/i);
  if (m2) return m2[1].trim();
  return '';
}

/* ============================================================
   DICIONÁRIO DE LIVROS BÍBLICOS
============================================================ */
const livrosBiblicos: Record<string, string> = {
  'Gn': 'Gênesis', 'Ex': 'Êxodo', 'Lv': 'Levítico', 'Nm': 'Números', 'Dt': 'Deuteronômio',
  'Js': 'Josué', 'Jz': 'Juízes', 'Rt': 'Rute',
  '1Sm': '1º Samuel', '2Sm': '2º Samuel', '1Rs': '1º Reis', '2Rs': '2º Reis',
  '1Cr': '1º Crônicas', '2Cr': '2º Crônicas',
  'Esd': 'Esdras', 'Ne': 'Neemias', 'Tb': 'Tobias', 'Jt': 'Judite', 'Est': 'Ester',
  '1Mc': '1º Macabeus', '2Mc': '2º Macabeus',
  'Jó': 'Jó', 'Job': 'Jó', 'Sl': 'Salmo', 'Pr': 'Provérbios', 'Ecl': 'Eclesiastes', 'Qo': 'Eclesiastes',
  'Ct': 'Cântico dos Cânticos', 'Cant': 'Cântico dos Cânticos',
  'Sb': 'Sabedoria', 'Eclo': 'Eclesiástico', 'Sir': 'Eclesiástico',
  'Is': 'Isaías', 'Jr': 'Jeremias', 'Lm': 'Lamentações', 'Br': 'Baruc',
  'Ez': 'Ezequiel', 'Dn': 'Daniel',
  'Os': 'Oseias', 'Jl': 'Joel', 'Am': 'Amós', 'Ab': 'Abdias', 'Jn': 'Jonas',
  'Mq': 'Miqueias', 'Na': 'Naum', 'Hab': 'Habacuc', 'Sf': 'Sofonias',
  'Ag': 'Ageu', 'Zc': 'Zacarias', 'Ml': 'Malaquias',
  'Mt': 'Mateus', 'Mc': 'Marcos', 'Lc': 'Lucas', 'Jo': 'João', 'At': 'Atos dos Apóstolos',
  'Rm': 'Romanos',
  '1Cor': '1ª aos Coríntios', '2Cor': '2ª aos Coríntios',
  '1Co': '1ª aos Coríntios', '2Co': '2ª aos Coríntios',
  'Gl': 'Gálatas', 'Ef': 'Efésios', 'Fl': 'Filipenses', 'Cl': 'Colossenses',
  '1Ts': '1ª aos Tessalonicenses', '2Ts': '2ª aos Tessalonicenses',
  '1Tm': '1ª a Timóteo', '2Tm': '2ª a Timóteo',
  'Tt': 'Tito', 'Fm': 'Filêmon', 'Hb': 'Hebreus', 'Tg': 'Tiago',
  '1Pd': '1ª de Pedro', '2Pd': '2ª de Pedro',
  '1Pe': '1ª de Pedro', '2Pe': '2ª de Pedro',
  '1Jo': '1ª de João', '2Jo': '2ª de João', '3Jo': '3ª de João',
  'Jd': 'Judas', 'Ap': 'Apocalipse',
};

function formatarRefBonita(ref: string): string {
  if (!ref) return '';
  const r = ref.trim().replace(/\s+/g, ' ');
  const m = r.match(/^(\d?\s*[A-Za-zÁÉÍÓÚÊÔÃÕÇÀ]+)\s+(\d+(?:\(\d+\))?)(?:[,.]([\d\-.a-c,\s]+))?/);
  if (!m) return r;

  const sigla = m[1].replace(/\s+/g, '');
  const cap = m[2];
  const vers = m[3]?.trim();

  const nomeLivro = livrosBiblicos[sigla] || sigla;

  if (sigla === 'Sl') {
    return `Salmo ${cap}${vers ? `, ${vers}` : ''}`;
  }

  return `${nomeLivro}, capítulo ${cap}${vers ? `, versículos ${vers}` : ''}`;
}

/* ============================================================
   LIMPA LEITURA
============================================================ */
function limparLeitura(texto: string): {
  introducao: string;
  corpo: string;
  fechamento: string;
} {
  if (!texto) return { introducao: '', corpo: '', fechamento: '' };
  
  // Agora a string chega limpa. Ex: "Primeira Leitura ( 1Cor 7,25-31) Leitura da..."
  let t = texto.replace(/\s+/g, ' ').trim();
  
  // Remove título redundante (Primeira Leitura (Referência))
  t = t.replace(/^(?:Primeira|Segunda|Terceira)\s+Leitura\s*\([^)]*\)\s*[-—]?\s*/i, '');

  let introducao = '';
  const regexIntro = /^(Leitura\s+(?:do|da|dos|das)\s+[^.]+?\.)\s*/i;
  const m = t.match(regexIntro);
  if (m) {
    introducao = m[1].trim();
    t = t.slice(m[0].length).trim();
  }

  let fechamento = '';
  const regexFech = /(?:[-—]\s*)?(Palavra do Senhor\.?\s*[-—]?\s*Graças a Deus\.?)/i;
  const mf = t.match(regexFech);
  if (mf) {
    fechamento = mf[1].replace(/\s+/g, ' ').trim();
    t = t.slice(0, mf.index).trim();
  }

  t = t.replace(/[-—]\s*$/, '').trim();
  return { introducao, corpo: t, fechamento };
}

/* ============================================================
   LIMPA EVANGELHO
============================================================ */
function limparEvangelho(texto: string): {
  introducao: string;
  corpo: string;
  fechamento: string;
} {
  if (!texto) return { introducao: '', corpo: '', fechamento: '' };
  let t = texto.replace(/\s+/g, ' ').trim();
  
  // Remove título redundante do evangelho
  t = t.replace(/^Evangelho\s*\([^)]*\)\s*[-—]?\s*/i, '');
  
  // Remove aleluias iniciais antes da proclamação
  t = t.replace(/^(?:Aleluia[,.\s]*)+[-—]?\s*[^.]*\.\s*(?:Convertei[^.]*\.\s*)?(?:Crede[^.!]*[.!]\s*)?/i, '');

  let introducao = '';
  const regexIntro = /^(Proclamação\s+do\s+Evangelho\s+de\s+Jesus\s+Cristo\s+segundo\s+[^.]+\.)/i;
  const m = t.match(regexIntro);
  if (m) {
    introducao = m[1].trim();
    t = t.slice(m[0].length).trim();
  }

  t = t.replace(/^[-—]?\s*Glória\s+a\s+vós,?\s*Senhor\.?\s*/i, '');

  let fechamento = '';
  const regexFech = /(?:[-—]\s*)?(Palavra da Salvação\.?\s*[-—]?\s*Glória a vós,?\s*Senhor\.?)/i;
  const mf = t.match(regexFech);
  if (mf) {
    fechamento = mf[1].replace(/\s+/g, ' ').trim();
    t = t.slice(0, mf.index).trim();
  }

  t = t.replace(/[-—]\s*$/, '').trim();
  return { introducao, corpo: t, fechamento };
}

/* ============================================================
   LIMPA SALMO
============================================================ */
function limparSalmo(texto: string): { corpo: string } {
  if (!texto) return { corpo: '' };
  let t = texto.replace(/\s+/g, ' ').trim();
  t = t.replace(/^Responsório\s+Sl[\s\d().,\-a-c]*?\(R\.\s*[^)]*\)\s*[-—]?\s*/i, '');
  t = t.replace(/^Responsório\s+Sl[\s\d().,\-a-c]+\s*[-—]?\s*/i, '');
  t = t.replace(/^[^-—]+?[.!]\s*[-—]\s*/, '');
  return { corpo: t };
}

/* ============================================================
   VERSÍCULOS
============================================================ */
function aplicarVersiculos(texto: string): string {
  if (!texto) return '';
  let t = texto;
  t = t.replace(/\s-\s/g, ' — ');

  t = t.replace(
    /(^|[\s—.,;:!?"'(])(\d+,\d+)(?=[\s,])/g,
    (_m, antes, num) => `${antes}<sup class="vers-grande">${num}</sup>`
  );

  t = t.replace(
    /(^|[\s—.,;:!?"'(])(\d{1,3}[a-c])(?=[\s,.!?])/g,
    (_m, antes, num) => `${antes}<sup>${num}</sup>`
  );

  t = t.replace(
    /(^|[\s—.,;:!?"'(])(\d{1,3})(?=[\s,])/g,
    (_m, antes, num) => `${antes}<sup>${num}</sup>`
  );

  t = t.replace(/<sup[^>]*><sup/g, '<sup');
  t = t.replace(/<\/sup><\/sup>/g, '</sup>');

  return t;
}

/* ============================================================
   COR LITÚRGICA
============================================================ */
function normalizarCor(cor?: string): string {
  if (!cor) return 'verde';
  const c = cor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  if (c.includes('verde')) return 'verde';
  if (c.includes('roxo') || c.includes('violeta') || c.includes('violet')) return 'roxo';
  if (c.includes('rosa') || c.includes('rose')) return 'rosa';
  if (c.includes('vermelh') || c.includes('red')) return 'vermelho';
  if (c.includes('branc') || c.includes('white')) return 'branco';
  if (c.includes('preto') || c.includes('negro') || c.includes('black')) return 'preto';
  if (c.includes('dourad') || c.includes('ouro') || c.includes('gold')) return 'dourado';
  return 'verde';
}

/* ============================================================
   CARDS
============================================================ */
function CardLeitura({
  rotulo, referencia, bruto, tipo,
}: {
  rotulo: string;
  referencia: string;
  bruto: any;
  tipo: 'leitura' | 'evangelho';
}) {
  const textoBruto = extrairTexto(bruto);
  const refCrua = (referencia && referencia.trim()) || extrairRefDoTexto(textoBruto, tipo) || '';
  const refBonita = formatarRefBonita(refCrua);

  const { introducao, corpo, fechamento } =
    tipo === 'evangelho' ? limparEvangelho(textoBruto) : limparLeitura(textoBruto);
  const corpoFormatado = aplicarVersiculos(corpo);

  return (
    <article className={styles['liturgia-card']}>
      <h2>{rotulo}</h2>
      {refCrua && (
        <span className={styles.referencia}>
          {refBonita}
          {refBonita !== refCrua && (
            <small className={styles['ref-sigla']}>{refCrua}</small>
          )}
        </span>
      )}
      {introducao && (
        <div className={styles['leitura-intro']}>
          <span>{introducao}</span>
        </div>
      )}
      <div
        className={styles['texto-liturgico']}
        dangerouslySetInnerHTML={{ __html: corpoFormatado }}
      />
      {fechamento && (
        <div className={styles['leitura-fechamento']}>
          {fechamento.split(/[-—]/).map((parte, i) => (
            <span key={i} className={i === 0 ? styles['fech-celebrante'] : styles['fech-assembleia']}>
              {parte.trim()}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function CardSalmo({ referencia, bruto, refraoApi }: { referencia: string; bruto: any; refraoApi?: string }) {
  const textoBruto = extrairTexto(bruto);
  const refCrua = (referencia && referencia.trim()) || extrairRefDoTexto(textoBruto, 'salmo') || '';
  const refBonita = formatarRefBonita(refCrua);
  const refraoFinal = refraoApi || extrairRefraoDoTexto(textoBruto);
  const { corpo } = limparSalmo(textoBruto);
  const corpoFormatado = aplicarVersiculos(corpo);

  return (
    <article className={`${styles['liturgia-card']} ${styles.salmo}`}>
      <h2>Salmo Responsorial</h2>
      {refCrua && (
        <span className={styles.referencia}>
          {refBonita}
          {refBonita !== refCrua && (
            <small className={styles['ref-sigla']}>{refCrua}</small>
          )}
        </span>
      )}
      {refraoFinal && <p><strong>{refraoFinal}</strong></p>}
      <div
        className={styles['texto-liturgico']}
        dangerouslySetInnerHTML={{ __html: corpoFormatado }}
      />
    </article>
  );
}

/* ============================================================
   CLIENT VIEW
============================================================ */
export default function LiturgiaClient({ initialData }: { initialData: LiturgiaData | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modoLeitura, setModoLeitura] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!initialData) {
    return (
      <div className="pagina-lux">
        <div style={{ textAlign: 'center', padding: '100px', color: '#666' }}>
          ⚠️ Não foi possível carregar a liturgia no momento.
        </div>
      </div>
    );
  }

  const corLiturgica = normalizarCor(initialData.cor);

  return (
    <div className="pagina-lux">
      <div className={`overlay ${isMenuOpen ? 'ativo' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className="sidebar" style={{ left: isMenuOpen ? '0' : '-290px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>&times; &nbsp;Fechar</a>
        <Link href="/">Inicio</Link>
        <Link href="/liturgia_diaria">Liturgia Diaria</Link>
        <Link href="/santos">Santos</Link>
        <Link href="/biblioteca">Biblioteca</Link>
        <Link href="/estudos">Estudos</Link>
        <Link href="/jogos">Jogos</Link>
      </div>

      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>&equiv;</span>
        <p className="header-pretitle">&#10011; &nbsp; In Nomine Domini &nbsp; &#10011;</p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      <nav className="menu">
        <Link href="/" className="menu-item">Inicio</Link>
        <Link href="/liturgia_diaria" className="menu-item active">Liturgia Diaria</Link>
        <Link href="/santos" className="menu-item">Santos</Link>
        <Link href="/biblioteca" className="menu-item">Biblioteca</Link>
        <Link href="/estudos" className="menu-item">Estudos</Link>
        <Link href="/jogos" className="menu-item">Jogos</Link>
        <span className="menu-indicator"></span>
      </nav>

      {!isMobile && (
        <button
          className={`${styles['btn-modo-leitura']} ${modoLeitura ? styles.ativo : ''}`}
          onClick={() => setModoLeitura(!modoLeitura)}
          title={modoLeitura ? 'Sair do modo leitura' : 'Modo leitura'}
          aria-label="Alternar modo leitura"
        >
          {modoLeitura ? '✕' : '📖'}
        </button>
      )}

      <main
        className={`${styles['liturgia-master-container']} ${modoLeitura && !isMobile ? styles['modo-leitura'] : ''}`}
        data-cor={corLiturgica}
      >
        <section className={styles['liturgia-super-header']} data-cor={corLiturgica}>
          <span className={styles['badge-liturgico']}>Tempo Litúrgico</span>
          <h1>
            {initialData.liturgia || 'Liturgia do Dia'}
            {initialData.cor ? ` — ${initialData.cor}` : ''}
          </h1>
          <p>{initialData.data || ''}</p>
        </section>

        <section className={styles['liturgia-layout-grid']}>
          <aside className={styles['liturgia-sidebar']}>
            <div className={styles['santo-do-dia-mini']}>
              <small>Sugestão</small>
              <p><strong>Meditação Diária</strong></p>
              <p>Reserve 10 minutos para o silêncio após a leitura.</p>
            </div>
          </aside>

          <main className={styles['liturgia-principal']}>
            {initialData.primeiraLeitura && (
              <CardLeitura
                rotulo="Primeira Leitura"
                referencia={extrairReferencia(initialData.primeiraLeitura)}
                bruto={initialData.primeiraLeitura}
                tipo="leitura"
              />
            )}

            {initialData.salmo && (
              <CardSalmo
                referencia={extrairReferencia(initialData.salmo)}
                bruto={initialData.salmo}
                refraoApi={extrairRefrao(initialData.salmo)}
              />
            )}

            {initialData.segundaLeitura && (
              <CardLeitura
                rotulo="Segunda Leitura"
                referencia={extrairReferencia(initialData.segundaLeitura)}
                bruto={initialData.segundaLeitura}
                tipo="leitura"
              />
            )}

            {initialData.evangelho && (
              <CardLeitura
                rotulo="Evangelho"
                referencia={extrairReferencia(initialData.evangelho)}
                bruto={initialData.evangelho}
                tipo="evangelho"
              />
            )}
          </main>
        </section>
      </main>

      <Footer />
    </div>
  );
}