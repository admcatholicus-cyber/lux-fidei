import Link from 'next/link';
import LiturgicalCalendar from './_components/LiturgicalCalendar';
import styles from './page.module.css';

// ============================================================
// 🔍 METADATA
// ============================================================
export const metadata = {
  title: 'Calendário Litúrgico',
  description: 'Calendário litúrgico interativo do ano cristão',
};

export default function CalendarioPage() {
  return (
    <main className={styles.wrapper}>

      {/* ============ BOTÃO VOLTAR ============ */}
      <Link href="/estudos" className={styles.botaoVoltar}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Voltar
      </Link>

      <div className={styles.container}>

        {/* ============ CABEÇALHO ============ */}
        <header className={styles.header}>
          <p className={styles.headerPretitulo}>
            ✦ &nbsp; In Nomine Domini &nbsp; ✦
          </p>

          <h1 className={styles.headerTitulo}>
            Calendário Litúrgico
          </h1>

          <div className={styles.headerOrnamento}>
            <div />
            <span>✦</span>
            <div />
          </div>

          <p className={styles.headerSubtitulo}>
            Annus Gratiæ · O Ano da Graça
          </p>
        </header>

        {/* ============ RODA LITÚRGICA ============ */}
        <div className={styles.rodaContainer}>
          <LiturgicalCalendar />
        </div>

      </div>
    </main>
  );
}