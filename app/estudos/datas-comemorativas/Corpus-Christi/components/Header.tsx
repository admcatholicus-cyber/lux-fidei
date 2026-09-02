'use client'

export default function Header() {
  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <header id="top" className="corpus-hero">
  <div className="corpus-pattern" />
  <div className="corpus-glow" />

  <div className="corpus-inner">
    <div className="corpus-visual" aria-hidden="true">
      <img
        className="corpus-tapete-img"
        src="/estudos/datas-comemorativas/Corpus-Christi/tapete.png"
        alt=""
      />
    </div>

    <div className="corpus-text">
      <div className="corpus-eyebrow">Estudos • Datas Comemorativas</div>

      <h1>Corpus Christi</h1>

      <p className="corpus-subtitle">
        Solenidade do Santíssimo Corpo e Sangue de Cristo
      </p>

      <p className="corpus-latin">
        “Hoc est enim Corpus meum”
        <span> — “Isto é o meu Corpo”</span>
      </p>

      <p className="corpus-lead">
        A Igreja sai às ruas para proclamar, com fé e adoração,
        a presença real de Jesus Cristo na Eucaristia.
      </p>


      <div className="corpus-facts">
        <div>
          <strong>1264</strong>
          <span>Instituição universal</span>
        </div>
        <div>
          <strong>60 dias</strong>
          <span>Após a Páscoa</span>
        </div>
        <div>
          <strong>Procissão</strong>
          <span>Fé pública nas ruas</span>
        </div>
      </div>
    </div>
  </div>

</header>
  )
}