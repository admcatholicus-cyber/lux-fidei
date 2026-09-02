// app/estudos/sacramentos/crisma/components/CrismaHero.tsx
'use client'

import styles from '../crisma.module.css'

interface Props {
  onScrollTo: (href: string) => void
}

export default function CrismaHero({ onScrollTo }: Props) {
  return (
    <header className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <img
          src="/estudos/sacramentos/crisma/painel-hero.png"
          alt="Crisma — O Sacramento do Espírito Santo"
          className={styles.heroImage}
        />
        <h1>CRISMA</h1>
        <p className={styles.heroSubtitle}>
          O Sacramento do Espírito Santo • A Confirmação da Fé
        </p>
        <div className={styles.heroVerse}>
          <p>
            &ldquo;Recebereis a força do Espírito Santo, que virá sobre vós, e sereis minhas
            testemunhas em Jerusalém, em toda a Judeia e Samaria, e até os confins da terra.&rdquo;
          </p>
          <cite>— Atos dos Apóstolos 1,8</cite>
        </div>
        <div className={styles.heroBtns}>
          <a
            href="#o-que-e"
            className={`${styles.btn} ${styles.btnGold}`}
            onClick={e => { e.preventDefault(); onScrollTo('#o-que-e') }}
          >
            Conhecer o Sacramento
          </a>
          <a
            href="#dons"
            className={`${styles.btn} ${styles.btnOutline}`}
            onClick={e => { e.preventDefault(); onScrollTo('#dons') }}
          >
            Os 7 Dons
          </a>
        </div>
      </div>

      <div className={styles.heroFlames}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.flame} />
        ))}
      </div>
    </header>
  )
}