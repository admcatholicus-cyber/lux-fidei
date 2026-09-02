import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';

export default function IndiceCompleto() {
  return (
    <section id="indice-completo" className={`${layout.secao} ${content.indiceCompleto}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Navegação</p>
          <h2 className={layout.secaoTitulo}>Índice Completo</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-book-open"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.indiceGrid}>
          {/* Parte I */}
          <div className={content.indiceColuna}>
            <h3 className={content.indiceGrupoTitulo}>Parte I — Fundamentos</h3>
            <ol className={content.indiceLista}>
              <li>
                <a href="#introducao">Introdução Geral</a>
              </li>
              <li>
                <a href="#etimologia">Etimologia e Semântica</a>
              </li>
              <li>
                <a href="#escrituras">Santidade nas Sagradas Escrituras</a>
                <ul>
                  <li>
                    <a href="#at-santidade">Antigo Testamento</a>
                  </li>
                  <li>
                    <a href="#nt-santidade">Novo Testamento</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#teologia">Teologia Dogmática da Santidade</a>
                <ul>
                  <li>
                    <a href="#santidade-divina">Santidade de Deus</a>
                  </li>
                  <li>
                    <a href="#santidade-trinitaria">Santidade Trinitária</a>
                  </li>
                  <li>
                    <a href="#santidade-cristo">Santidade de Cristo</a>
                  </li>
                  <li>
                    <a href="#santidade-igreja">Santidade da Igreja</a>
                  </li>
                  <li>
                    <a href="#santidade-graca">Santidade e Graça</a>
                  </li>
                  <li>
                    <a href="#santidade-sacramentos">Santidade e Sacramentos</a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Parte II */}
          <div className={content.indiceColuna}>
            <h3 className={content.indiceGrupoTitulo}>Parte II — Desenvolvimento</h3>
            <ol className={content.indiceLista} start={5}>
              <li>
                <a href="#magisterio">Magistério da Igreja</a>
              </li>
              <li>
                <a href="#patristica">Patrística</a>
              </li>
              <li>
                <a href="#doutores">Doutores da Igreja</a>
              </li>
              <li>
                <a href="#filosofia">Filosofia da Santidade</a>
              </li>
              <li>
                <a href="#mistica">Teologia Mística e Santidade</a>
                <ul>
                  <li>
                    <a href="#via-purgativa">Via Purgativa</a>
                  </li>
                  <li>
                    <a href="#via-iluminativa">Via Iluminativa</a>
                  </li>
                  <li>
                    <a href="#via-unitiva">Via Unitiva</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#moral">Teologia Moral e Santidade</a>
              </li>
            </ol>
          </div>

          {/* Parte III */}
          <div className={content.indiceColuna}>
            <h3 className={content.indiceGrupoTitulo}>Parte III — Aplicação</h3>
            <ol className={content.indiceLista} start={11}>
              <li>
                <a href="#vocacao-universal">Vocação Universal à Santidade</a>
              </li>
              <li>
                <a href="#estados-vida">Santidade nos Estados de Vida</a>
              </li>
              <li>
                <a href="#canonizacao">Processo de Canonização</a>
              </li>
              <li>
                <a href="#santos-modelos">Santos como Modelos</a>
              </li>
              <li>
                <a href="#maria-santidade">Maria Santíssima e a Santidade</a>
              </li>
              <li>
                <a href="#objecoes">Objeções e Respostas</a>
              </li>
              <li>
                <a href="#sintese">Síntese Final</a>
              </li>
              <li>
                <a href="#bibliografia">Bibliografia</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}