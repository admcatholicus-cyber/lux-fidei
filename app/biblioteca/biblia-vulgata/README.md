# Bíblia Sagrada (Vulgata) — Módulo para `lux-fidei`

Módulo da biblioteca com a **Bíblia Sagrada (Vulgata)** na tradução do
**Pe. Antônio Pereira de Figueiredo** (1725–1797), reproduzida a partir da
edição do **Ano Santo de 1950** (São Paulo, revista pelo Pe. Santos Farinha
e Pe. Antônio Charbel, S.D.B.). Texto em **domínio público**.

O módulo segue exatamente a estrutura do livro
`app/biblioteca/historia-de-uma-alma/`: uma _cover page_ com sumário, uma
rota dinâmica para as páginas, um _reader_ client-side com controles de
fonte/tema/atalhos de teclado, e um diretório `data/` com um arquivo por
livro bíblico.

## Estrutura

```
biblia-vulgata/
├── page.tsx                    # Capa: metadados + índice AT/NT
├── [book]/
│   ├── page.tsx                # Redireciona para pág. 1 do livro
│   └── [page]/page.tsx         # Rota estática de cada página
├── components/
│   ├── PageReader.tsx          # Reader client-side
│   └── Reader.module.css       # Estilos (parchment/sepia/night)
└── data/
    ├── types.ts                # BookInfo, BookData, BiblePage
    ├── books.ts                # Índice canônico de 73 livros
    ├── loader.ts               # Import dinâmico por slug
    ├── genesis.ts              # Um arquivo por livro (73 no total)
    ├── exodo.ts
    ├── ...
    └── apocalipse.ts
```

## Instalação

Copie o diretório `biblia-vulgata/` para dentro de
`app/biblioteca/` no seu projeto Next.js:

```
app/biblioteca/biblia-vulgata/
```

O módulo **não requer dependências adicionais** — usa apenas o que já vem
com Next.js. As fontes serifadas (EB Garamond, Cinzel) são as mesmas
usadas pelo `historia-de-uma-alma`; se já estiverem carregadas no layout
do site, o reader aproveita.

## Rotas geradas

- `/biblioteca/biblia-vulgata/` — capa + índice
- `/biblioteca/biblia-vulgata/<livro>/` — redireciona para pág. 1
- `/biblioteca/biblia-vulgata/<livro>/<n>` — leitor da página `n`

Todas as rotas de página são geradas via `generateStaticParams`, o que
significa build estático completo. Cada livro tem entre 2 e ~360 páginas
(no total, cerca de **5 700 páginas** para os 73 livros).

## Cobertura dos livros (ordem Vulgata / católica)

**Antigo Testamento (46 livros)** — Gênesis, Êxodo, Levítico, Números,
Deuteronômio, Josué, Juízes, Rute, 1–4 Reis (= 1–2 Samuel + 1–2 Reis
das versões hebraicas), 1–2 Paralipômenos, 1–2 Esdras (2 Esdras =
Neemias), Tobias, Judite, Ester, Jó, Salmos, Provérbios, Eclesiastes,
Cântico dos Cânticos, Sabedoria, Eclesiástico, Isaías, Jeremias,
Lamentações, Baruc, Ezequiel, Daniel, Oséias, Joel, Amós, Abdias, Jonas,
Miquéias, Naum, Habacuc, Sofonias, Ageu, Zacarias, Malaquias, 1–2
Macabeus.

**Novo Testamento (27 livros)** — Mateus, Marcos, Lucas, João, Atos,
Romanos, 1–2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1–2
Tessalonicenses, 1–2 Timóteo, Tito, Filémon, Hebreus, Tiago, 1–2 Pedro,
1–3 João, Judas, Apocalipse.

## Sobre o texto

A extração foi feita a partir do PDF original (Internet Archive), página
por página, mantendo a **numeração original das páginas do PDF** em
`pdfPage`. Comentários, notas de rodapé, ilustrações e cabeçalhos foram
removidos automaticamente — o corpo preserva apenas os versículos, na
forma `"<n>. <texto>"`.

Como se trata de OCR de uma edição de 1950, algumas grafias antigas
(ex. `fêz`, `d,o`, hífens interrompidos) foram mantidas intactas. Não se
trata de uma edição crítica — é a versão do Pe. Figueiredo tal como
impressa.

## Recursos do reader

- **Atalhos de teclado**: `← / j` página anterior, `→ / k` próxima,
  `t` sumário, `s` ajustes, `1–4` tamanho da fonte.
- **Gestos**: swipe horizontal para avançar/voltar.
- **Temas**: pergaminho (padrão), sépia, noite — persistidos em
  `localStorage`.
- **Barra de progresso** na leitura da página.
- **Sumário lateral** com AT/NT e indicação do livro atual.

## Fonte

Domínio público. Digitalização a partir de
`Bíblia Sagrada (Vulgata) by Pe. Antonio Pereira de Figueiredo.pdf`
disponível no Internet Archive.
