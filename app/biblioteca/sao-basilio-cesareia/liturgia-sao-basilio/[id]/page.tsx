import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCapituloLiturgiaSaoBasilioById,
  getCapituloLiturgiaSaoBasilioAnterior,
  getProximoCapituloLiturgiaSaoBasilio,
} from "../../lib/basilio-helpers";
import styles from "../../biblioteca-basilio.module.css";
import CaixaTextoOriginal from "../../components/CaixaTextoOriginal";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cap = getCapituloLiturgiaSaoBasilioById(id);
  if (!cap) return { title: "Capítulo não encontrado | Lux Fidei" };
  return {
    title: `${cap.titulo} — Divina Liturgia de São Basílio | São Basílio de Cesareia`,
    description: cap.contextoHistorico ?? cap.titulo,
  };
}

export default async function PaginaLeitorLiturgiaSaoBasilio({
  params,
}: Props) {
  const { id } = await params;
  const cap = getCapituloLiturgiaSaoBasilioById(id);

  if (!cap) notFound();

  const anterior = getCapituloLiturgiaSaoBasilioAnterior(cap.id);
  const proximo = getProximoCapituloLiturgiaSaoBasilio(cap.id);

  const paragrafosPt = cap.portugues.texto
    .split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean);

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-basilio-cesareia/liturgia-sao-basilio"
          className={styles.linkVoltar}
        >
          ← Voltar à lista de capítulos
        </Link>
        <span className={styles.migalhas}>
          Liturgia de São Basílio / Cap. {cap.numero}
        </span>
      </nav>

      <article className={styles.leitorContainer}>
        <header className={styles.leitorHeader}>
          <p className={styles.leitorNumero}>
            Liturgia de São Basílio · Capítulo {cap.numero}
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
        <CaixaTextoOriginal
          textoOriginal={cap.original.texto}
          idioma={cap.original.idioma}
        />

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
              href={`/biblioteca/sao-basilio-cesareia/liturgia-sao-basilio/${anterior.id}`}
              className={styles.btnNavegacao}
            >
              ← Cap. {anterior.numero}: {anterior.titulo}
            </Link>
          ) : (
            <div />
          )}

          {proximo ? (
            <Link
              href={`/biblioteca/sao-basilio-cesareia/liturgia-sao-basilio/${proximo.id}`}
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
