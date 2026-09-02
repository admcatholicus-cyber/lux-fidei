import type { Metadata } from "next";
import Link from "next/link";
import { escritosDiversos } from "../data/outros-escritos";
import EtiquetaStatus from "../components/EtiquetaStatus";
import styles from "../biblioteca-filipe.module.css";

export const metadata: Metadata = {
  title: "Outros Escritos e Documentos | São Filipe Néri | Lux Fidei",
  description: "Testamentos, memoriais aos papas, regras domésticas e orações de São Filipe Néri.",
};

export default function PaginaOutrosEscritos() {
  const lista = escritosDiversos as any[];

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Outros Escritos</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📋</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Outros Escritos e Documentos</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Testamentos, memoriais dirigidos aos papas Clemente VIII e Gregório XIII,
          regras domésticas, orações breves e manuscritos autógrafos catalogados na edição crítica moderna.
        </p>
      </header>

      <main className={styles.gridCartas}>
        {lista.map((item) => (
          <div key={item.id} className={styles.cardCarta} style={{ cursor: "default" }}>
            <div className={styles.cardCartaTop}>
              <span className={styles.cardCartaNumero}>{item.categoria.toUpperCase()}</span>
              <EtiquetaStatus status="catalogo" />
            </div>

            <h2 className={styles.cardCartaDestinatario}>{item.titulo}</h2>
            <p className={styles.cardCartaDataLocal}>
              📅 {item.data ?? "Data catalogada na edição crítica"}
            </p>

            <p className={styles.cardCartaContexto}>{item.status}</p>

            <div className={styles.caixaNotas} style={{ marginTop: "auto", paddingTop: "12px" }}>
              <p style={{ fontSize: "11px", margin: 0 }}>
                <strong>Fonte bibliográfica:</strong> {item.fonte}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}