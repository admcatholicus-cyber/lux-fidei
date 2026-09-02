import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/iconografia/ensaio.module.css';

/* ═══════ Abertura visual da página ═══════ */

export function AberturaIconografia({
  titulo,
  subtitulo,
  epigrafe,
  epigrafeAutor,
}: {
  titulo: string;
  subtitulo: string;
  epigrafe?: string;
  epigrafeAutor?: string;
}) {
  return (
    <div className={styles.abertura}>
      <div className={styles.aberturaOrnamentoTopo}>✦ ✦ ✦</div>
      <h1 className={styles.aberturaTitulo}>{titulo}</h1>
      <p className={styles.aberturaSubtitulo}>{subtitulo}</p>
      {epigrafe && (
        <blockquote className={styles.aberturaEpigrafe}>
          <p>{epigrafe}</p>
          {epigrafeAutor && <cite>{epigrafeAutor}</cite>}
        </blockquote>
      )}
      <div className={styles.aberturaOrnamentoBaixo}>· · ·</div>
    </div>
  );
}

/* ═══════ Seção numerada do ensaio ═══════ */

export function SecaoEnsaio({
  numero,
  titulo,
  subtitulo,
  children,
}: {
  numero: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.secao}>
      <div className={styles.secaoCabecalho}>
        <span className={styles.secaoNumero}>{numero}</span>
        <div className={styles.secaoFio} />
        <div>
          <h2 className={styles.secaoTitulo}>{titulo}</h2>
          {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
        </div>
      </div>
      <div className={styles.secaoCorpo}>{children}</div>
    </section>
  );
}

/* ═══════ Parágrafo narrativo do ensaio ═══════ */

export function Prosa({ children }: { children: React.ReactNode }) {
  return <div className={styles.prosa}>{children}</div>;
}

/* ═══════ Ficha de obra — descrição textual de uma peça ═══════ */

export function FichaObra({
  titulo,
  autor,
  data,
  tecnica,
  localizacao,
  dimensoes,
  children,
}: {
  titulo: string;
  autor?: string;
  data?: string;
  tecnica?: string;
  localizacao?: string;
  dimensoes?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.ficha}>
      <div className={styles.fichaBorda} />
      <div className={styles.fichaInterior}>
        <h3 className={styles.fichaTitulo}>{titulo}</h3>

        <div className={styles.fichaDados}>
          {autor && (
            <div className={styles.fichaDado}>
              <span className={styles.fichaLabel}>Artista</span>
              <span className={styles.fichaValor}>{autor}</span>
            </div>
          )}
          {data && (
            <div className={styles.fichaDado}>
              <span className={styles.fichaLabel}>Período</span>
              <span className={styles.fichaValor}>{data}</span>
            </div>
          )}
          {tecnica && (
            <div className={styles.fichaDado}>
              <span className={styles.fichaLabel}>Técnica</span>
              <span className={styles.fichaValor}>{tecnica}</span>
            </div>
          )}
          {localizacao && (
            <div className={styles.fichaDado}>
              <span className={styles.fichaLabel}>Localização</span>
              <span className={styles.fichaValor}>{localizacao}</span>
            </div>
          )}
          {dimensoes && (
            <div className={styles.fichaDado}>
              <span className={styles.fichaLabel}>Dimensões</span>
              <span className={styles.fichaValor}>{dimensoes}</span>
            </div>
          )}
        </div>

        <div className={styles.fichaDescricao}>{children}</div>
      </div>
    </article>
  );
}

/* ═══════ Atributo iconográfico — item visual explicado ═══════ */

export function Atributo({
  simbolo,
  nome,
  children,
}: {
  simbolo: string;
  nome: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.atributo}>
      <span className={styles.atributoSimbolo}>{simbolo}</span>
      <div className={styles.atributoTexto}>
        <strong className={styles.atributoNome}>{nome}</strong>
        <span className={styles.atributoDesc}>{children}</span>
      </div>
    </div>
  );
}

/* ═══════ Grid de atributos ═══════ */

export function AtributosGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.atributosGrid}>{children}</div>;
}

/* ═══════ Comparação entre épocas / estilos ═══════ */

export function Comparacao({
  titulo,
  colunas,
}: {
  titulo?: string;
  colunas: {
    epoca: string;
    descricao: string;
    caracteristicas: string[];
  }[];
}) {
  return (
    <div className={styles.comparacao}>
      {titulo && <h3 className={styles.comparacaoTitulo}>{titulo}</h3>}
      <div className={styles.comparacaoGrid}>
        {colunas.map((col, i) => (
          <div key={i} className={styles.comparacaoColuna}>
            <span className={styles.comparacaoEpoca}>{col.epoca}</span>
            <p className={styles.comparacaoDesc}>{col.descricao}</p>
            <ul className={styles.comparacaoLista}>
              {col.caracteristicas.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════ Citação de fonte artística ═══════ */

export function FonteArtistica({
  autor,
  obra,
  children,
}: {
  autor: string;
  obra?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className={styles.fonteArtistica}>
      <div className={styles.fonteTexto}>{children}</div>
      <footer className={styles.fonteRodape}>
        <span className={styles.fonteAutor}>{autor}</span>
        {obra && <span className={styles.fonteObra}>{obra}</span>}
      </footer>
    </blockquote>
  );
}

/* ═══════ Nota do ensaio ═══════ */

export function NotaEnsaio({ children }: { children: React.ReactNode }) {
  return (
    <aside className={styles.notaEnsaio}>
      <span className={styles.notaEnsaioIcone}>※</span>
      <div className={styles.notaEnsaioTexto}>{children}</div>
    </aside>
  );
}