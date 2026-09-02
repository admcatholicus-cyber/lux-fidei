import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarCartaPorId, cartaAnterior, cartaProxima } from "../../lib/sermoes-helpers";
import RegistradorHistoricoVianney from "../../components/RegistradorHistoricoVianney";
import styles from "../../biblioteca-vianney.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const carta = buscarCartaPorId(id);
  if (!carta) return { title: "Carta não encontrada | Lux Fidei" };
  return {
    title: `Carta nº ${carta.numero} a ${carta.destinatario?.nome || "Correspondência"} | São João Maria Vianney`,
    description: `Carta de São João Maria Vianney para ${carta.destinatario?.nome}`,
  };
}

export default async function PaginaLeitorCarta({ params }: Props) {
  const { id } = await params;
  const carta = buscarCartaPorId(id);

  if (!carta) notFound();

  const anterior = cartaAnterior(id);
  const proximo = cartaProxima(id);

  // Tratamento de parágrafos
  const textoBase = carta.portugues?.texto || carta.original?.texto || "";
  const paragrafos = textoBase
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
     <RegistradorHistoricoVianney
  secao="cartas"
  tituloAtual={`Carta nº ${carta.numero} a ${carta.destinatario?.nome}`}
  urlAtual={`/biblioteca/sao-joao-maria-vianney/cartas/${carta.id}`}
  labelSecao="Continuar carta"
/>

      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney/cartas" className={styles.linkVoltar}>
          ← Voltar à lista de cartas
        </Link>
        <span className={styles.migalhas}>Cartas / Carta nº {carta.numero}</span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>Carta nº {carta.numero}</p>
          <h1 className={styles.leitorTitulo}>A {carta.destinatario?.nome || "Destinatário"}</h1>
          {carta.destinatario?.qualificacao && (
            <p className={styles.leitorSubtitulo}>{carta.destinatario.qualificacao}</p>
          )}
          <p className={styles.leitorMeta}>
            Local: {carta.local || "Ars"} · Data: {carta.data?.original || "Não informada"}
          </p>
        </header>

        {carta.contextoHistorico && (
          <section className={styles.caixaNotas} style={{ marginBottom: 30 }}>
            <h4>Contexto Histórico</h4>
            <p>{carta.contextoHistorico}</p>
          </section>
        )}

        <div className={styles.leitorCorpo}>
          {paragrafos.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {carta.original?.texto && (
          <section className={styles.caixaOriginal}>
            <h3 className={styles.caixaOriginalTitulo}>Texto Original em Francês</h3>
            <p className={styles.caixaOriginalTexto}>{carta.original.texto}</p>
          </section>
        )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico & fontes</h4>
          <ul>
            {carta.fonte && <li><strong>Edição de referência:</strong> {carta.fonte}</li>}
            {carta.autenticidade && <li><strong>Autenticidade:</strong> {carta.autenticidade}</li>}
          </ul>
        </section>

        {/* NAVEGAÇÃO ANTERIOR E PRÓXIMO */}
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: 40, paddingTop: 20, borderTop: "1px solid #e4dcd0" }}>
          {anterior ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/cartas/${anterior.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              ← Carta nº {anterior.numero} ({anterior.destinatario?.nome})
            </Link>
          ) : <div />}

          {proximo ? (
            <Link href={`/biblioteca/sao-joao-maria-vianney/cartas/${proximo.id}`} style={{ fontSize: 13, color: "#4a2e58", textDecoration: "none" }}>
              Carta nº {proximo.numero} ({proximo.destinatario?.nome}) →
            </Link>
          ) : <div />}
        </nav>
      </article>
    </div>
  );
}