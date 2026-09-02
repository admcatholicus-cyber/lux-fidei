'use client'

import { useState } from 'react'

const faqs = [
  {
    question:
      'Por que Corpus Christi é celebrado numa quinta-feira?',
    answer: [
      'A escolha da quinta-feira é intencional e simbólica: a Última Ceia, na qual Jesus instituiu a Eucaristia, ocorreu numa quinta-feira (a chamada Quinta-feira Santa). Corpus Christi, portanto, é celebrado no mesmo dia da semana em que a Eucaristia foi instituída — mas numa atmosfera de alegria festiva, ao contrário do clima solene e penitencial da Semana Santa.',
    ],
  },
  {
    question:
      'Qual a diferença entre Corpus Christi e a Quinta-feira Santa?',
    answer: [
      'A Quinta-feira Santa celebra a instituição da Eucaristia dentro do contexto da Paixão de Cristo — o tom é de intimidade, solenidade e serviço (lavapés). Corpus Christi celebra a presença real e permanente de Cristo no Sacramento com tom festivo e triunfal, saindo às ruas em procissão. São celebrações complementares.',
    ],
  },
  {
    question:
      'Por que passar sobre o tapete não é desrespeitoso com o sacramento?',
    answer: [
      'O tapete não é o Santíssimo Sacramento — é uma homenagem ao caminho por onde Cristo passará. A tradição é inspirada na entrada de Jesus em Jerusalém, quando a multidão estendeu mantos no caminho. O tapete é destruído pela passagem da procissão justamente porque seu propósito é servir de caminho honroso para Cristo.',
    ],
  },
  {
    question: 'É obrigatório ir à procissão de Corpus Christi?',
    answer: [
      'A participação na Missa é obrigatória em todas as solenidades de preceito, e Corpus Christi é uma delas (sob pena de pecado grave, salvo justa causa). A procissão não é tecnicamente de obrigação canônica, mas é fortemente recomendada como expressão de fé eucarística.',
    ],
  },

  {
    question:
      'Por que os tapetes são feitos se vão ser destruídos?',
    answer: [
      'Precisamente porque são destruídos, os tapetes ganham significado espiritual especial. A efemeridade é parte essencial da mensagem: toda beleza criada por amor a Deus, mesmo que destruída, tem valor eterno. É uma lição sobre a gratuidade do amor — fazemos o bem não para que dure, mas porque amamos.',
    ],
  },
  {
    question: 'Corpus Christi é comemorado apenas por católicos?',
    answer: [
      'Corpus Christi é uma festa exclusivamente católica em sua origem e significado. Algumas igrejas anglicanas de tendência alta também celebram o "Corpo de Cristo". As igrejas protestantes tradicionais não celebram, pois rejeitam a doutrina da Transubstanciação.',
    ],
  },
  {
    question:
      'Qual a origem do nome "Fronleichnam" (alemão para Corpus Christi)?',
    answer: [
      'Fronleichnam vem do alemão medieval: Vron- (do latim Dominus, "Senhor") + Lichnam (corpo). Literalmente significa "Corpo do Senhor" — equivalente exato ao latim Corpus Domini.',
    ],
  },
  {
    question:
      'Como devemos nos comportar durante a procissão de Corpus Christi?',
    answer: [
      'Durante a procissão, a postura deve ser de reverência e devoção:',
    ],
    list: [
      'Participar com recato e silêncio respeitoso',
      'Quando o Santíssimo passa, inclinar-se profundamente ou ajoelhar',
      'Participar dos cânticos e das orações',
      'Vestir-se com decência e modéstia',
      'Desligar ou silenciar o celular',
      'Manter as crianças orientadas sobre o significado da celebração',
      'Quem observa da calçada deve fazer uma reverência ao Santíssimo',
    ],
  },
  {
    question:
      'Quando a Igreja começou a guardar as Hóstias consagradas no sacrário?',
    answer: [
      'Desde os primeiros séculos, as Hóstias eram reservadas para levar a Comunhão aos doentes. O sacrário (tabernáculo), como local fixo na nave da igreja, tornou-se universal a partir da Idade Média, impulsionado pelo crescimento da devoção eucarística — da qual Corpus Christi é expressão máxima.',
    ],
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${isOpen ? 'active' : ''}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span className={`faq-arrow ${isOpen ? 'rotated' : ''}`}>
                ▼
              </span>
            </button>

            <div
              className={`faq-answer ${isOpen ? 'open' : ''}`}
              style={{
                maxHeight: isOpen ? '600px' : '0',
              }}
            >
              {faq.answer.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {faq.list && (
                <ul>
                  {faq.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}