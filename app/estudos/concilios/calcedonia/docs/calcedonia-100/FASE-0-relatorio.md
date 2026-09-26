# Relatório da Fase 0 — Exploração + Correções

**Data:** 12 de setembro de 2026
**Estado:** Aguardando aprovação do usuário

---

## 1. Árvore de arquivos relevantes

```
calcedonia/
├── page.tsx                          # Página principal /estudos/concilios/calcedonia
├── calcedonia.module.css             # CSS Modules (683 linhas, paleta dourado+púrpura+vermelho)
├── _data/
│   ├── antecedentes.ts               # Período 431–451
│   ├── canones.ts                    # 28 cânones + análise Cânon 28
│   ├── cisma.ts                      # Cisma calcedoniano e diálogos ecumênicos
│   ├── contexto-politico.ts          # Império, Marciano, Pulquéria
│   ├── controversias.ts              # Tensões internas do concílio
│   ├── convocacao.ts                 # Motivações e logística
│   ├── definicao.ts                  # Definição (Horos) — texto PT + análise
│   ├── doutrina.ts                   # Cristologia, glossário grego, comparação
│   ├── ficha.ts                      # Dados gerais do concílio
│   ├── fontes.ts                     # Bibliografia (primárias, secundárias, modernas)
│   ├── legado.ts                     # Legado teológico, eclesiástico, político
│   ├── mitos.ts                      # Mitos e mal-entendidos
│   ├── participantes.ts              # Bispos por região, monofisitas, ausências
│   ├── partidos.ts                   # Partidos teológicos e espectro
│   ├── personagens.ts                # 12 personagens principais
│   ├── recepcao.ts                   # Recepção histórica (451–hoje)
│   ├── sessoes.ts                    # 16 sessões, presidentes, linha do tempo
│   └── tomo-leao.ts                  # Tomo de Leão (Ep. 28) — tradução + trechos latinos
├── docs/
│   └── calcedonia-100/               # ← Criado agora
│       └── FASE-0-relatorio.md       # Este ficheiro
├── public/
│   └── images/
│       └── calcedonia/
│           └── ATTRIBUTION.md        # Registo de imagens (vazio)
└── (futuro)
    ├── documentos/                   # ← Fase 1 (hub + sub-rotas)
    ├── personagens/                  # ← Fase 3 (hub + 20 páginas)
    ├── teologia/                     # ← Fase 3 (6 páginas)
    ├── recepcao/                     # ← Fase 4 (7 páginas)
    ├── arqueologia/                  # ← Fase 5
    ├── cronologia/                   # ← Fase 5
    ├── glossario/                    # ← Fase 6
    ├── bibliografia/                 # ← Fase 6
    └── sobre-fontes/                 # ← Fase 6
```

## 2. Convenção de rotas

O projeto usa **App Router** do Next.js. A página principal está em:

- **Arquivo:** `page.tsx` (dentro da pasta `calcedonia/`)
- **Rota:** `/estudos/concilios/calcedonia`

O `page.tsx` é um componente `'use client'` que importa dados de `_data/*.ts` e renderiza tudo inline (não usa getServerSideProps nem dados separados por API).

**Componente de layout compartilhado:** `ConcilioLayout` importado de `../_shared/ConcilioLayout` (pasta `_shared` não encontrada dentro de `calcedonia/` — provavelmente em `estudos/concilios/_shared/`).

## 3. CSS Modules disponíveis (`calcedonia.module.css`)

| Classe | Uso |
|---|---|
| `.divisor` | Linha dourada entre seções |
| `.fichaRapida`, `.fichaCard`, `.fichaLabel`, `.fichaValor` | Cards de ficha rápida |
| `.secao`, `.secaoTitulo`, `.secaoIcone`, `.secaoTexto` | Seções principais |
| `.destaque` | Caixas de citação/alerta (borda dourada) |
| `.heresiasGrid`, `.heresiaCard`, `.heresiaNome`, `.heresiaLider`, `.heresiaErro` | Grid de cards genérico |
| `.resultadosLista` | Lista de bullets dourados |
| `.presidentesLista`, `.presidenteItem`, `.presidenteFase`, `.presidenteInfo` | Lista timeline/linha do tempo |
| `.navLinks`, `.navLink` | Navegação inferior |
| `.badgeAlta`, `.badgeMedia`, `.badgeBaixa` | Badges de gravidade |
| `.tabelaComparativa` | Tabela de comparação |
| `.blocoDefinicao` | Bloco de texto litúrgico/credo |
| `.personagemCard`, `.personagemNome`, `.personagemGrego`, `.personagemMeta`, `.personagemBio`, `.personagemPapel`, `.personagemCuriosidade` | Card de personagem |
| `.glossarioTermo`, `.glossarioGrego` | Glossário teológico |
| `.dossieCTA`, `.dossieBarra`, `.dossieGlow`, `.dossieBadge`, `.dossieTitulo`, `.dossieDescricao`, `.dossieTags`, `.dossieTag`, `.dossieBotao`, `.dossieNota` | CTA do dossiê documental |

