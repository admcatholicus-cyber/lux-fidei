"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./batismo.module.css";

/* ============================================================
   TIPOS
   ============================================================ */
interface FaqItem {
  pergunta: string;
  resposta: React.ReactNode;
}

/* ============================================================
   DADOS — FAQ
   ============================================================ */
const faqData: FaqItem[] = [
  {
    pergunta: "Se meu batismo é questionável, posso ser batizado novamente?",
    resposta: (
      <>
        <p>
          Se há dúvida séria e fundamentada sobre a validade do batismo anterior
          (uso de líquido diferente de água, fórmula trinitária ausente, falta
          de intenção), a Igreja admite o <strong>Batismo Condicional</strong>:
        </p>
        <blockquote>
          “Se não és ainda batizado, eu te batizo em nome do Pai, do Filho e do
          Espírito Santo.”
        </blockquote>
        <p>
          Isso reconhece a possível validade anterior enquanto assegura a
          validade presente. Fale com seu pároco para avaliar o caso.
        </p>
      </>
    ),
  },
  {
    pergunta: "Uma criança batizada que morre antes da Confirmação está salva?",
    resposta: (
      <>
        <p>
          Sim, plenamente. O Batismo é completo em si mesmo. A Confirmação
          aprofunda e sela o que o Batismo iniciou, mas não é complementação{" "}
          <em>necessária</em> para a salvação.
        </p>
        <p>
          Uma criança batizada, morta em inocência, é membro pleno da Igreja e
          herdeira da vida eterna (CIC n° 1250).
        </p>
      </>
    ),
  },
  {
    pergunta: "Um leigo pode batizar? O batismo é válido?",
    resposta: (
      <>
        <p>
          Sim — em caso de perigo de morte, qualquer pessoa pode batizar
          validamente (CIC c. 861 §2):
        </p>
        <ul>
          <li>Use água natural (não sumo, não leite)</li>
          <li>Derrame sobre a cabeça</li>
          <li>
            Diga simultaneamente:{" "}
            <em>“Eu te batizo em nome do Pai, do Filho e do Espírito Santo”</em>
          </li>
          <li>Tenha intenção de fazer o que a Igreja faz</li>
        </ul>
        <p>
          Se a pessoa sobreviver, o batismo de emergência deve ser notificado à
          paróquia para registro e celebração dos demais ritos.
        </p>
      </>
    ),
  },
  {
    pergunta: "O batismo protestante é reconhecido pela Igreja Católica?",
    resposta: (
      <>
        <p>
          Em geral sim, se realizado com validade. A Igreja reconhece batismos
          de outras denominações se:
        </p>
        <ul>
          <li>Usou-se água natural</li>
          <li>Invocou-se a Santíssima Trindade (Pai, Filho e Espírito Santo)</li>
          <li>Havia intenção de fazer o que o Batismo cristão faz</li>
        </ul>
        <p>
          Exceção: denominações que negam a Trindade (ex.: Testemunhas de Jeová,
          Mórmons) têm batismos considerados inválidos pela Igreja Católica.
        </p>
      </>
    ),
  },
  {
    pergunta: "Posso batizar em casa ou é obrigatório na igreja?",
    resposta: (
      <>
        <p>
          Ordinariamente, o Batismo deve ser celebrado na Igreja paroquial, na
          pia batismal consagrada, em celebração comunitária (CIC c. 857).
        </p>
        <p>
          Em perigo de morte iminente, qualquer lugar é válido e necessário.
          Para outras situações excepcionais, é preciso licença do ordinário
          local.
        </p>
      </>
    ),
  },
  {
    pergunta: "Qual é a diferença entre imersão, aspersão e infusão?",
    resposta: (
      <>
        <p>São os três modos válidos de administrar o Batismo (CIC c. 854):</p>
        <ul>
          <li>
            <strong>Imersão:</strong> o batizando é submerso na água —
            simbolismo mais rico da morte e ressurreição
          </li>
          <li>
            <strong>Infusão:</strong> água é derramada sobre a cabeça — forma
            mais comum no Ocidente
          </li>
          <li>
            <strong>Aspersão:</strong> água é aspergida sobre a pessoa — menos
            comum, reservada a situações especiais
          </li>
        </ul>
        <p>Todos são válidos.</p>
      </>
    ),
  },
  {
    pergunta: "O Batismo cancela se a pessoa deixa a fé?",
    resposta: (
      <>
        <p>
          Não. O caráter batismal é <strong>indelével</strong> — permanece para
          sempre, independentemente de qualquer ato humano posterior (CIC n°
          1272).
        </p>
        <p>
          Quem abandona a fé permanece batizado ontologicamente. Por isso, ao
          retornar à Igreja após apostasia, não se administra novo batismo —
          faz-se apenas a reconciliação sacramental (Confissão).
        </p>
      </>
    ),
  },
  {
    pergunta: "Quando devo renovar meus votos batismais?",
    resposta: (
      <>
        <p>
          A renovação pública mais solene é na <strong>Vigília Pascal</strong>.
          Além disso, é espiritualmente fecundo renovar os votos:
        </p>
        <ul>
          <li>No aniversário do próprio Batismo</li>
          <li>Na recepção da Crisma e Eucaristia</li>
          <li>No dia do Casamento</li>
          <li>Em retiros espirituais e momentos de conversão</li>
          <li>Pessoalmente, sempre que sentir o chamado a reafirmar a fé</li>
        </ul>
      </>
    ),
  },
];

