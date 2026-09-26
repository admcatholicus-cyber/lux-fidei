import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getHinoAmbrosianoById,
  getHinoAmbrosianoAnterior,
  getProximoHinoAmbrosiano,
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
  const hino = getHinoAmbrosianoById(id);
  if (!hino) return { title: "Hino não encontrado | Lux Fidei" };
  return {
    title: `${hino.titulo} — Hinos Ambrosianos | Santo Ambrósio`,
    description: hino.contextoHistorico ?? hino.titulo,
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

export default async function PaginaLeitorHino({ params }: Props) {
  const { id } = await params;
  const hino = getHinoAmbrosianoById(id);

  if (!hino) notFound();

  const anterior = getHinoAmbrosianoAnterior(hino.id);
  const proximo = getProximoHinoAmbrosiano(hino.id);

  const paragrafosPt = hino.portugues.texto
    .split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <RegistradorHistorico
        secao="hinos-ambrosianos"
        labelSecao="Continuar Hinos Ambrosianos"
        tituloAtual={hino.titulo}
        urlAtual={`/biblioteca/santo-ambrosio/hinos-ambrosianos/${hino.id}`}
      />
      <BarraSecoes ativa="hinos-ambrosianos" />

      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/santo-ambrosio/hinos-ambrosianos"
          className={styles.linkVoltar}
        >
          ← Voltar à lista de hinos
        </Link>
        <span className={styles.migalhas}>
          Hinos Ambrosianos / Hino {hino.numero}
        </span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>
            Hinos Ambrosianos · Hino {hino.numero}
          </p>
          <h1 className={styles.leitorTitulo}>{hino.titulo}</h1>

          {hino.subtitulo && (
            <p className={styles.leitorSubtitulo}>{hino.subtitulo}</p>
          )}

          <p className={styles.leitorMeta}>
            📅 {hino.data.original} · {hino.autenticidade}
          </p>

          {hino.contextoHistorico && (
            <div className={styles.leitorContexto}>
              <strong>Contexto histórico:</strong> {hino.contextoHistorico}
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
          idioma={hino.original.idioma}
          texto={hino.original.texto}
        />

        {/* TAGS DE TEMA */}
        {hino.temas.length > 0 && (
          <div style={{ marginTop: 30 }}>
            {hino.temas.map((tema) => (
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
              <strong>Fonte primária:</strong> {hino.fonte.primaria}
            </li>
            {hino.fonte.paginaOriginal && (
              <li>
                <strong>Página no impresso:</strong> {hino.fonte.paginaOriginal}
              </li>
            )}
            <li>
              <strong>Tradução:</strong> {hino.portugues.tradutor}
            </li>
          </ul>

          {Array.isArray(hino.notasCriticas) &&
            hino.notasCriticas.length > 0 && (
              <>
                <h4>Notas críticas</h4>
                <ul>
                  {hino.notasCriticas.map((nota: string, idx: number) => (
                    <li key={idx}>{nota}</li>
                  ))}
                </ul>
              </>
            )}

          {Array.isArray(hino.notasEditoriais) &&
            hino.notasEditoriais.length > 0 && (
              <>
                <h4>Notas editoriais</h4>
                <ul>
                  {hino.notasEditoriais.map((nota: string, idx: number) => (
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
              href={`/biblioteca/santo-ambrosio/hinos-ambrosianos/${anterior.id}`}
              className={styles.btnNavegacao}
            >
              ← Hino {anterior.numero}: {anterior.titulo}
            </Link>
          ) : (
            <div />
          )}

          {proximo ? (
            <Link
              href={`/biblioteca/santo-ambrosio/hinos-ambrosianos/${proximo.id}`}
              className={styles.btnNavegacao}
            >
              Hino {proximo.numero}: {proximo.titulo} →
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
