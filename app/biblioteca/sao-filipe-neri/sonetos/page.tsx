import type { Metadata } from "next";
import Link from "next/link";
import { sonetos, sonetosRejeitados } from "../data/sonetos";
import EtiquetaStatus from "../components/EtiquetaStatus";
import styles from "../biblioteca-filipe.module.css";

export const metadata: Metadata = {
  title: "Sonetos e Poesias de São Filipe Néri | Lux Fidei",
  description: "Poesia espiritual atribuída a São Filipe Néri e análise filológica de Benedetto Croce.",
};

export default function PaginaSonetos() {
  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Sonetos</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>🎵</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Sonetos e Poesia Espiritual</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          A tradição atribuiu vários poemas a São Filipe Néri. O estudo filológico
          de Benedetto Croce (1942) estabeleceu a autenticidade provável do primeiro soneto
          e identificou a autoria distinta dos demais.
        </p>
      </header>

      <main style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Libre Baskerville, serif", fontSize: "20px", marginBottom: "20px" }}>
          Sonetos do Corpus
        </h2>

        <div className={styles.gridCartas} style={{ marginBottom: "50px" }}>
          {(sonetos as any[]).map((s) => (
            <Link key={s.id} href={`/biblioteca/sao-filipe-neri/sonetos/${s.id}`} className={styles.cardCarta}>
              <div className={styles.cardCartaTop}>
                <span className={styles.cardCartaNumero}>Soneto {s.numero}</span>
                <EtiquetaStatus status={s.autenticidade === "provável" ? "provavel" : "catalogo"} />
              </div>
              <h3 className={styles.cardCartaDestinatario}>{s.titulo}</h3>
              <p className={styles.cardCartaContexto}>{s.justificativaAutenticidade}</p>
              <div className={styles.cardCartaRodape}>
                <span>{s.portugues.versos ? "📖 Ler soneto e tradução" : "📋 Ver ficha"}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {sonetosRejeitados && sonetosRejeitados.length > 0 && (
          <>
            <h2 style={{ fontFamily: "Libre Baskerville, serif", fontSize: "20px", marginBottom: "10px", color: "#8a3a3a" }}>
              Atribuições Rejeitadas (Filippo del Nero)
            </h2>
            <p style={{ fontSize: "13px", color: "var(--bio-texto-leve)", marginBottom: "20px" }}>
              Poemas historicamente atribuídos a São Filipe Néri em coletâneas devocionais antigas,
              mas que o estudo crítico de Benedetto Croce (1942) demonstrou pertencer ao poeta leigo <em>Filippo del Nero</em>.
            </p>

            <div className={styles.gridCartas}>
              {(sonetosRejeitados as any[]).map((s) => (
                <Link key={s.id} href={`/biblioteca/sao-filipe-neri/sonetos/${s.id}`} className={styles.cardCarta}>
                  <div className={styles.cardCartaTop}>
                    <span className={styles.cardCartaNumero}>Soneto</span>
                    <EtiquetaStatus status="rejeitado" />
                  </div>
                  <h3 className={styles.cardCartaDestinatario}>{s.titulo}</h3>
                  <p className={styles.cardCartaContexto}>{s.justificativaAutenticidade}</p>
                  <div className={styles.cardCartaRodape}>
                    <span>📖 Ver texto e nota crítica</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}