/* ============================================================
   DADOS — ÍNDICE
   ============================================================ */
const indiceLinks: [string, string][] = [
  ["introducao", "Introdução"],
  ["teologia", "Teologia"],
  ["historia", "História"],
  ["biblia", "Bíblia"],
  ["tipos", "Tipos"],
  ["rito", "Rito"],
  ["efeitos", "Efeitos"],
  ["santos", "Santos"],
  ["pratica", "Prática"],
  ["faq", "FAQ"],
  ["fontes", "Fontes"],
];

/* ============================================================
   DADOS — INFO ESSENCIAIS
   ============================================================ */
const dadosEssenciais: [string, string][] = [
  ["Nome", "Do grego baptizein — imergir"],
  ["Tipo", "Sacramento da Iniciação Cristã"],
  ["Necessidade", "Absolutamente necessário"],
  ["Matéria", "Água natural"],
  ["Forma", "Invocação da Santíssima Trindade"],
  ["Ministro ordinário", "Bispo ou Padre"],
  ["Ministro extraordinário", "Diácono ou Leigo"],
  ["Efeito", "Caráter indelével — não se repete"],
  ["Referência", "CIC nn. 1213–1284"],
];

/* ============================================================
   DADOS — FONTES
   ============================================================ */
const fontes: [string, string][] = [
  ["Catecismo da Igreja Católica", "Nn. 1213–1284 (Sobre o Batismo)"],
  ["Código de Direito Canônico", "Cânones 849–878"],
  ["Sacrosanctum Concilium", "Constituição sobre a Liturgia, Vaticano II"],
  ["Summa Theologiae", "Santo Tomás de Aquino, III, qq. 66–71"],
  ["Didaché", "Capítulo VII — O Batismo (~100 d.C.)"],
  ["Catequeses Mistagógicas", "São Cirilo de Jerusalém (séc. IV)"],
  ["De Baptismo", "Santo Agostinho de Hipona"],
  ["Catequeses Batismais", "São João Crisóstomo"],
  ["Concílio de Trento", "Sessão VII — Decreto sobre os Sacramentos (1547)"],
  ["Concílio de Florença", "Decreto para os Armênios (1439)"],
  ["Lumen Gentium", "Nn. 7, 11 — Vaticano II"],
  ["Audiência Geral — Bento XVI", "Série sobre os sacramentos, 2012"],
];

/* ============================================================
   COMPONENTE FAQ ITEM
   ============================================================ */
