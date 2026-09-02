import layout from '../_styles/layout.module.css';

export default function Footer() {
  return (
    <footer id="rodape" className={layout.rodape}>
      <div className={layout.container}>
        <div className={layout.rodapeConteudo}>
          <div className={layout.rodapeColuna}>
            <div className={layout.rodapeLogo}>
              <i className="fas fa-cross"></i>
              <span>Santidade</span>
            </div>
            <p className={layout.rodapeDescricao}>
              Compêndio teológico completo sobre a santidade na tradição católica. Destinado ao estudo sério e aprofundado.
            </p>
          </div>

          <div className={layout.rodapeColuna}>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#introducao">Introdução</a></li>
              <li><a href="#escrituras">Escrituras</a></li>
              <li><a href="#teologia">Teologia</a></li>
              <li><a href="#magisterio">Magistério</a></li>
              <li><a href="#mistica">Mística</a></li>
            </ul>
          </div>

          <div className={layout.rodapeColuna}>
            <h4>Mais</h4>
            <ul>
              <li><a href="#doutores">Doutores</a></li>
              <li><a href="#filosofia">Filosofia</a></li>
              <li><a href="#santos-modelos">Santos</a></li>
              <li><a href="#objecoes">Objeções</a></li>
              <li><a href="#bibliografia">Bibliografia</a></li>
            </ul>
          </div>
        </div>

        <div className={layout.rodapeInferior}>
          <p>
            <em>«Sede santos, porque Eu, o Senhor vosso Deus, sou Santo»</em> — Lv 19,2
          </p>
          <p className={layout.rodapeAviso}>
            Este compêndio foi elaborado para fins de estudo teológico. Todo o conteúdo está em conformidade com a doutrina católica.
          </p>
          <p>
            Ad Maiorem Dei Gloriam <i className="fas fa-cross"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}