/**
 * Metadata geral da edição digital do Cura d'Ars.
 */

export const obraMetadata = {
  santo: {
    nome: "São João Maria Vianney",
    nomeFrances: "Jean-Marie-Baptiste Vianney",
    vida: "1786 – 1859",
    titulo: "O Cura d'Ars · Padroeiro de Todos os Párocos do Mundo",
  },
  obra: {
    tituloCurto: "Sermões, Catequeses e Orações",
    tituloLongo: "Sermões Célebres, Catequeses e Exercícios de Piologia",
    epigrafe:
      "Eu te mostrarei o caminho do Céu.",
    epigrafeFonte: "Palavras de São João Maria Vianney ao jovem pastorzinho ao chegar a Ars, 1818",
  },
  notaGeral:
    "São João Maria Vianney transformou o pequeno vilarejo de Ars em um dos maiores centros de peregrinação da Europa. Seus sermões vigorosos, suas catequeses inflamadas e suas orações comoventes converteram milhares de almas no confessionário e na pregação.",
  secoes: [
    {
      id: "sermoes",
      icone: "🔥",
      titulo: "Sermões Célebres",
      descricao:
        "Seleção dos grandes sermões doutrinais sobre o Juízo Final, o Inferno, a Santa Eucaristia, o Amor de Deus e a Oração, extraídos da edição de 1883.",
      contagem: "10 sermões célebres",
      href: "/biblioteca/sao-joao-maria-vianney/sermoes",
    },
    {
      id: "oracoes",
      icone: "✝",
      titulo: "Orações e Atos de Fé",
      descricao:
        "Oração a Jesus Crucificado, Ato de Amor, Oração da Manhã e da Noite, extraídas das Heures Catholiques d'Ars.",
      contagem: "8 orações e fórmulas",
      href: "/biblioteca/sao-filipe-neri/oracoes", // alterado abaixo
      hrefReal: "/biblioteca/sao-joao-maria-vianney/oracoes",
    },
    {
      id: "cartas",
      icone: "📜",
      titulo: "Correspondência",
      descricao:
        "Catálogo documental da correspondência e testemunhos epistolares atribuídos e direcionados ao Cura d'Ars.",
      contagem: "Catálogo documental",
      href: "/biblioteca/sao-joao-maria-vianney/cartas",
    },
  ],
  notaEditorial: {
    titulo: "Sobre esta edição digital",
    paragrafos: [
      "Os sermões de São João Maria Vianney apresentados nesta biblioteca baseiam-se na edição histórica de 1883 (Sermons du vénérable serviteur de Dieu Jean-Baptiste-Marie Vianney, 4 volumes).",
      "Cada texto passou por rigoroso processo de conferência filológica e tradução para o português brasileiro, eliminando ruídos de OCR e garantindo fidelidade teológica e clareza pastoral.",
    ],
  },
  bibliografia: [
    "Sermons du vénérable serviteur de Dieu Jean-Baptiste-Marie Vianney, curé d'Ars, 4 vols., Paris/Lyon, 1883.",
    "Heures catholiques d'un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d'Ars, 1851.",
    "Alfred Monnin, Le Curé d'Ars: vie de M. Jean-Baptiste-Marie Vianney, 2 vols., Paris, 1861.",
    "Francis Trochu, Le Curé d'Ars, Saint Jean-Marie-Baptiste Vianney, 1925.",
  ],
} as const;