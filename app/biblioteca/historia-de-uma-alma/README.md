# História de uma Alma — livro completo para `lux-fidei`

Este diretório é uma **rota Next.js pronta para colar** dentro da pasta
`app/biblioteca/` do seu projeto. Ela adiciona o livro *História de uma Alma*
(Santa Teresinha do Menino Jesus) com **11 capítulos**, leitor próprio,
sumário lateral, controle de tamanho da fonte, atalhos de teclado (`←` / `→`),
barra de progresso e navegação Anterior / Próximo.

## Como instalar

1. Copie **este diretório inteiro** para `app/biblioteca/` do seu projeto:

   ```
   lux-fidei/
   └── app/
       └── biblioteca/
           └── historia-de-uma-alma/     ← cole aqui
               ├── page.tsx
               ├── README.md
               ├── [chapter]/
               │   └── page.tsx
               ├── components/
               │   ├── ChapterReader.tsx
               │   └── Reader.module.css
               └── data/
                   ├── chapters.ts
                   └── chapter-01.ts … chapter-11.ts
   ```

2. No card do livro na sua página `/biblioteca`, aponte o botão “Acesso livre”
   para:

   ```tsx
   <Link href="/biblioteca/historia-de-uma-alma">Ler agora</Link>
   ```

3. As fontes usadas (`EB Garamond`, `Cinzel`, `Crimson Pro`) já são carregadas
   pelo restante do site — nada a acrescentar.

Só isso. Sem novas dependências. Sem novas rotas para configurar.
As rotas são geradas estaticamente via `generateStaticParams`.

## Estrutura

- `page.tsx` → capa do livro (metadados + índice + botão “Começar a leitura”).
- `[chapter]/page.tsx` → cada capítulo, rota dinâmica pelo `slug`.
- `data/chapters.ts` → índice tipado dos 11 capítulos.
- `data/chapter-XX.ts` → cada capítulo em módulo separado; parágrafos
  extraídos da tradução em domínio público (Alexandria Católica /
  Canção Nova).
- `components/ChapterReader.tsx` → leitor client-side com:
  - barra de progresso,
  - setas ← → (teclado + botões),
  - sumário lateral deslizante,
  - controle de tamanho da fonte (persistido em `localStorage`),
  - drop-cap tipográfico no primeiro parágrafo.
- `components/Reader.module.css` → toda a estilização (CSS Modules puro;
  suporta claro/escuro automaticamente pelo `prefers-color-scheme`).

## Fonte do texto

Tradução portuguesa em domínio público, publicada originalmente pelo
projeto **Alexandria Católica** e distribuída em PDF pelo blog *Amigos
do Céu* (Canção Nova). Os três manuscritos autobiográficos (A, B e C)
foram redivididos em 11 capítulos para dar ritmo ao leitor, preservando
o texto integral e a ordem original.
