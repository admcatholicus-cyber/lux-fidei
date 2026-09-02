# Últimas Conversas — tradução integral em português para `lux-fidei`

Esta pasta adiciona a rota `/biblioteca/ultimas-conversas` ao leitor da biblioteca, reproduzindo o mesmo padrão de navegação, tipografia, temas, histórico, progresso e atalhos usado em `historia-de-uma-alma`.

## Escopo editorial

O módulo `data/chapters.ts` contém **21 capítulos de conteúdo**, traduzidos integralmente a partir dos blocos textuais da fonte francesa. A organização preserva o material editorial introdutório, o *Caderno Amarelo*, as últimas palavras, os apêndices e as seções de variações das conversas com as irmãs. A página separadora vazia e a página final de licença/índice da fonte foram excluídas do fluxo de leitura, pois não são capítulos da obra.

A fonte francesa é o item digital *Derniers Entretiens de Ste Thérèse de Lisieux*, disponível no Internet Archive. A própria página descreve o conjunto como palavras recolhidas nos últimos meses de vida de Teresa, publicadas sob o título *Novissima verba* e relacionadas aos meses de maio a setembro de 1897. A tradução presente no projeto é nova e não copia a tradução portuguesa de P. José Rodrigues Cosme, publicada em 1936.

A fonte digital consultada apresenta licença **CC BY-NC-ND 3.0**. Portanto, antes de publicar o repositório em produção, o responsável pelo projeto deve verificar a compatibilidade da distribuição desta tradução com a licença da fonte digital e, se necessário, substituir a base por uma edição francesa em domínio público ou obter autorização específica. O README registra a procedência para permitir essa revisão; não afirma que a licença seja automaticamente suficiente para qualquer redistribuição. O leitor foi adaptado para tratar semanticamente prosa, cabeçalhos, versos e notas editoriais, evitando que elementos híbridos sejam exibidos como parágrafos comuns.

## Como instalar

Copie o diretório inteiro para `app/biblioteca/`:

```text
lux-fidei/
└── app/
    └── biblioteca/
        └── ultimas-conversas/
            ├── page.tsx
            ├── README.md
            ├── [chapter]/
            │   └── page.tsx
            ├── components/
            │   ├── ChapterReader.tsx
            │   ├── Highlighter.module.css
            │   ├── Highlighter.tsx
            │   ├── Reader.module.css
            │   └── RegistrarHistorico.tsx
            └── data/
                └── chapters.ts
```

No card correspondente da página `/biblioteca`, aponte o botão para:

```tsx
<Link href="/biblioteca/ultimas-conversas">Ler agora</Link>
```

## Verificação técnica

A rota foi compilada com `next build`, gerando as páginas estáticas dos 21 capítulos. O arquivo de dados usa serialização segura de strings para preservar aspas, acentos, travessões e pontuação sem quebrar a sintaxe TypeScript. A verificação visual confirmou a abertura, um capítulo datado, a navegação e o bloco de versos.

## Referências

[1]: https://archive.org/details/sainte-therese-de-lisieux-derniers-entretiens-dernieres-paroles-le-carnet-jaune-de-pauline-martin "Derniers Entretiens de Sainte Thérèse de Lisieux — Internet Archive"
[2]: https://archive.org/metadata/sainte-therese-de-lisieux-derniers-entretiens-dernieres-paroles-le-carnet-jaune-de-pauline-martin "Metadados e arquivos da fonte digital"
[3]: https://repositorio.ucp.pt/bitstream/10400.14/17850/1/V02701-075-151.pdf "Caminhos Portugueses de Santa Teresinha do Menino Jesus"
[4]: https://repositorio.ucp.pt/bitstreams/920f500a-9a3b-4904-ba80-d49c5f406dc5/download "Bibliografia sobre Santa Teresa de Lisieux"
[5]: https://www.vatican.va/content/john-paul-ii/pt/apost_letters/1997/documents/hf_jp-ii_apl_19101997_divini-amoris.html "Divini Amoris Scientia — João Paulo II"

A bibliografia portuguesa consultada identifica a edição *Novíssima Verba — Últimas conversas de Santa Teresinha*, traduzida por P. José Rodrigues Cosme e publicada pela Tipografia Fonseca, no Porto, em 1936, com 210 páginas [3] [4]. Essa edição foi usada apenas para confirmar a existência histórica da tradução portuguesa; o texto incorporado nesta rota foi traduzido novamente a partir da fonte francesa [1] [2]. A terminologia portuguesa “Últimos Colóquios” também aparece em referência oficial da Santa Sé [5].
