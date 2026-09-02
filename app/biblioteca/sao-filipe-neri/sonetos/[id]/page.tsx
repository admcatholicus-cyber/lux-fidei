import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sonetos, sonetosRejeitados } from "../../data/sonetos";
import EtiquetaStatus from "../../components/EtiquetaStatus";
import styles from "../../biblioteca-filipe.module.css";
import RegistradorHistorico from "../../components/RegistradorHistorico";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const todos = [...(sonetos as any[]), ...(sonetosRejeitados as any[])];
  const s = todos.find((item) => item.id === id);
  if (!s) return { title: "Soneto não encontrado | Lux Fidei" };
  return { title: `${s.titulo} | Poesia de São Filipe Néri` };
}

export default async function PaginaLeitorSoneto({ params }: Props) {
  const { id } = await params;
  const todos = [...(sonetos as any[]), ...(sonetosRejeitados as any[])];
  const s = todos.find((item) => item.id === id);

  if (!s) notFound();

  return (
    <div className={styles.pagina}>
        <RegistradorHistorico
  tituloAtual={`Soneto: ${s.titulo}`}
  urlAtual={`/biblioteca/sao-filipe-neri/sonetos/${s.id}`}
/>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri/sonetos" className={styles.linkVoltar}>
          ← Voltar à lista de sonetos
        </Link>
        <span className={styles.migalhas}>Sonetos / {s.titulo}</span>
      </nav>

      <article className={styles.leitorContainer} style={{ maxWidth: "920px" }}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>Soneto nº {s.numero}</p>
          <h1 className={styles.leitorTitulo}>“{s.titulo}”</h1>
          <p className={styles.leitorSubtitulo}>Tema: {s.tema}</p>
          <EtiquetaStatus status={s.autenticidade === "provável" ? "provavel" : s.autenticidade === "rejeitado" ? "rejeitado" : "catalogo"} />

          <div className={styles.leitorContexto}>
            <strong>Análise de autenticidade:</strong> {s.justificativaAutenticidade}
          </div>
        </header>

        {s.portugues.versos && s.original.versos ? (
          <div className={styles.poesiaGrid}>
            <div className={styles.poesiaColuna}>
              <h3 className={styles.caixaOriginalTitulo}>Original em Italiano</h3>
              <div className={styles.poesiaVersos}>
                {s.original.versos.join("\n")}
              </div>
            </div>

            <div className={styles.poesiaColuna}>
              <h3 className={styles.caixaOriginalTitulo}>Tradução em Português</h3>
              <div className={styles.poesiaVersos}>
                {s.portugues.versos.join("\n")}
              </div>
            </div>
          </div>
        ) : (
          <p style={{ fontStyle: "italic", textAlign: "center", color: "var(--bio-texto-leve)" }}>
            O texto deste soneto não foi disponibilizado em domínio público.
          </p>
        )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico & estudo filológico</h4>
          <ul>
            <li><strong>Fonte:</strong> {s.fonte}</li>
          </ul>
          {s.notasCriticas && (
            <ul>
              {s.notasCriticas.map((n: string, i: number) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          )}
        </section>
      </article>
    </div>
  );
}