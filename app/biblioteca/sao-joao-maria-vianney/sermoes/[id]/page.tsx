import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarSermaoPorId, sermaoAnterior, sermaoProximo } from "../../lib/sermoes-helpers";
import RegistradorHistoricoVianney from "../../components/RegistradorHistoricoVianney";
import styles from "../../biblioteca-vianney.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const sermao = buscarSermaoPorId(id);
  if (!sermao) return { title: "Sermão não encontrado | Lux Fidei" };
  return {
    title: `${sermao.tituloPortugues} | São João Maria Vianney`,
    description: sermao.tituloOriginal,
  };
}

export default async function PaginaLeitorSermao({ params }: Props) {
  const { id } = await params;
  const sermao = buscarSermaoPorId(id);

  if (!sermao) notFound();

  const anterior = sermaoAnterior(id);
  const proximo = sermaoProximo(id);

  // Tratamento de parágrafos
  const paragrafos = sermao.portugues.texto
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <RegistradorHistoricoVianney
        tituloAtual={sermao.tituloPortugues}
        urlAtual={`/biblioteca/sao-joao-maria-vianney/sermoes/${sermao.id}`}
      />

      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney/sermoes" className={styles.linkVoltar}>
          ← Voltar à lista de sermões
        </Link>
        <span className={styles.migalhas}>Sermões / {sermao.tituloPortugues}</span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>Sermão Doutrinal · Tomo {sermao.volume}</p>
          <h1 className={styles.leitorTitulo}>{sermao.tituloPortugues}</h1>
          <p className={styles.leitorSubtitulo}>Original: {sermao.tituloOriginal}</p>
          <p className={styles.leitorMeta}>Tema: {sermao.temaDoutrinal} · Fonte: Edição de 1883 ({sermao.paginasFonte})</p>
        </header>

        <div className={styles.leitorCorpo}>
          {paragrafos.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {sermao.original.texto && (
          <section className={styles.caixaOriginal}>
            <h3 className={styles.caixaOriginalTitulo}>Texto Original em Francês (Édition 1883)</h3>
            <p className={styles.caixaOriginalTexto}>{sermao.original.texto.substring(0, 1000)}...</p>
          </section>
        )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico & fontes</h4>
          <ul>
            <li><strong>Edição de referência:</strong> {sermao.fonte}</li>
            {sermao.latim && <li><strong>Epígrafe latina:</strong> “{sermao.latim}”</li>}
          </ul>
        </section>

        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: 40, paddingTop: 20, borderTop: "1px solid #e4dcd0" }}>
          {anterior ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/sermoes/${anterior.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              ← {anterior.tituloPortugues}
            </Link>
          ) : <div />}

          {proximo ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/sermoes/${proximo.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              {proximo.tituloPortugues} →
            </Link>
          ) : <div />}
        </nav>
      </article>
    </div>
  );
}