**Variáveis CSS disponíveis:**
`--calc-gold`, `--calc-gold-light`, `--calc-gold-bg`, `--calc-gold-border`, `--calc-purple`, `--calc-purple-mid`, `--calc-red`, `--calc-red-light`, `--calc-text`, `--calc-text-muted`, `--calc-text-faint`, `--calc-bg-card`, `--calc-bg-highlight`, `--calc-bg-quote`, `--calc-border`, `--calc-border-dashed`

## 4. Mapeamento "rota futura → caminho de arquivo"

### Fase 1 — Dossiê documental

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/documentos` | `documentos/page.tsx` (hub com cards) |
| `/estudos/concilios/calcedonia/documentos/definicao` | `documentos/definicao/page.tsx` |
| `/estudos/concilios/calcedonia/documentos/tomo` | `documentos/tomo/page.tsx` |
| `/estudos/concilios/calcedonia/documentos/fontes-de-fe` | `documentos/fontes-de-fe/page.tsx` |
| `/estudos/concilios/calcedonia/documentos/canones` | `documentos/canones/page.tsx` |
| `/estudos/concilios/calcedonia/documentos/leao-104-106` | `documentos/leao-104-106/page.tsx` |
| `/estudos/concilios/calcedonia/documentos/imperiais` | `documentos/imperiais/page.tsx` |

### Fase 2 — Atas sessão por sessão

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/documentos/atas` | `documentos/atas/page.tsx` (hub) |
| `/estudos/concilios/calcedonia/documentos/atas/sessao-01` | `documentos/atas/sessao-01/page.tsx` |
| ... | ... |
| `/estudos/concilios/calcedonia/documentos/atas/sessao-16` | `documentos/atas/sessao-16/page.tsx` |

### Fase 3 — Edição crítica, prosopografia e teologia

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/documentos/edicao-critica` | `documentos/edicao-critica/page.tsx` |
| `/estudos/concilios/calcedonia/personagens` | `personagens/page.tsx` (hub) |
| `/estudos/concilios/calcedonia/personagens/<slug>` | `personagens/<slug>/page.tsx` (20 slugs) |
| `/estudos/concilios/calcedonia/teologia/<slug>` | `teologia/<slug>/page.tsx` (6 slugs) |

### Fase 4 — Recepção regional

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/recepcao/<slug>` | `recepcao/<slug>/page.tsx` (7 slugs) |

