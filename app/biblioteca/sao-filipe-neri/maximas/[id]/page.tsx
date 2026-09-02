import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { maximaPorId, maximaAnterior, maximaProxima } from "../../lib/maximas-helpers";
import EtiquetaStatus from "../../components/EtiquetaStatus";
import styles from "../../biblioteca-filipe.module.css";
import RegistradorHistorico from "../../components/RegistradorHistorico";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const maxima = maximaPorId(id);
  if (!maxima) return { title: "Máxima não encontrada | Lux Fidei" };
  return {
    title: `Máxima de ${maxima.dia} de ${maxima.mes} | São Filipe Néri`,
    description: maxima.portugues.texto,
  };
}

export default async function PaginaLeitorMaxima({ params }: Props) {
  const { id } = await params;
  const m = maximaPorId(id);

  if (!m) notFound();

  const anterior = maximaAnterior(id);
  const proxima = maximaProxima(id);

  return (
    <div className={styles.pagina}>
      <RegistradorHistorico
  secao="maximas"
  labelSecao="Continuar máximas"
  tituloAtual={`Máxima de ${m.dia} de ${m.mes}`}
  urlAtual={`/biblioteca/sao-filipe-neri/maximas/${m.id}`}
/>
      <nav className={styles.topoNav}>
        <Link href={`/biblioteca/sao-filipe-neri/maximas?mes=${m.mes}`} className={styles.linkVoltar}>
          ← Voltar às máximas de {m.mes}
        </Link>
        <span className={styles.migalhas}>Máximas / {m.dia} de {m.mes}</span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>Máxima nº {m.numero}</p>
          <h1 className={styles.leitorTitulo}>{m.dia} de {m.mes}</h1>
          <p className={styles.leitorSubtitulo}>Tema: {m.tema}</p>
          <EtiquetaStatus status="tradicional" />
        </header>

        <div className={styles.leitorCorpo} style={{ textAlign: "center", fontSize: "22px", fontStyle: "italic", margin: "40px 0" }}>
          <p>“{m.portugues.texto}”</p>
        </div>

        {m.original?.texto && (
          <section className={styles.caixaOriginal}>
            <h3 className={styles.caixaOriginalTitulo}>Texto Original ({m.original.idioma})</h3>
            <p className={styles.caixaOriginalTexto}>“{m.original.texto}”</p>
          </section>
        )}

        {m.original?.passagensLatinas && m.original.passagensLatinas.length > 0 && (
          <section className={styles.caixaLatim}>
            <h3 className={styles.caixaLatimTitulo}>Passagem Latina</h3>
            {m.original.passagensLatinas.map((lat: any, idx: number) => (
              <div key={idx} className={styles.itemLatim}>
                <strong>“{lat.trecho}”</strong> — {lat.traducao}
                {lat.origem && <em> ({lat.origem})</em>}
              </div>
            ))}
          </section>
        )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico</h4>
          <ul>
            <li><strong>Fonte:</strong> {m.fonte?.primaria ?? "Simone Raponi (org.), Il cuore di San Filippo Neri"}</li>
            {m.testemunha && <li><strong>Testemunha histórica:</strong> {m.testemunha}</li>}
          </ul>
        </section>

        <nav className={styles.navegacaoItem}>
          {anterior ? (
            <Link href={`/biblioteca/sao-filipe-neri/maximas/${anterior.id}`} className={styles.btnNavegacao}>
              ← {anterior.dia} de {anterior.mes}
            </Link>
          ) : <div />}

          {proxima ? (
            <Link href={`/biblioteca/sao-filipe-neri/maximas/${proxima.id}`} className={styles.btnNavegacao}>
              {proxima.dia} de {proxima.mes} →
            </Link>
          ) : <div />}
        </nav>
      </article>
    </div>
  );
}