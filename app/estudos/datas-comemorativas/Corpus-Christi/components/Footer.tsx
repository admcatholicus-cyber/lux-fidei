'use client'

const footerLinks = [
  { href: '#top', label: '↑ Voltar ao Topo' },
  { href: '#intro', label: 'Introdução' },
  { href: '#contexto', label: 'Contexto' },
  { href: '#historia', label: 'História' },
  { href: '#teologia', label: 'Teologia' },
  { href: '#liturgia', label: 'Liturgia' },
  { href: '#tomas', label: 'São Tomás' },
  { href: '#procissao', label: 'Procissão' },
  { href: '#tapetes', label: 'Tapetes' },
  { href: '#brasil', label: 'Brasil' },
  { href: '#mundo', label: 'Pelo Mundo' },
  { href: '#homilias', label: 'Homilias' },
  { href: '#simbolos', label: 'Símbolos' },
  { href: '#arte', label: 'Arte' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#data', label: 'Calendário' },
  { href: '#social', label: 'Comunidade' },
  { href: '#oracoes', label: 'Orações' },
  { href: '#curiosidades', label: 'Curiosidades' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-host">☩</div>
        <div className="footer-title">Corpus Christi</div>
        <div className="footer-subtitle">
          Solenidade do Santíssimo Corpo e Sangue de Cristo
        </div>

        <div className="footer-quote">
          <p>
            &quot;Quanto mais perfeita for a vida, mais plenamente
            encontraremos o Senhor na Eucaristia.&quot;
          </p>
          <cite>— São João Paulo II</cite>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-latin">
          <p>
            <em>Tantum ergo Sacramentum veneremur cernui</em>
          </p>
          <p>
            <em>Veneremos, pois, de joelhos, tão grande Sacramento</em>
          </p>
          <p>— São Tomás de Aquino —</p>
        </div>

        <div className="footer-copy">
          <p>Página informativa sobre a Solenidade de Corpus Christi</p>
          <p>
            Conteúdo baseado em fontes históricas, teológicas e litúrgicas
            da Igreja Católica
          </p>

          <p className="footer-fontes">
            <strong>Fontes:</strong> Bíblia de Jerusalém (Paulus) ·
            Catecismo da Igreja Católica · Documentos do Magistério
            (Vatican.va) · São Tomás de Aquino, <em>Summa Theologiae</em> ·
            Concílio de Trento · Miri Rubin, <em>Corpus Christi</em>{' '}
            (Cambridge, 1991)
          </p>

          <p className="footer-nota">
            ⚠️ Página de conteúdo educativo e devocional. Todos os direitos
            dos documentos citados pertencem a seus respectivos autores e à
            Santa Sé.
          </p>
        </div>
      </div>
    </footer>
  )
}