### Fase 5 — Arqueologia + visual

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/arqueologia` | `arqueologia/page.tsx` |
| `/estudos/concilios/calcedonia/cronologia` | `cronologia/page.tsx` |

### Fase 6 — Glossário + bibliografia

| Rota | Caminho do arquivo |
|---|---|
| `/estudos/concilios/calcedonia/glossario` | `glossario/page.tsx` |
| `/estudos/concilios/calcedonia/bibliografia` | `bibliografia/page.tsx` |
| `/estudos/concilios/calcedonia/sobre-fontes` | `sobre-fontes/page.tsx` |

## 5. Problemas identificados

### 5.1 Número de bispos egípcios (inconsistência)

O ficheiro `participantes.ts` oscila entre os seguintes números:

- **Linha 66 (composicao):** "~20, a menor e mais problemática"
- **Linha 382 (título da secção):** "~20 bispos — a delegação problemática"
- **Linha 391 (descrição):** "A delegação de ~20 bispos (alguns autores falam em 13)"
- **Linha 417:** "Os 13 bispos egípcios"
- **Linha 500 (desfecho monofisitas):** "Os 13 bispos egípcios"
- **Linha 475 (monofisitas.descricao):** "~13 bispos"

**Diagnóstico:** O texto oscila entre 13 e ~20. As atas gregas listam 13 bispos egípcios que assinaram a Definição, mas a delegação total incluía monges, clérigos e outros pode ter sido maior. A fonte F2 (ACO/Percival) e F6 (acta-conciliorum-oecumenicorum) devem ser consultadas para dirimir.

**Ação necessária (Fase 0-B):** Padronizar o texto. Se não for possível dirimir, usar "cerca de 13 bispos (as fontes variam)" + nota explicativa.

### 5.2 Link quebrado

O link `href="/estudos/concilios/calcedonia/documentos"` (linhas 126 e 1403 do page.tsx) aponta para uma rota que hoje retorna 404. Este é o alvo principal da Fase 1.

**Ação:** Criar a rota hub na Fase 1. Não alterar o link na Fase 0-B (mantê-lo apontando para o destino correto que será criado).

### 5.3 Datas a conferir contra a Tabela de Verdade

| Item na página | Dado na página | Tabela de Verdade | Status |
|---|---|---|---|
| Data de início | 8 out 451 (ficha.ts linha 12) | 8 out 451 (item 16) | ✅ OK |
| Data de fim | 1 nov 451 (ficha.ts linha 13) | 1 nov 451 (item 26) | ✅ OK |
| Morte de Flaviano | 11 ago 449 (personagens.ts linha 357) | ~11 ago 449 (item 9) | ✅ OK |
| Morte de Teodósio II | 28 jul 450 (ficha.ts linha 38) | 28 jul 450 (item 11) | ✅ OK |
| Casamento Marciano/Pulquéria | 25 ago 450 (ficha.ts linha 39) | 25 ago 450 (item 12) | ✅ OK |
| Morte de Pulquéria | julho 453 (personagens.ts linha 208) | jul 453 (item 30) | ✅ OK |
| Morte de Marciano | 27 jan 457 (personagens.ts linha 104) | 27 jan 457 (item 32) | ✅ OK |
| Morte de Dioscoro | set 454 (personagens.ts linha 264) | set 454 (item 31) | ✅ OK |
| Eleição de Leão | 29 set 440 (personagens.ts linha 38) | 29 set 440 (item 4) | ✅ OK |
| Sínodo que condena Eutiques | "nov 448" (Tabela item 6) | sessão decisiva: 22 nov 448 | ⚠️ A confirmar: a página menciona "448" sem especificar a data exata da sessão decisiva |
| Latrocínio | "8 ago 449" (Tabela item 8) | 8 ago 449 | ✅ OK |
| Tomo de Leão data | "13 jun 449" (ficha.ts linha 99) | 13 jun 449 (item 7) | ✅ OK |

**Resultado:** As datas estão consistentes. Um ponto a verificar: a data exata do sínodo de 448 (a Tabela de Verdade diz "nov 448" com sessão decisiva em 22 nov; a página menciona apenas "448"). Na Fase 0-B, confirmar se a página usa "novembro de 448" ou apenas "448".

### 5.4 Ausência de componentes-base reutilizáveis

Não foram encontrados componentes dedicados para:
- `<Nota>` (nota de rodapé numerada)
- `<Citacao>` (bloco de citação patrística com lang e fonte)
- `<TextoBilingue>` (duas colunas original+PT)
- `<FonteTexto>` (rodapé de procedência)

Tudo é renderizado inline no `page.tsx` com CSS genérico (`.blocoDefinicao`, `.heresiaCard`, etc.).

**Ação (Fase 0-C):** Criar estes componentes em `components/concilios/` (ou no caminho equivalente à convenção do repo).

### 5.5 Componente ConcilioLayout

Importado de `../_shared/ConcilioLayout`. A pasta `_shared` não foi encontrada dentro de `calcedonia/`, o que indica que está em `estudos/concilios/_shared/` (acima do nosso escopo de diretório). Este componente provavelmente fornece o layout base com navegação, header, etc.

## 6. Dados existentes já ricos

A exploração revelou que o projeto já possui dados notavelmente completos:

- **18 ficheiros de dados** cobrindo todos os aspectos do concílio
- **12 personagens** detalhados (cada um com ~200 palavras)
- **28 cânones** traduzidos com observações
- **Texto integral da Definição** em PT com análise frase por frase
- **Texto integral do Tomo** em PT com trechos-chave em latim
- **Bibliografia completa** (16 fontes primárias, 4 secundárias, 10 modernas, 5 online)
- **CSS Modules** bem estruturado com paleta visual coesa

**O que falta (e será criado nas próximas fases):**
- Rotas de documentos (elimina o 404)
- Textos originais em grego/latim com aparato crítico
- Páginas de personagens individuais (20 slugs)
- Páginas de teologia (6 slugs)
- Recepção regional (7 páginas)
- Arqueologia e cronologia visual
- Glossário e bibliografia expandida

## 7. Próximos passos (Fase 0-B)

Após aprovação desta fase de exploração:

1. **Bispos egípcios:** Consultar F2/F6 via curl para obter o número exato das atas gregas; padronizar texto com nota explicativa
2. **Link quebrado:** Verificar que nenhum outro link interno aponta para rota inexistente (além do `/documentos`)
3. **Datas:** Confirmar a menção ao sínodo de 448 (novembro vs. data exata)
4. **Componentes-base:** Criar `<Nota>`, `<Citacao>`, `<TextoBilingue>`, `<FonteTexto>` em `components/concilios/`
5. **Criar `docs/calcedonia-100/`** + `public/images/calcedonia/ATTRIBUTION.md` (já feito)
6. **Build + commit**

---

**Aguardando:** "aprovado fase 0" para prosseguir com a Fase 0-B.
