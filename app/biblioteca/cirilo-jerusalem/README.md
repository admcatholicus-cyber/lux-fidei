# Cirilo de Jerusalém — Catequeses Batismais e Mistagógicas

Infraestrutura da biblioteca patrística de São Cirilo de Jerusalém, seguindo o modelo de `historia-de-uma-alma`.

## Estrutura

```
cirilo-jerusalem/
├── README.md
├── page.tsx                          ← Landing page com TOC agrupado por tipo
├── [catequese]/
│   └── page.tsx                      ← Rota dinâmica (generateStaticParams)
├── components/
│   ├── CatequeseReader.tsx           ← Leitor principal (adaptado de ChapterReader)
│   ├── CatequeseReader.module.css    ← Estilos do leitor + landing
│   ├── BilingualDisplay.tsx          ← Toggle Português / Original / Paralelo
│   ├── BilingualDisplay.module.css   ← Estilos do display bilíngue
│   ├── Highlighter.tsx               ← Marca-texto (prefixo localStorage: cirilo-)
│   ├── Highlighter.module.css        ← Estilos do marca-texto
│   └── RegistrarHistorico.tsx        ← Registro no histórico da biblioteca
└── data/
    ├── catequeses.ts                 ← Índice, types, bookMeta, tipoLabels
    ├── catequese-01.ts               ← Procatequese (pre-batismal)
    ├── catequese-02.ts a catequese-19.ts ← Catequeses I–XVIII (pre-batismal)
    └── catequese-20.ts a catequese-24.ts ← Catequeses Mistagógicas I–V
```

## Tipos de Catequese

| Tipo | Badge | Cor | Catequeses |
|------|-------|-----|------------|
| `pre-batismal` | Pré-batismal | Roxo Imperial `#5b2c83` | 1–19 (Procatequese + 18 batismais) |
| `mistagogica` | Mistagógica | Dourado Sacro `#8b6508` | 20–24 (5 mistagógicas) |

## Dependências

- `../../lib/historico` — módulo de histórico da biblioteca (já existe no projeto pai)
- Fontes: EB Garamond, Cinzel, Crimson Pro (carregadas pelo layout pai)

## Diferenças em relação a historia-de-uma-alma

1. **Display bilíngue** — Componente `BilingualDisplay` com toggle entre Português / Original / Paralelo
2. **Badge de tipo** — Indica Pré-batismal ou Mistagógica no cabeçalho
3. **Versículo base** — Epígrafe abaixo do título
4. **Notas** — Seção final de notas da catequese
5. **Rodapé com fonte** — Informação sobre a fonte do texto
6. **Landing page agrupada** — TOC separado por tipo (não redireciona)
7. **Paleta púrpura/dourada** — Cores temáticas da patrística

## Preenchimento dos stubs

Cada arquivo `catequese-XX.ts` contém um stub vazio com os campos:
- `textoOriginal` — array de parágrafos no idioma original (inglês NPNF)
- `textoTraduzido` — array de parágrafos em português

O Manus deve preencher esses arrays com o texto traduzido/originais das catequeses.
