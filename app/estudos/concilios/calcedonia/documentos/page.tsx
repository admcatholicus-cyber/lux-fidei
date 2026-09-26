// estudos/concilios/calcedonia/documentos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { dossieHub } from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Dossiê Documental | Calcedônia | Lux Fidei',
  description:
    'Textos integrais, atas, cânones e análise do Concílio de Calcedônia (451). Definição, Tomo de Leão, 28 cânones e atas das 16 sessões.',
};

export default function DocumentosPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        {dossieHub.titulo}
      </h1>

      <p className={styles.secaoTexto}>{dossieHub.subtitulo}</p>
      <p className={styles.secaoTexto}>{dossieHub.introducao}</p>

      {/* AVISO METODOLÓGICO */}
      <div
        className={styles.destaque}
        style={{
          textAlign: 'left',
          fontStyle: 'normal',
          whiteSpace: 'pre-line',
        }}
      >
        <strong>{dossieHub.avisoMetodologico.titulo}:</strong>
        <br />
        {dossieHub.avisoMetodologico.corpo}
      </div>

      {/* CARDS DOS DOCUMENTOS */}
      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Documentos do concílio
      </h2>
      <div className={styles.heresiasGrid}>
        {dossieHub.documentos.map((doc) => (
          <Link
            key={doc.slug}
            href={`/estudos/concilios/calcedonia/documentos/${doc.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                {doc.icone} {doc.titulo}
              </div>
              <div className={styles.heresiaErro}>{doc.descricao}</div>
              <div
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.82rem',
                  color: 'var(--calc-text-faint)',
                  fontStyle: 'italic',
                }}
              >
                {doc.meta}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEÇÕES ADICIONAIS */}
      <h2 style={{ fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
        Mais seções do dossiê
      </h2>
      <div className={styles.heresiasGrid}>
        {dossieHub.secoesAdicionais.map((sec) => (
          <Link
            key={sec.slug}
            href={`/estudos/concilios/calcedonia/${sec.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                {sec.icone} {sec.titulo}
              </div>
              <div className={styles.heresiaErro}>{sec.descricao}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* NAVEGAÇÃO INFERIOR */}
      <div className={styles.navLinks} style={{ marginTop: '2.5rem' }}>
        <Link
          href="/estudos/concilios/calcedonia"
          className={styles.navLink}
        >
          ← Voltar à página principal
        </Link>
      </div>
    </section>
  );
}
