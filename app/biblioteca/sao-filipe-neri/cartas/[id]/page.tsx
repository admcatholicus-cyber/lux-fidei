import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  buscarCartaPorId,
  cartaAnterior,
  cartaProxima,
} from "../../lib/cartas-unificadas";
import { romano, formatarDataISO } from "../../lib/formatadores";
import EtiquetaStatus from "../../components/EtiquetaStatus";
import RegistradorHistorico from "../../components/RegistradorHistorico";
import styles from "../../biblioteca-filipe.module.css";
import BarraSecoes from "../../components/BarraSecoes";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const carta = buscarCartaPorId(id);

  if (!carta || carta.statusTextual === "catalogo") {
    return { title: "Carta | Lux Fidei" };
  }

  return {
    title: `Carta ${romano(carta.numeroExibicao)} a ${carta.destinatario} | São Filipe Néri`,
    description: carta.contexto,
  };
}

export default async function PaginaLeitorCarta({ params }: Props) {
  const { id } = await params;
  const carta = buscarCartaPorId(id);

  if (!carta) notFound();

  // Ficha sem texto não tem página de leitura
  if (carta.statusTextual === "catalogo") {
    redirect("/biblioteca/sao-filipe-neri/cartas");
  }

  const anterior = cartaAnterior(carta.id);
  const proxima = cartaProxima(carta.id);

  const h = carta.cartaHistorica;
  const c = carta.cartaCritica;
  const dataFormatada = formatarDataISO(carta.data.iso) ?? carta.data.original;

  const paragrafos =
    h?.portugues?.texto
      ?.split(/\n\s*\n/)
      .map((p: string) => p.trim())
      .filter(Boolean) ?? [];

  return (
    <div className={styles.pagina}>
<RegistradorHistorico
  secao="cartas"
  labelSecao="Continuar cartas"
  tituloAtual={`Carta ${romano(carta.numeroExibicao)} — ${carta.destinatario}`}
  urlAtual={`/biblioteca/sao-filipe-neri/cartas/${carta.id}`}
/>
  <BarraSecoes ativa="cartas" />
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri/cartas" className={styles.linkVoltar}>
          ← Voltar à lista de cartas
        </Link>
        <span className={styles.migalhas}>
          Cartas / Carta {romano(carta.numeroExibicao)}
        </span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>
            Carta {romano(carta.numeroExibicao)}
          </p>
          <h1 className={styles.leitorTitulo}>Ao {carta.destinatario}</h1>

          {carta.qualificacao && (
            <p className={styles.leitorSubtitulo}>{carta.qualificacao}</p>
          )}

          <p className={styles.leitorMeta}>
            📍 {carta.local ?? "Local não indicado"} · 📅 {dataFormatada}
          </p>

          <EtiquetaStatus status={carta.statusTextual} />

          {carta.contexto && (
            <div className={styles.leitorContexto}>
              <strong>Contexto histórico:</strong> {carta.contexto}
            </div>
          )}
        </header>

        {paragrafos.length > 0 ? (
          <div className={styles.leitorCorpo}>
            {paragrafos.map((paragrafo: string, index: number) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>
        ) : (
          <div className={styles.leitorCorpo}>
            <p style={{ fontStyle: "italic", color: "#6f6758" }}>
              O texto desta carta não pôde ser carregado.
            </p>
          </div>
        )}

        {h?.original?.texto && (
          <section className={styles.caixaOriginal}>
            <h3 className={styles.caixaOriginalTitulo}>
              Texto original em italiano ({h.original.idioma})
            </h3>
            <p className={styles.caixaOriginalTexto}>{h.original.texto}</p>
          </section>
        )}

        {Array.isArray(h?.original?.passagensLatinas) &&
          h.original.passagensLatinas.length > 0 && (
            <section className={styles.caixaLatim}>
              <h3 className={styles.caixaLatimTitulo}>
                Passagens em latim identificadas
              </h3>
              {h.original.passagensLatinas.map((item: any, idx: number) => (
                <div key={idx} className={styles.itemLatim}>
                  <strong>“{item.trecho}”</strong> — {item.traducao}
                  {item.origem && <em> ({item.origem})</em>}
                </div>
              ))}
            </section>
          )}

        {Array.isArray(h?.referenciasBiblicas) &&
          h.referenciasBiblicas.length > 0 && (
            <section className={styles.caixaBiblia}>
              <h3 className={styles.caixaBibliaTitulo}>
                Referências bíblicas e hagiográficas
              </h3>
              {h.referenciasBiblicas.map((ref: any, idx: number) => (
                <div key={idx} className={styles.itemBiblia}>
                  📖 <strong>{ref.referencia}</strong> ({ref.tipo}): “
                  {ref.passagem}”
                </div>
              ))}
            </section>
          )}

        <section className={styles.caixaNotas}>
          <h4>Aparato crítico & fontes</h4>
          <ul>
            <li>
              <strong>Fonte primária:</strong>{" "}
              {h?.fonte?.primaria ?? c?.fonte ?? "Edição EOS 2011"}
            </li>
            {h?.fonte?.paginaOriginal && (
              <li>
                <strong>Página no impresso:</strong> {h.fonte.paginaOriginal}
              </li>
            )}
            {h?.portugues?.tradutor && (
              <li>
                <strong>Tradução:</strong> {h.portugues.tradutor}
              </li>
            )}
          </ul>

          {Array.isArray(h?.notasEditoriais) && h.notasEditoriais.length > 0 && (
            <>
              <h4>Notas editoriais</h4>
              <ul>
                {h.notasEditoriais.map((nota: string, idx: number) => (
                  <li key={idx}>{nota}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        <nav className={styles.navegacaoItem}>
          {anterior ? (
            <Link
              href={`/biblioteca/sao-filipe-neri/cartas/${anterior.id}`}
              className={styles.btnNavegacao}
            >
              ← Carta {romano(anterior.numeroExibicao)}: {anterior.destinatario}
            </Link>
          ) : (
            <div />
          )}

          {proxima ? (
            <Link
              href={`/biblioteca/sao-filipe-neri/cartas/${proxima.id}`}
              className={styles.btnNavegacao}
            >
              Carta {romano(proxima.numeroExibicao)}: {proxima.destinatario} →
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}