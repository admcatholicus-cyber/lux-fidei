import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const SANTOS = [
  { aspecto: 'Santidade da caridade concreta', nome: 'Santa Dulce dos Pobres', desc: 'Religiosa brasileira, serviu os pobres e enfermos com incansável dedicação. Sua vida mostra que a santidade não é abstração, mas amor que se torna cuidado, presença, alimento, hospitalidade e serviço aos que sofrem.'},
  { aspecto: 'Santidade do silêncio obediente', nome: 'São José', desc: 'Nenhuma palavra sua é registrada nas Escrituras. Sua santidade é toda de obediência silenciosa, trabalho fiel e proteção amorosa. Patrono da Igreja Universal.' },
  { aspecto: 'Santidade da perseverança familiar',nome: 'Santa Mônica', desc: 'Mãe de Santo Agostinho, perseverou durante anos em oração pela conversão do filho. Sua santidade manifesta a força silenciosa da intercessão, da paciência e da esperança dentro da vida familiar.'},
  { aspecto: 'Santidade do desapego radical', nome: 'São Francisco de Assis', desc: 'Despojou-se de tudo para seguir Cristo pobre e crucificado. Recebeu os estigmas. Renovou a Igreja pelo testemunho da pobreza evangélica.' },
  { aspecto: 'Santidade da vida interior', nome: "Santa Teresa d'Ávila", desc: 'Mestra da oração e reformadora do Carmelo. Ensinou que a santidade é intimidade com Deus e se verifica pelas obras e pela humildade.' },
  { aspecto: 'Santidade crucificada', nome: 'São Padre Pio', desc: 'Estigmatizado durante 50 anos, viveu uma santidade marcada pelo sofrimento redentor, pela confissão incansável e pela intercessão poderosa.' },
  { aspecto: 'Santidade no cotidiano', nome: 'São Josemaria Escrivá', desc: 'Fundador do Opus Dei. Ensinou que o trabalho profissional, as relações familiares e as atividades ordinárias são matéria de santificação.' },
  { aspecto: 'Santidade da confiança', nome: 'Santa Faustina Kowalska', desc: 'Apóstola da Divina Misericórdia. Sua santidade baseou-se na confiança ilimitada em Deus e na entrega total à Sua misericórdia.' },
  { aspecto: 'Santidade da pureza', nome: 'Santa Maria Goretti', desc: 'Mártir da pureza aos 11 anos. Preferiu a morte ao pecado e perdoou o assassino no leito de morte.' },
  { aspecto: 'Santidade do amor concreto', nome: 'Santa Teresa de Calcutá', desc: 'Serviu os mais pobres dos pobres nas ruas de Calcutá. Viveu a santidade da caridade concreta, mesmo durante décadas de «noite escura» interior.' },
  { aspecto: 'Santidade da entrega total', nome: 'São Maximiliano Kolbe', desc: 'Ofereceu a vida no lugar de um pai de família em Auschwitz. «Mártir da caridade» — a santidade levada até o dom supremo de si.' },
  { aspecto: 'Santidade juvenil contemporânea', nome: 'Beato Carlo Acutis', desc: 'Adolescente italiano falecido em 2006. Usou a tecnologia para evangelizar e viveu uma santidade feita de Eucaristia, simplicidade e alegria.' },
];

export default function SantosModelos() {
  return (
    <section id="santos-modelos" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo XIII</p>
          <h2 className={layout.secaoTitulo}>Santos como Modelos de Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-star"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>
            Os santos não são meros exemplos morais; são <strong>provas vivas</strong> de que a santidade é possível em qualquer época, cultura, estado de vida e circunstância. São a «exegese viva do Evangelho» (Bento XVI). Cada santo ilumina um <strong>aspecto particular</strong> da santidade:
          </p>

          <h3>Santos que iluminam aspectos da santidade</h3>

          <div className={cards.santosGrid}>
            {SANTOS.map((s) => (
              <div key={s.nome} className={cards.santoCard}>
                <div className={cards.santoAspecto}>{s.aspecto}</div>
                <h4>{s.nome}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}