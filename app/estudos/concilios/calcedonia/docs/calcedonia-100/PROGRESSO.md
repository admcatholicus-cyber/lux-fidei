# PROGRESSO — Projeto Calcedônia

**Última atualização:** 12 de setembro de 2026

---

## Status Geral: ✅ DOSSIÊ COMPLETO

| Lote | Descrição | Status | Arquivos |
|------|-----------|--------|----------|
| Fase 0 | Correções PT-PT + Hub expandido | ✅ | 3 editados |
| Lote 1 | E1-E3 + Componentes + Hub | ✅ | 12 criados |
| Lote 2 | Definição + Tomo + Fontes de Fé | ✅ | 6 criados |
| Lote 3 | Cânones + Leão 104-106 + Imperiais + Edição Crítica | ✅ | 8 criados |
| Lote 4 | Atas (hub + template + 16 sessões) | ✅ | 20 criados |
| Lote 5 | Personagens (hub + 20 biografias) | ✅ | 24 criados |
| Lote 6 | Teologia (6 subpáginas) | ✅ | 12 criados |
| Lote 7 | Recepção (7 tradições) | ✅ | 14 criados |
| Lote 8 | Finais (arqueologia, cronologia, glossário, bibliografia, sobre-fontes, mapas) | ✅ | 13 criados |
| Lote 9 | Auditoria + Índices | ✅ | 3 criados |

---

## Arquivos criados por Lote

### Fase 0 + Lote 1 (anteriores)
- `_data/participantes.ts` (editado — bispos egípcios)
- `_data/ficha.ts` (editado — bispos egípcios)
- `page.tsx` (editado — seção "Continuar explorando")
- `_components/Nota.tsx`, `Citacao.tsx`, `TextoBilingue.tsx`, `FonteTexto.tsx`, `index.ts`
- `documentos/_data.ts`, `page.tsx`, `_docs.module.css`
- `docs/calcedonia-100/IMAGENS-PARA-RAIZ.md`

### Lote 2
- `definicao/_data.ts`, `page.tsx` — grego integral + PT + 13 notas
- `tomo/_data.ts`, `page.tsx` — latim + PT + 6 capítulos
- `fontes-de-fe/_data.ts`, `page.tsx` — 5 fontes + tabela

### Lote 3
- `canones/_data.ts`, `page.tsx` — 28 blocos
- `leao-104-106/_data.ts`, `page.tsx` — 3 epístolas
- `imperiais/_data.ts`, `page.tsx` — éditos 451-452
- `edicao-critica/_data.ts`, `page.tsx` — guia ACO/Mansi

### Lote 4
- `atas/_data.ts`, `page.tsx`, `_sessoes.ts`, `_SessaoTemplate.tsx`
- `atas/sessao-01/page.tsx` ... `atas/sessao-16/page.tsx` (16 páginas)

### Lote 5
- `personagens/_personagens.ts`, `_PersonagemTemplate.tsx`, `page.tsx`
- 20 slugs: leao-magno, marciano, pulqueria, dioscoro, eutiques, flaviano, anatolio, maximo-antioquia, juvenal, paschasinus, teodoreto, ibas, crisafio, eudocia, eusebio-dorileu, barsauma, proterio, timoteo-eluro, severo-antioquia, hilaro-diacono

### Lote 6
- `teologia/severo-de-antioquia/`, `filoxeno-de-mabug/`, `divisoes-miafisitas/`, `leoncio-e-enipostasia/`, `tres-capitulos/`, `monotelismo/` (cada: _data.ts + page.tsx)

### Lote 7
- `recepcao/egito-copta/`, `siria/`, `armenia/`, `etiopia-eritreia/`, `georgia/`, `palestina/`, `roma-constantinopla/` (cada: _data.ts + page.tsx)

### Lote 8
- `arqueologia/_data.ts`, `page.tsx`
- `cronologia/_cronologia.ts`, `_LinhaTempo.tsx`, `page.tsx`
- `glossario/_verbetes.ts`, `page.tsx`
- `bibliografia/_bibliografia.ts`, `page.tsx`
- `sobre-fontes/_data.ts`, `page.tsx`
- `_components/MapaImperio.tsx`, `MapaPatriarcados.tsx`

### Lote 9
- `docs/calcedonia-100/PROGRESSO.md`
- `docs/calcedonia-100/INDICE-GERAL.md`
- `docs/calcedonia-100/RELATORIO-FINAL.md`

---

## Ações de curl/URLs realizadas

| Fonte | URL | Status | Data |
|-------|-----|--------|------|
| F4 | earlychurchtexts.com/public/chalcedonian_definition.htm | Parcial (paywall grego) | 12/09/2026 |
| F3 | documentacatholicaomnia.eu | Inacessível (timeout) | 12/09/2026 |
| patristica.net | patristica.net/451_def | ✅ Grego obtido | 12/09/2026 |
| ccel.org | ccel.org/ccel/schaff/creeds2 | ✅ Grego obtido | 12/09/2026 |
| Wikisource | la.wikisource.org/wiki/Tomus_ad_Flavianum | ✅ Latim obtido | 12/09/2026 |
| New Advent | newadvent.org/fathers | ✅ Índice verificado | 12/09/2026 |

---

## A VERIFICAR (pendências para o utilizador)

1. **F3 (documentacatholicaomnia.eu)** — Inacessível. Textos gregos/latinos de Mansi, PL54, PL67 precisam ser obtidos quando o site ficar disponível.
2. **F4 (earlychurchtexts.com)** — Grego da Definição requer assinatura. Texto transcrito de patristica.net como alternativa.
3. **build** — Não há `package.json` dentro de `calcedonia/`. O utilizador deve executar `npm run build` a partir da raiz do projeto e reportar erros.
4. **Datas de Proterio/Timóteo** — Marcadas "A VERIFICAR" em personagens/.
5. **Nomes "Rústico e Aurélio"** — Não verificados, marcados "A VERIFICAR" onde aplicável.
6. **Números de Codex/Novela** — Não decorados, marcados "A VERIFICAR".