function FaqItemComponent({ item }: { item: FaqItem }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqPergunta}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
      >
        <h4>{item.pergunta}</h4>
        <span
          className={`${styles.faqSeta} ${aberto ? styles.faqSetaAberta : ""}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`${styles.faqResposta} ${
          aberto ? styles.faqRespostaAberta : ""
        }`}
      >
        {item.resposta}
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTE PRINCIPAL
   ============================================================ */
export default function BatismoPage() {
  const [indiceAberto, setIndiceAberto] = useState(false);
  const [navEscondida, setNavEscondida] = useState(false);
  const ultimoScroll = useRef(0);

  /* ---------- auto-hide navbar ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollAtual =
        window.pageYOffset || document.documentElement.scrollTop;

      if (indiceAberto) {
        ultimoScroll.current = scrollAtual;
        return;
      }

      if (scrollAtual <= 80) {
        setNavEscondida(false);
        ultimoScroll.current = scrollAtual;
        return;
      }

      setNavEscondida(scrollAtual > ultimoScroll.current);
      ultimoScroll.current = scrollAtual;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [indiceAberto]);

  /* ---------- fechar índice ao clicar fora ---------- */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById("indiceMenu");
      const btn = document.getElementById("btnIndice");
      if (
        menu &&
        btn &&
        !menu.contains(e.target as Node) &&
        !btn.contains(e.target as Node)
      ) {
        setIndiceAberto(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndiceAberto(false);
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  /* ---------- IntersectionObserver para animações ---------- */
  useEffect(() => {
    const seletores = [
      `.${styles.cardTeologia}`,
      `.${styles.bibliaCard}`,
      `.${styles.efeitoCard}`,
      `.${styles.santoCard}`,
      `.${styles.passo}`,
      `.${styles.timelineItem}`,
      `.${styles.tipoCard}`,
      `.${styles.fonteItem}`,
    ].join(", ");

    const elements = document.querySelectorAll(seletores);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visivel);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- scroll suave com offset ---------- */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setIndiceAberto(false);
  };

  /* ======================================================
     RENDER
     ====================================================== */
  return (
    <div className={styles.body}>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`${styles.indiceRapido} ${
          navEscondida ? styles.indiceRapidoEscondida : ""
        }`}
        id="navPrincipal"
      >
        <div className={styles.navContainer}>
          <Link href="/estudos" className={styles.btnVoltar}>
            <span>&#8592;</span>
            <span className={styles.btnVoltarTexto}>Voltar</span>
          </Link>

          <button
            id="btnIndice"
            className={`${styles.indiceBtn} ${
              indiceAberto ? styles.indiceBtnAberto : ""
            }`}
            onClick={() => setIndiceAberto((v) => !v)}
            aria-label="Abrir índice"
          >
            {indiceAberto ? "✕" : "☰"} Índice
          </button>

          <div
            id="indiceMenu"
            className={`${styles.indiceMenu} ${
              indiceAberto ? styles.indiceMenuAberto : ""
            }`}
          >
            {indiceLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => scrollTo(id)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== INTRODUÇÃO ===== */}
      <section className={styles.estudoSection} id="introducao">
        <div className={styles.heroEstudo}>
          <h2>💧 O Batismo</h2>
          <p className={styles.subtituloPrincipal}>
            O Sacramento da Nova Vida em Cristo
          </p>
          <blockquote className={styles.citacaoInicio}>
            “Quem crer e for batizado será salvo;
            <br />
            quem não crer será condenado.”
            <br />
            <strong>— Marcos 16:16</strong>
          </blockquote>
        </div>

        <div className={styles.conteudoFlexivel}>
          <div className={styles.textoPrincipal}>
            <p>
              O Batismo é o <strong>primeiro dos sete sacramentos</strong> — a
              porta solene de entrada para a vida cristã. Não é um ritual
              meramente simbólico ou tradição cultural, mas um{" "}
              <strong>sinal eficaz</strong> pelo qual Cristo age diretamente:
              lava o pecado, incorpora à Sua Igreja e inicia a santificação da
              alma.
            </p>
            <p>
              Desde os primórdios da fé, o Batismo foi reconhecido como{" "}
              <strong>absolutamente necessário para a salvação</strong> — salvo
              nos casos extraordinários de Batismo de Sangue ou de Desejo.
            </p>
            <div className={styles.caixaDestaque}>
              <h4>⚡ O Batismo em uma frase</h4>
              <p>
                Sacramento de purificação, incorporação e santificação: remissão
                de todos os pecados, morte e ressurreição em Cristo, e
                nascimento como filho adotivo de Deus e membro vivo da Igreja.
              </p>
            </div>
          </div>

          <div className={styles.infoDestaque}>
            <h4>Dados Essenciais</h4>
            <ul>
              {dadosEssenciais.map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TEOLOGIA ===== */}
      <section className={styles.estudoSection} id="teologia">
        <h3>🎯 A Teologia Profunda do Batismo</h3>

        {[
          {
            titulo: "🔄 Morte e Ressurreição em Cristo",
            texto:
              "O Batismo não é limpeza externa — é morte sacramental e ressurreição espiritual. São Paulo expõe isso com clareza insuperável:",
            citacao: `“Ou vocês não sabem que todos nós, que fomos batizados em Cristo Jesus, fomos batizados em sua morte? Fomos, portanto, sepultados com Ele pelo Batismo em sua morte, a fim de que, assim como Cristo foi ressuscitado dos mortos pela glória do Pai, assim também nós andemos em novidade de vida.”`,
            ref: "— Romanos 6:3-4",
            texto2:
              "Assim como Cristo desceu à morte e ressuscitou glorioso, o batizado desce às águas — símbolo do sepulcro — e emerge para vida nova e imperecível em Cristo.",
          },
          {
            titulo: "🌳 Incorporação ao Corpo de Cristo",
            texto:
              "O Batismo não é salvação puramente individual — é incorporação ao Corpo Místico que é a Igreja:",
            citacao: `“Pois em um só Espírito todos nós fomos batizados para formar um só corpo, quer judeus, quer gregos, quer escravos, quer livres.”`,
            ref: "— 1 Coríntios 12:13",
            texto2: `O batizado não é apenas “salvo” — é inserido vivo numa comunidade sacramental, partilhando a mesma Eucaristia, os mesmos sacramentos, a mesma fé apostólica.`,
          },
          {
            titulo: "👑 Filiação Divina Adotiva",
            texto:
              "Pelo Batismo, somos feitos filhos adotivos de Deus — não servos, mas herdeiros:",
            citacao: `“Porque todos sois filhos de Deus pela fé em Cristo Jesus. Pois quantos de vós foram batizados em Cristo, vos revestistes de Cristo.”`,
            ref: "— Gálatas 3:26-27",
            texto2:
              "O batizado não é mais escravo do pecado ou do inimigo — é filho do Rei dos Céus, com direito à herança da vida eterna.",
          },
          {
            titulo: "✨ Infusão de Graça Santificante",
            texto:
              "O Batismo confere graça santificante — não apenas perdão, mas infusão de vida divina:",
            citacao: `“O Batismo não só perdoa os pecados, mas faz de nós ‘nova criatura’ (2Cor 5,17), filhos adotivos de Deus (Gal 4,5-7), ‘partícipes da natureza divina’ (2Pd 1,4).”`,
            ref: "— Catecismo da Igreja Católica, n° 1265",
            texto2:
              "O batizado sai das águas já santificado, não apenas absolvido. Recebe as virtudes teologais (fé, esperança, caridade) e os sete dons do Espírito Santo.",
          },
        ].map((card) => (
          <div key={card.titulo} className={styles.cardTeologia}>
            <h4>{card.titulo}</h4>
            <p>{card.texto}</p>
            <blockquote className={styles.citacaoCard}>
              {card.citacao}
              <br />
              <strong>{card.ref}</strong>
            </blockquote>
            <p>{card.texto2}</p>
          </div>
        ))}
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section className={styles.estudoSection} id="historia">
        <h3>📜 História do Batismo na Tradição da Igreja</h3>
        <div className={styles.timeline}>
          {[
            {
              ano: "~30 d.C.",
              titulo: "O Batismo de Jesus no Jordão",
              texto:
                "Cristo desce às águas do Jordão e as santifica para sempre. Embora sem pecado, Jesus consagra o elemento água como veículo de graça. Neste instante, a Santíssima Trindade se manifesta plenamente.",
            },
            {
              ano: "~33 d.C.",
              titulo: "Pentecostes — A Igreja Batiza",
              texto:
                "Pedro prega e 3.000 pessoas são batizadas em um único dia (At 2:38-41). O Batismo se torna imediatamente a resposta sacramental ao anúncio do Evangelho.",
            },
            {
              ano: "Séc. I–III",
              titulo: "Didaché e Padres Apostólicos",
              texto:
                "A Didaché (~100 d.C.) já descreve o rito com detalhes: instrução prévia, jejum, preferência por água corrente. A tradição batismal estava estabelecida desde os apóstolos.",
            },
            {
              ano: "Séc. II–V",
              titulo: "Grandes Padres Desenvolvem a Teologia",
              texto:
                "Justino Mártir, Tertuliano, Cirilo de Jerusalém, Ambrósio, Agostinho e Crisóstomo escrevem tratados sobre o Batismo. Consenso unânime: graça real, necessidade absoluta, caráter indelével.",
            },
            {
              ano: "1439",
              titulo: "Concílio de Florença",
              texto:
                "Define com precisão canônica o Batismo como primeiro dos sete sacramentos, sua matéria (água), forma (Trindade) e efeitos.",
            },
            {
              ano: "1545–1563",
              titulo: "Concílio de Trento",
              texto:
                "Contra os que negavam a eficácia sacramental, Trento define: o Batismo confere graça real e verdadeira, foi instituído por Cristo, e é absolutamente necessário para a salvação.",
            },
            {
              ano: "1962–1965",
              titulo: "Concílio Vaticano II",
              texto:
                "Reafirma a doutrina tradicional e aprofunda o caráter comunitário do sacramento: o batizado é incorporado ao Povo de Deus vivo e missionário.",
            },
            {
              ano: "1983",
              titulo: "Código de Direito Canônico",
              texto:
                "Cânones 849–878 codificam: batismo de emergência por leigos, reconhecimento de batismos válidos de outras denominações, e procedimentos para verificar a validade.",
            },
          ].map((item) => (
            <div key={item.ano} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.ano}>{item.ano}</span>
              </div>
              <div className={styles.timelineConteudo}>
                <h4>{item.titulo}</h4>
                <p>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BÍBLIA ===== */}
      <section className={styles.estudoSection} id="biblia">
        <h3>📖 A Palavra de Deus sobre o Batismo</h3>
        <div className={styles.bibliaGrid}>
          {[
            {
              ref: "💧 João 3:5",
              cit: `“Quem não renascer da água e do Espírito Santo não pode entrar no Reino de Deus.”`,
              exp: `Necessidade absoluta. “Não pode” — não é conselho, é condição.`,
            },
            {
              ref: "🌍 Mateus 28:19",
              cit: `“Ide e fazei discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo.”`,
              exp: "Mandamento apostólico. O Batismo é o centro da missão universal da Igreja.",
            },
            {
              ref: "🕊️ Atos 2:38",
              cit: `“Arrependei-vos e sede batizados em nome de Jesus Cristo, para remissão dos pecados; e recebereis o dom do Espírito Santo.”`,
              exp: "Duplo efeito: remissão dos pecados e dons do Espírito.",
            },
            {
              ref: "⚓ 1 Pedro 3:21",
              cit: `“O batismo agora vos salva — não como remoção de impureza do corpo, mas como apelo de uma boa consciência a Deus.”`,
              exp: "Causa de salvação. Não cerimônia externa — ato interior e sacramental.",
            },
            {
              ref: "🌊 Tito 3:5",
              cit: `“Ele nos salvou mediante o banho de regeneração e de renovação pelo Espírito Santo.”`,
              exp: `Regeneração real. “Banho” — imagem direta do Batismo como nascimento novo.`,
            },
            {
              ref: "🔐 Atos 8:36-38",
              cit: `“Disse o eunuco: Eis aqui água; que impede que eu seja batizado? E Filipe disse: Se crês de todo o coração, é lícito.”`,
              exp: "Fé e Batismo inseparáveis. A fé precede, o Batismo sela.",
            },
          ].map((b) => (
            <div key={b.ref} className={styles.bibliaCard}>
              <h4>{b.ref}</h4>
              <blockquote>{b.cit}</blockquote>
              <p>{b.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIPOS ===== */}
      <section className={styles.estudoSection} id="tipos">
        <h3>🌊 Os Três Tipos de Batismo</h3>
        <div className={styles.tiposContainer}>
          <div className={`${styles.tipoCard} ${styles.tipoAgua}`}>
            <h4>💧 Batismo de Água — Sacramental</h4>
            <p>
              O caminho ordinário e necessário. Imersão ou aspersão de água
              natural com invocação da Santíssima Trindade. Confere todos os
              efeitos sacramentais.
            </p>
            <div className={styles.detalhes}>
              <p>
                <strong>Elementos essenciais:</strong>
              </p>
              <ul>
                <li>Matéria: água natural pura</li>
                <li>
                  Forma: “Eu te batizo em nome do Pai, do Filho e do Espírito
                  Santo”
                </li>
                <li>Intenção: fazer o que a Igreja faz</li>
                <li>Disposição: fé e arrependimento (se adulto)</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.tipoCard} ${styles.tipoSangue}`}>
            <h4>⚔️ Batismo de Sangue — Martírio</h4>
            <p>
              Quem sofre morte <strong>por ódio à fé cristã</strong>, recusando
              apostatar, é batizado pelo próprio sangue. Produz todos os efeitos
              do Batismo de Água.
            </p>
            <div className={styles.detalhes}>
              <p>
                <strong>Condições:</strong>
              </p>
              <ul>
                <li>Morte por testemunho da fé cristã</li>
                <li>Não exige ser católico formalmente</li>
                <li>Exemplos: mártires dos primeiros séculos</li>
                <li>Fundamentado em Mt 10:32 e Ap 7:14</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.tipoCard} ${styles.tipoDesejo}`}>
            <h4>💭 Batismo de Desejo</h4>
            <p>
              Para quem deseja sinceramente o Batismo mas morre antes de
              recebê-lo, ou vive em <strong>ignorância invencível</strong> da
              necessidade do sacramento.
            </p>
            <div className={styles.detalhes}>
              <p>
                <strong>Condições:</strong>
              </p>
              <ul>
                <li>Desejo explícito ou implícito de Deus</li>
                <li>Contrição perfeita (se adulto pecador)</li>
                <li>Ignorância invencível da Igreja Católica</li>
                <li>Ex.: catecúmeno morto antes do batismo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.caixaImportante}>
          <h4>⚠️ Nota Doutrinária — CIC n° 1257-1261</h4>
          <p>
            É o{" "}
            <strong>
              Batismo de Água que a Igreja ordena como caminho ordinário
            </strong>
            . Os batismos de Sangue e Desejo são provisões divinas para casos
            excepcionais — não substituem a graça sacramental plena do Batismo
            de Água. A ninguém é lícito desprezar o Batismo sacramental
            baseando-se nessas exceções.
          </p>
        </div>
      </section>

      {/* ===== RITO ===== */}
      <section className={styles.estudoSection} id="rito">
        <h3>🎭 O Rito Batismal — Passo a Passo</h3>
        <p className={styles.introRito}>
          O Batismo Solene — especialmente na Vigília Pascal — segue um ritual
          antigo e profundo. Cada gesto carrega séculos de fé e significado
          teológico.
        </p>
        <div className={styles.ritoPassos}>
          {[
            {
              n: 1,
              titulo: "Bênção e Consagração da Água",
              desc: "A água é exorcizada e consagrada com oração solene. Invoca-se o Espírito Santo sobre ela, tornando-a veículo eficaz da graça divina.",
            },
            {
              n: 2,
              titulo: "Renúncia a Satanás",
              desc: "O batizando (ou pais/padrinhos) renuncia solenemente a Satanás, a todas as suas obras e seduções. É uma ruptura formal e sacramental com o reino das trevas.",
            },
            {
              n: 3,
              titulo: "Profissão de Fé",
              desc: "Segue-se a adesão a Cristo e a profissão do Credo Apostólico. O Batismo nasce da fé — primeiro se crê, depois se batiza.",
            },
            {
              n: 4,
              titulo: "Unção com Óleo dos Catecúmenos",
              desc: "Um óleo consagrado fortalece o batizando antes da imersão — como um atleta ungido para o combate espiritual.",
            },
            {
              n: 5,
              titulo: "A Imersão ou Aspersão — O Coração do Sacramento",
              desc: `O ministro derrama água sobre a cabeça pronunciando: “Eu te batizo em nome do Pai, do Filho e do Espírito Santo.” Neste instante, o batizado morre para o pecado e ressuscita em Cristo.`,
            },
            {
              n: 6,
              titulo: "Unção com Santo Crisma",
              desc: `O Crisma unge a testa. O batizando se torna “Christus” — o Ungido. Sinal de participação no sacerdócio, profecia e realeza de Cristo.`,
            },
            {
              n: 7,
              titulo: "Imposição da Veste Branca",
              desc: `Símbolo poderoso: o batizado reveste a inocência de Cristo. “Revestistes de Cristo” (Gl 3,27) — a veste branca anuncia que a alma está agora sem mancha.`,
            },
            {
              n: 8,
              titulo: "Entrega da Vela Acesa",
              desc: "A vela é acesa da Vela Pascal. O batizado é agora luz do mundo em Cristo. Muitas famílias guardam essa vela por toda a vida.",
            },
            {
              n: 9,
              titulo: "Apresentação à Comunidade",
              desc: "O batizado é apresentado à assembleia reunida. Não é ato privado — é entrada pública num Corpo vivo. A Igreja inteira o recebe como membro novo.",
            },
          ].map((p) => (
            <div key={p.n} className={styles.passo}>
              <div className={styles.numeroPasso}>{p.n}</div>
              <div className={styles.descricaoPasso}>
                <h4>{p.titulo}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.notaRito}>
          <strong>📌 Nota Litúrgica:</strong> O Rito Ordinário (pós-1969) e o
          Rito Extraordinário (Forma Tridentina) diferem em detalhes — o rito
          tradicional mantém mais exorcismos. Ambos são plenamente válidos e
          lícitos.
        </div>
      </section>

      {/* ===== EFEITOS ===== */}
      <section className={styles.estudoSection} id="efeitos">
        <h3>✨ Os Efeitos Espirituais do Batismo</h3>
        <div className={styles.efeitosGrid}>
          {[
            {
              icone: "🔄",
              titulo: "Remissão Total dos Pecados",
              desc: "Lava o pecado original, todos os pecados pessoais (se adulto) e toda pena devida.",
              detalhe: "A alma sai das águas sem mancha alguma diante de Deus.",
            },
            {
              icone: "👑",
              titulo: "Filiação Divina",
              desc: `Torna-se filho adotivo de Deus. O batizado pode chamar Deus de “Abba, Pai”.`,
              detalhe: "Herdeiro do Reino dos Céus — não servo, mas filho.",
            },
            {
              icone: "⛪",
              titulo: "Incorporação à Igreja",
              desc: "Membro vivo do Corpo de Cristo, com acesso a todos os sacramentos e graças da Igreja.",
              detalhe: "Participa da comunhão dos santos vivos e defuntos.",
            },
            {
              icone: "✨",
              titulo: "Graça Santificante",
              desc: "Infusão de vida divina — a alma torna-se templo vivo do Espírito Santo.",
              detalhe: "Não apenas perdão: transformação ontológica real.",
            },
            {
              icone: "🎁",
              titulo: "Virtudes Teologais",
              desc: "Fé, Esperança e Caridade são infundidas — capacidades sobrenaturais.",
              detalhe: "Dons permanentes que sustentam toda a vida cristã.",
            },
            {
              icone: "🕊️",
              titulo: "Sete Dons do Espírito",
              desc: "Sabedoria, Entendimento, Conselho, Fortaleza, Ciência, Piedade e Temor de Deus.",
              detalhe: "Atuam conforme a abertura e cooperação do batizado.",
            },
            {
              icone: "🔐",
              titulo: "Caráter Indelével",
              desc: "Marca permanente e irrepetível na alma — pertença a Cristo que nenhum pecado apaga.",
              detalhe: "Por isso o Batismo jamais se repete.",
            },
            {
              icone: "🚪",
              titulo: "Acesso aos Sacramentos",
              desc: "O Batismo abre a porta para todos os demais sacramentos.",
              detalhe: "Sem Batismo, nenhum outro sacramento pode ser recebido.",
            },
          ].map((e) => (
            <div key={e.titulo} className={styles.efeitoCard}>
              <span className={styles.efeitoIcone}>{e.icone}</span>
              <h4>{e.titulo}</h4>
              <p>{e.desc}</p>
              <p className={styles.detalhe}>
                <em>{e.detalhe}</em>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SANTOS ===== */}
      <section className={styles.estudoSection} id="santos">
        <h3>🙏 Vozes dos Santos e Doutores da Igreja</h3>
        <div className={styles.avisoCitacao}>
          As citações abaixo refletem fielmente o pensamento dos autores
          indicados, mas algumas são sínteses doutrinárias ou adaptações de seus
          escritos, não necessariamente transcrições literais. Para citação
          acadêmica, consulte as obras originais referenciadas na seção de
          Fontes.
        </div>
        <p className={styles.introSantos}>
          Ao longo de dois milênios, os maiores espíritos da Igreja contemplaram
          o mistério do Batismo e nos legaram luzes preciosas.
        </p>
        <div className={styles.santosGrid}>
          {[
            {
              nome: "✝️ Santo Agostinho (354–430)",
              cit: "O Batismo não é só o perdão dos pecados: é a morte do homem velho e o nascimento do homem novo. Quem foi batizado, morreu; quem morreu em Cristo, viverá para sempre.",
              nota: "Síntese a partir de De Baptismo e In Ioannem — Agostinho insistia na transformação ontológica real do batizado.",
            },
            {
              nome: "🕯️ São João Crisóstomo (347–407)",
              cit: "A pia batismal é ao mesmo tempo sepulcro e mãe: nela enterramos o homem velho e dali nasce o homem novo, gerado pelo Espírito Santo.",
              nota: "Síntese das Catequeses Batismais — imagem clássica da pia como útero e túmulo.",
            },
            {
              nome: "📖 Santo Cirilo de Jerusalém (313–386)",
              cit: "Descestes nas águas, portadores do pecado, e subistes portadores da graça.",
              nota: "Das Catequeses Mistagógicas — Cirilo ensinava os recém-batizados na semana após a Páscoa.",
            },
            {
              nome: "⛪ Santo Tomás de Aquino (1225–1274)",
              cit: "O Batismo é a porta dos sacramentos e a porta do Reino. Sem ele, os outros sacramentos não podem ser recebidos nem a salvação alcançada.",
              nota: "Síntese de Summa Theologiae, III, q. 66 — matéria + forma + intenção = eficácia ex opere operato.",
            },
            {
              nome: "🔥 São Cirilo de Alexandria (376–444)",
              cit: "Pelo Batismo somos chamados a participar da natureza divina. Esta é a grandeza do dom: não apenas o perdão, mas a participação na vida do próprio Deus.",
              nota: "Síntese de Commentarii in Ioannem — ênfase na theosis já iniciada no Batismo.",
            },
            {
              nome: "💫 São João Paulo II (1920–2005)",
              cit: "O Batismo é o fundamento de toda a vida cristã. Nele nos tornamos filhos de Deus, membros de Cristo e templos do Espírito Santo.",
              nota: "Inspirado no Catecismo da Igreja Católica — sempre insistia na dignidade baptismal.",
            },
            {
              nome: "🕊️ Papa Bento XVI (1927–2022)",
              cit: "Somente quando compreendemos que o Batismo nos insere no mistério pascal de Cristo — Sua morte e ressurreição — entendemos quem somos como cristãos.",
              nota: "Tema recorrente em suas homilias da Vigília Pascal.",
            },
            {
              nome: "🌟 Papa Francisco (1936–)",
              cit: "O Batismo nos faz membros do Corpo de Cristo e do povo de Deus. Não é um ato privado — é ato de Igreja, nascimento numa família e numa missão.",
              nota: "Tema das catequeses sobre os sacramentos (2014) — dimensão comunitária e missionária.",
            },
          ].map((s) => (
            <div key={s.nome} className={styles.santoCard}>
              <h4>{s.nome}</h4>
              <blockquote>“{s.cit}”</blockquote>
              <p className={styles.notaSanto}>{s.nota}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRÁTICA ===== */}
      <section className={styles.estudoSection} id="pratica">
        <h3>🎯 O Batismo na Prática Cristã</h3>

        <div className={styles.praticaBloco}>
          <h4>👶 Batismo Infantil versus Batismo de Adultos</h4>
          <p>
            A Igreja Católica pratica e valoriza ambos como legítimos e plenos.
          </p>
          <div className={styles.comparacao}>
            <div className={styles.itemComparacao}>
              <h5>🍼 Batismo Infantil</h5>
              <ul>
                {[
                  "Atestado na Igreja desde o séc. II",
                  "Fé da família e da comunidade eclesial",
                  "Remove pecado original imediatamente",
                  "Inserção na comunidade desde o início",
                  "Exige formação cristã posterior",
                  "Base: CIC n° 1250–1252",
                ].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className={styles.itemComparacao}>
              <h5>👨 Batismo de Adultos (RICA)</h5>
              <ul>
                {[
                  "Processo catecumenal de iniciação",
                  "Fé pessoal, consciente e livre",
                  "Remove pecado original e pessoais",
                  "Conversão explícita e deliberada",
                  "Celebrado preferencialmente na Vigília Pascal",
                  "Base: CIC n° 1247–1249",
                ].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.praticaBloco}>
          <h4>🛁 Preparando o Batismo de uma Criança</h4>
          <div className={styles.listaPratica}>
            {[
              {
                titulo: "1 — Escolha de Padrinhos com Critério",
                desc: "Padrinhos são responsáveis espirituais da criança perante Deus e a Igreja. O Direito Canônico (c. 874) exige: batizados, confirmados, praticantes, de vida exemplar e com mais de 16 anos.",
              },
              {
                titulo: "2 — Catequese Familiar Prévia",
                desc: "A paróquia normalmente exige ao menos um encontro de preparação. A família inteira deve compreender: não é festejo social, é sacramento.",
              },
              {
                titulo: "3 — Guardar a Vela Batismal",
                desc: "A vela acesa no Batismo acompanha toda a vida. Acenda-a na Crisma, no Casamento, nos aniversários de fé.",
              },
              {
                titulo: "4 — Participar Atentamente da Liturgia",
                desc: "Não vá como espectador. Renuncie ao pecado quando solicitado. É ato sacramental, não espetáculo fotográfico.",
              },
              {
                titulo: "5 — Cuidado com o Nome Batismal",
                desc: "A tradição católica recomenda nomear a criança com um santo patrono (CIC c. 855). Esse santo será intercessor e modelo para a vida inteira.",
              },
            ].map((i) => (
              <div key={i.titulo} className={styles.itemLista}>
                <strong>{i.titulo}</strong>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.praticaBloco}>
          <h4>🕯️ Vivendo o Batismo ao Longo da Vida</h4>
          <div className={styles.listaPratica}>
            {[
              {
                titulo: "Renovação dos Votos Batismais — Vigília Pascal",
                desc: "A Igreja inteira renova seus votos batismais a cada Páscoa. É o momento mais solene do ano litúrgico para recordar quem somos.",
              },
              {
                titulo: "Celebrar o Aniversário do Batismo",
                desc: `Seu “segundo nascimento” merece tanta memória quanto o primeiro. Comemore com uma Missa votiva ou acendendo a vela batismal em família.`,
              },
              {
                titulo: "A Água Benta como Memória Diária",
                desc: "Benzer-se com água benta ao entrar numa Igreja é gesto de memória batismal. Não é superstição, é teologia vivida.",
              },
              {
                titulo: "Exercer a Vocação Batismal Missionária",
                desc: "Todo batizado é sacerdote, profeta e rei (CIC n° 1268). Ofereça a Deus o próprio dia, anuncie o Evangelho com a vida, e sirva ao próximo.",
              },
            ].map((i) => (
              <div key={i.titulo} className={styles.itemLista}>
                <strong>{i.titulo}</strong>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.praticaBloco}>
          <h4>⚡ Nota para os Fiéis da Renovação Carismática</h4>
          <p>
            A experiência do “Batismo no Espírito Santo” é reconhecida pela
            Igreja como graça espiritual autêntica e preciosa. Contudo,
            teologicamente ela <strong>não é um sacramento distinto</strong>: é
            uma <em>atualização vivencial</em> dos dons já conferidos
            sacramentalmente no Batismo.
          </p>
          <blockquote className={styles.citacaoCarismatica}>
            “Os dons do Espírito Santo são dados no Batismo e na Confirmação. O
            que a experiência carismática realiza é despertar, ativar e
            manifestar conscientemente aquilo que o Espírito já havia infundido
            sacramentalmente.”
            <br />— Síntese doutrinal a partir do CIC nn. 798–801 e 1266
          </blockquote>
        </div>

        <div className={styles.praticaBloco}>
          <h4>👑 Nota para os Fiéis de Tradição Litúrgica</h4>
          <p>
            O Rito Extraordinário do Batismo (Forma Tridentina) é totalmente
            válido e lícito. Distingue-se pelo maior número de exorcismos e a
            ênfase explícita no combate espiritual.
          </p>
          <blockquote className={styles.citacaoTradicional}>
            “No rito tradicional, cada gesto, cada exorcismo e cada unção
            declara a gravidade do que acontece: Cristo arranca uma alma das
            trevas e a consagra à luz.”
          </blockquote>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.estudoSection} id="faq">
        <h3>❓ Perguntas Frequentes</h3>
        <div className={styles.faqContainer}>
          {faqData.map((item, i) => (
            <FaqItemComponent key={i} item={item} />
          ))}
        </div>
      </section>

      {/* ===== FONTES ===== */}
      <section className={styles.estudoSection} id="fontes">
        <h3>📚 Fontes e Referências</h3>
        <div className={styles.fontesSection}>
          <h4>📖 Fontes Primárias e Documentos da Igreja</h4>
          <div className={styles.fontesGrid}>
            {fontes.map(([titulo, sub]) => (
              <div key={titulo} className={styles.fonteItem}>
                <strong>{titulo}</strong>
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONCLUSÃO ===== */}
      <section className={styles.conclusao} id="conclusao">
        <h3>🕊️ Conclusão — O Batismo é Sempre Presente</h3>
        <div className={styles.textoConclusao}>
          <p>
            Caro leitor, o Batismo não é memória do passado — é{" "}
            <strong>realidade viva e operante</strong> em você neste exato
            momento. Aquelas águas que tocaram sua testa naquele dia continuam a
            agir, invisíveis mas reais, na profundidade de sua alma.
          </p>
          <p>
            Quer você tenha sido batizado aos oito dias de vida, ou aos oitenta
            anos de idade, a realidade é a mesma:{" "}
            <strong>você é criatura nova em Cristo</strong>. A antiga natureza
            foi sepultada. O Espírito Santo habita em você. Você é templo vivo
            de Deus.
          </p>
          <p>
            Essa verdade não depende de seus sentimentos, nem de sua fidelidade,
            nem de sua santidade atual. Ela foi gravada por Deus em sua alma com
            marca que nenhum pecado apaga, nenhuma apostasia cancela, nenhuma
            fraqueza humana desfaz.
          </p>
          <p>
            <strong>
              Você foi batizado. Você pertence a Cristo. Esse compromisso não
              tem prazo de validade.
            </strong>
          </p>
          <p>
            O que resta é a sua resposta cotidiana: viver à altura daquilo que
            você já é — filho de Deus, membro do Corpo de Cristo, templo do
            Espírito Santo, herdeiro do Reino dos Céus.
          </p>
          <p className={styles.assinaturaConclusao}>
            “Não vos esqueceis de que fostes batizados, e que o Batismo é o
            fundamento de toda a vossa vida cristã.”
            <br />
            <em>— Inspirado em São João Paulo II</em>
          </p>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className={styles.footer}>
        © 2026 — Lux Fidei · Luz da Fé Católica
      </footer>
    </div>
  );
}