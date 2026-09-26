import React from 'react';
import Image from 'next/image';
import styles from '../../../../_styles/especificos/leigos/sao-domingos-savio/hero.module.css';

export default function HeroDomingosSavio() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        
        {/* Moldura da Pintura (Sem cortes, estilo galeria sacra) */}
        <div className={styles.imageSection}>
          <div className={styles.frameOuter}>
            <div className={styles.frameInner}>
              <Image
                src="/santos/biografia/leigos/sao-domingos-savio/1.webp"
                alt="São Domingos Sávio com São João Bosco"
                width={480}
                height={360}
                priority
                className={styles.fullImage}
              />
            </div>
          </div>
        </div>

        {/* Bloco de Citação Editorial */}
        <div className={styles.quoteSection}>
          <div className={styles.quoteBox}>
            <span className={styles.quoteMark}>“</span>
            
            <blockquote className={styles.quoteText}>
              Não posso fazer grandes coisas, mas quero fazer tudo, até as mais simples e ordinárias, para a <span className={styles.goldHighlight}>maior glória de Deus</span>.
            </blockquote>

            <p className={styles.quoteOriginal}>
              «Non posso far grandi cose, ma voglio far tutto, anche le minime cose, per la maggior gloria di Dio.»
            </p>

            <div className={styles.authorBadge}>
              <span className={styles.crossSymbol}>✝</span>
              <div className={styles.goldLine} />
              <span className={styles.authorName}>São Domingos Sávio</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}