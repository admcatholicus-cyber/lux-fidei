import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCapituloContraEunomioById,
  getCapituloContraEunomioAnterior,
  getProximoCapituloContraEunomio,
} from "../../lib/gregorio-helpers";
import styles from "../../biblioteca-gregorio.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cap = getCapituloContraEunomioById(id);
  if (!cap) return { title: "Capítulo não encontrado | Lux Fidei" };
  return {
    title: `${cap.titulo} — Contra Eunômio | São Gregório de Nissa`,
    description: cap.contextoHistorico ?? cap.titulo,
  };
}

export default async function PaginaLeitorContraEunomio({ params }: Props) {
  const { id } = await params;
  const cap = getCapituloContraEunomioById(id);

  if (!cap) notFound();

  const anterior = getCapituloContraEunomioAnterior(cap.id);
  const proximo = getProximoCapituloContraEunomio(cap.id);

  const paragrafosPt = cap.portugues.texto
    .split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-gregorio-nissa/contra-eunomio"
          className={styles.linkVoltar}
        >
          ← Voltar à lista de capítulos
        </Link>
        <span className={styles.migalhas}>
          Contra Eunômio / Cap. {cap.numero}
        </span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>
            Contra Eunômio · Capítulo {cap.numero}
          </p>
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

        {/* TEXTO EM PORTUGUÊS */}
        <div className={styles.leitorCorpo}>
          {paragrafosPt.map((paragrafo: string, index: number) => (
            <p key={index} className={styles.paragrafo}>
              {paragrafo}
            </p>
          ))}
        </div>

        {/* TEXTO ORIGINAL */}
        <div className={styles.leitorCorpo}>
          <h3
            style={{
              color: "var(--greg-roxo)",
              fontSize: "1rem",
              marginBottom: 12,
            }}
          >
            Texto original ({cap.original.idioma})
          </h3>
          {cap.original.texto.split(/\n\s*\n/).map((p: string, i: number) => (
            <p key={i} className={styles.paragrafo}>
              {p.trim()}
            </p>
          ))}
        </div>

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
              href={`/biblioteca/sao-gregorio-nissa/contra-eunomio/${anterior.id}`}
              className={styles.btnNavegacao}
            >
              ← Cap. {anterior.numero}: {anterior.titulo}
            </Link>
          ) : (
            <div />
          )}

          {proximo ? (
            <Link
              href={`/biblioteca/sao-gregorio-nissa/contra-eunomio/${proximo.id}`}
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
