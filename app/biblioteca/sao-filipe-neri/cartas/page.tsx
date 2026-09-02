import type { Metadata } from "next";
import Link from "next/link";
import {
  gerarCartasLegiveis,
  gerarCartasCatalogo,
  estatisticasCartas,
} from "../lib/cartas-unificadas";
import { romano, formatarDataISO } from "../lib/formatadores";
import EtiquetaStatus from "../components/EtiquetaStatus";
import styles from "../biblioteca-filipe.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "Cartas de São Filipe Néri | Lux Fidei",
  description: "Cartas legíveis de São Filipe Néri e catálogo da edição crítica moderna.",
};

export default function PaginaCartas() {
  const legiveis = gerarCartasLegiveis();
  const catalogo = gerarCartasCatalogo();
  const stats = estatisticasCartas();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Cartas</span>
      </nav>
        <BarraSecoes ativa="cartas" />
        
      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📜</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Cartas de São Filipe Néri</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Correspondência de direção espiritual, conselhos a religiosas,
          recomendações a cardeais e consolos a penitentes. Aqui entram apenas
          as cartas com texto público legível.
        </p>

        <div className={styles.estatisticasBanner}>
          <span className={styles.estatisticaItem}>
            <strong>{stats.legiveis}</strong> legíveis
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.integrais}</strong> integrais
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.fragmentarias}</strong> fragmentária(s)
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.catalogo}</strong> só no catálogo EOS
          </span>
        </div>
      </header>

      {/* GRID APENAS COM CARTAS LEGÍVEIS */}
      <main className={styles.gridCartas}>
        {legiveis.map((carta) => {
          const dataFormatada = formatarDataISO(carta.data.iso) ?? carta.data.original;

          return (
            <Link
              key={carta.id}
              href={`/biblioteca/sao-filipe-neri/cartas/${carta.id}`}
              className={styles.cardCarta}
            >
              <div className={styles.cardCartaTop}>
                <span className={styles.cardCartaNumero}>
                  Carta {romano(carta.numeroExibicao)}
                </span>
                <EtiquetaStatus status={carta.statusTextual} compacto />
              </div>

              <h2 className={styles.cardCartaDestinatario}>{carta.destinatario}</h2>
              {carta.qualificacao && (
                <p className={styles.cardCartaQualificacao}>{carta.qualificacao}</p>
              )}

              <p className={styles.cardCartaDataLocal}>
                📍 {carta.local ?? "Local não indicado"} · 📅 {dataFormatada}
              </p>

              <p className={styles.cardCartaContexto}>{carta.contexto}</p>

              <div className={styles.cardCartaRodape}>
                <span>📖 Ler texto completo</span>
                <span>→</span>
              </div>
            </Link>
          );
        })}
      </main>

      {/* TABELA SECUNDÁRIA DO CATÁLOGO EOS (SEM CARD, SEM BOTÃO DE LER) */}
      {catalogo.length > 0 && (
        <section className={styles.notaEditorial} style={{ maxWidth: 1080, marginTop: 50 }}>
          <h2 className={styles.notaEditorialTitulo}>
            Catálogo da edição crítica (sem texto público)
          </h2>
          <p>
            Estas cartas estão identificadas na edição moderna de Wick-Alda &amp; Wodrazka
            (EOS, 2011), mas o texto integral não está em domínio público. Por isso não
            abrem página de leitura: listamos apenas a ficha bibliográfica.
          </p>

          <div style={{ marginTop: 20 }}>
            {catalogo.map((carta) => (
              <div
                key={carta.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px dotted #e2dcd0",
                  fontSize: 14,
                }}
              >
                <strong style={{ color: "#b08a3c" }}>
                  Carta {romano(carta.numeroExibicao)}
                </strong>
                <div>
                  <div style={{ fontWeight: 600 }}>{carta.destinatario}</div>
                  <div style={{ color: "#6f6758", fontSize: 13 }}>
                    {carta.qualificacao ? `${carta.qualificacao} · ` : ""}
                    {carta.local ?? "local não indicado"}
                    {carta.contexto ? ` · ${carta.contexto}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}