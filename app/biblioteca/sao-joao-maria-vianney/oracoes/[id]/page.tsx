import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarOracaoPorId, oracaoAnterior, oracaoProxima } from "../../lib/sermoes-helpers";
import RegistradorHistoricoVianney from "../../components/RegistradorHistoricoVianney";
import styles from "../../biblioteca-vianney.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const oracao = buscarOracaoPorId(id);
  if (!oracao) return { title: "Oração não encontrada | Lux Fidei" };
  return {
    title: `${oracao.tituloPortugues} | São João Maria Vianney`,
    description: oracao.tituloOriginal || oracao.tituloPortugues,
  };
}

export default async function PaginaLeitorOracao({ params }: Props) {
  const { id } = await params;
  const oracao = buscarOracaoPorId(id);

  if (!oracao) notFound();

  const anterior = oracaoAnterior(id);
  const proximo = oracaoProxima(id);

  // Tratamento de parágrafos
  const textoBase = oracao.portugues?.texto || oracao.original?.texto || "";
  const paragrafos = textoBase
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <RegistradorHistoricoVianney
  secao="oracoes"
  tituloAtual={oracao.tituloPortugues}
  urlAtual={`/biblioteca/sao-joao-maria-vianney/oracoes/${oracao.id}`}
  labelSecao="Continuar oração"
/>

      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney/oracoes" className={styles.linkVoltar}>
          ← Voltar à lista de orações
        </Link>
        <span className={styles.migalhas}>Orações / {oracao.tituloPortugues}</span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>{oracao.tipo || "Oração Espiritual"}</p>
          <h1 className={styles.leitorTitulo}>{oracao.tituloPortugues}</h1>
          {oracao.tituloOriginal && <p className={styles.leitorSubtitulo}>Original: {oracao.tituloOriginal}</p>}
        </header>

        <div className={styles.leitorCorpo}>
          {paragrafos.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {oracao.original?.texto && (
          <section className={styles.caixaOriginal}>
            <h3 className={styles.caixaOriginalTitulo}>Texto Original em Francês</h3>
            <p className={styles.caixaOriginalTexto}>{oracao.original.texto}</p>
          </section>
        )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico & fontes</h4>
          <ul>
            {oracao.fonte && <li><strong>Edição de referência:</strong> {oracao.fonte}</li>}
            {oracao.autenticidade && <li><strong>Autenticidade:</strong> {oracao.autenticidade}</li>}
          </ul>
        </section>

        {/* NAVEGAÇÃO ANTERIOR E PRÓXIMO */}
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: 40, paddingTop: 20, borderTop: "1px solid #e4dcd0" }}>
          {anterior ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/oracoes/${anterior.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              ← {anterior.tituloPortugues}
            </Link>
          ) : <div />}

          {proximo ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/oracoes/${proximo.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              {proximo.tituloPortugues} →
            </Link>
          ) : <div />}
        </nav>
      </article>
    </div>
  );
}