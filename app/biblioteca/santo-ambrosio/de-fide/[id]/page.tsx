import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCapituloDeFideById,
  getCapituloDeFideAnterior,
  getProximoCapituloDeFide,
} from "../../lib/ambrosio-helpers";
import RegistradorHistorico from "../../components/RegistradorHistorico";
import styles from "../../biblioteca-ambrosio.module.css";
import BarraSecoes from "../../components/BarraSecoes";
import { formatarTextoPortugues } from "../../lib/formatadores";
import { CaixaTextoOriginal } from "../../components/CaixaTextoOriginal";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cap = getCapituloDeFideById(id);
  if (!cap) return { title: "Capítulo não encontrado | Lux Fidei" };
  return {
    title: `${cap.titulo} — De Fide | Santo Ambrósio`,
    description: cap.contextoHistorico ?? cap.titulo,
  };
}

function isCitacao(paragrafo: string): boolean {
  const trimmed = paragrafo.trim();
  return (
    trimmed.startsWith(">") ||
    trimmed.startsWith('"') ||
    trimmed.startsWith("\u201C")
  );
}

export default async function PaginaLeitorCapitulo({ params }: Props) {
  const { id } = await params;
  const cap = getCapituloDeFideById(id);

  if (!cap) notFound();

  const anterior = getCapituloDeFideAnterior(cap.id);
  const proximo = getProximoCapituloDeFide(cap.id);

  const paragrafosPt = cap.portugues.texto
    .split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <RegistradorHistorico
        secao="de-fide"
        labelSecao="Continuar De Fide"
        tituloAtual={cap.titulo}
        urlAtual={`/biblioteca/santo-ambrosio/de-fide/${cap.id}`}
      />
      <BarraSecoes ativa="de-fide" />

      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/santo-ambrosio/de-fide"
          className={styles.linkVoltar}
        >
          ← Voltar à lista de capítulos
        </Link>
        <span className={styles.migalhas}>De Fide / Cap. {cap.numero}</span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>De Fide · Capítulo {cap.numero}</p>
          <h1 className={styles.leitorTitulo}>{cap.titulo}</h1>

          {cap.subtitulo && (
            <p className={styles.leitorSubtitulo}>{cap.subtitulo}</p>
          )}

          <p className={styles.leitorMeta}>
            📅 {cap.data.original} · {cap.autenticidade}
          </p>

          {cap.contextoHistorico && (
            <div className={styles.leitorContexto}>
              <strong>Contexto histórico:</strong> {cap.contextoHistorico}
            </div>
          )}
        </header>

        {/* TEXTO EM PORTUGUÊS (PRIMEIRO) */}
        <div className={styles.leitorCorpo}>
          {paragrafosPt.map((paragrafo: string, index: number) => (
            <p
              key={index}
              className={
                isCitacao(paragrafo)
                  ? styles.paragrafoCitacao
                  : styles.paragrafo
              }
            >
              {formatarTextoPortugues(
                paragrafo
                  .replace(/^>\s*/, "")
                  .replace(/^["\u201C]/, "")
                  .trim(),
              )}
            </p>
          ))}
        </div>

        {/* TEXTO ORIGINAL — BILÍNGUE */}
        <CaixaTextoOriginal
          idioma={cap.original.idioma}
          texto={cap.original.texto}
        />

        {/* PASSAGENS LATINAS IDENTIFICADAS */}
        {Array.isArray(cap.original.passagensLatinas) &&
          cap.original.passagensLatinas.length > 0 && (
            <section className={styles.caixaLatim}>
              <h3 className={styles.caixaLatimTitulo}>
                Passagens bíblicas no original
              </h3>
              {cap.original.passagensLatinas.map(
                (
                  item: {
                    trecho: string;
                    origem: string | null;
                    traducao: string;
                  },
                  idx: number,
                ) => (
                  <div key={idx} className={styles.itemLatim}>
                    <strong>&ldquo;{item.trecho}&rdquo;</strong> —{" "}
                    {item.traducao}
                    {item.origem && <em> ({item.origem})</em>}
                  </div>
                ),
              )}
            </section>
          )}

        {/* REFERÊNCIAS BÍBLICAS */}
        {Array.isArray(cap.referenciasBiblicas) &&
          cap.referenciasBiblicas.length > 0 && (
            <section className={styles.caixaBiblia}>
              <h3 className={styles.caixaBibliaTitulo}>Referências bíblicas</h3>
              {cap.referenciasBiblicas.map(
                (
                  ref: { passagem: string; referencia: string; tipo: string },
                  idx: number,
                ) => (
                  <div key={idx} className={styles.itemBiblia}>
                    📖 <strong>{ref.referencia}</strong> ({ref.tipo}): &ldquo;
                    {ref.passagem}&rdquo;
                  </div>
                ),
              )}
            </section>
          )}

        {/* TAGS DE TEMA */}
        {cap.temas.length > 0 && (
          <div style={{ marginTop: 30 }}>
            {cap.temas.map((tema) => (
              <span key={tema} className={styles.temaTag}>
                {tema}
              </span>
            ))}
          </div>
        )}

        {/* NOTAS E FONTES */}
        <section className={styles.caixaNotas}>
          <h4>Aparato crítico &amp; fontes</h4>
          <ul>
            <li>
              <strong>Fonte primária:</strong> {cap.fonte.primaria}
            </li>
            {cap.fonte.paginaOriginal && (
              <li>
                <strong>Página no impresso:</strong> {cap.fonte.paginaOriginal}
              </li>
            )}
            <li>
              <strong>Tradução:</strong> {cap.portugues.tradutor}
            </li>
          </ul>

          {Array.isArray(cap.notasCriticas) && cap.notasCriticas.length > 0 && (
            <>
              <h4>Notas críticas</h4>
              <ul>
                {cap.notasCriticas.map((nota: string, idx: number) => (
                  <li key={idx}>{nota}</li>
                ))}
              </ul>
            </>
          )}

          {Array.isArray(cap.notasEditoriais) &&
            cap.notasEditoriais.length > 0 && (
              <>
                <h4>Notas editoriais</h4>
                <ul>
                  {cap.notasEditoriais.map((nota: string, idx: number) => (
                    <li key={idx}>{nota}</li>
                  ))}
                </ul>
              </>
            )}
        </section>

        {/* NAVEGAÇÃO ANTERIOR/PRÓXIMO */}
        <nav className={styles.navCapitulos}>
          {anterior ? (
            <Link
              href={`/biblioteca/santo-ambrosio/de-fide/${anterior.id}`}
              className={styles.btnNavegacao}
            >
              ← Cap. {anterior.numero}: {anterior.titulo}
            </Link>
          ) : (
            <div />
          )}

          {proximo ? (
            <Link
              href={`/biblioteca/santo-ambrosio/de-fide/${proximo.id}`}
              className={styles.btnNavegacao}
            >
              Cap. {proximo.numero}: {proximo.titulo} →
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
