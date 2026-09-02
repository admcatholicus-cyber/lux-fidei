# ═══════════════════════════════════════════════════════════════
# SCRIPT: criar-rafael.ps1
# Gera APENAS os componentes .tsx de São Rafael Arcanjo
# ═══════════════════════════════════════════════════════════════

$ErrorActionPreference = 'Stop'

$basePath = "C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\arcanjos\sao-rafael-arcanjo"

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host " Gerando componentes de Sao Rafael Arcanjo" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

# ─── Cria a pasta se não existir ─────────────────────────────
if (-not (Test-Path $basePath)) {
    New-Item -ItemType Directory -Path $basePath -Force | Out-Null
    Write-Host "[OK] Pasta criada: $basePath" -ForegroundColor Green
} else {
    Write-Host "[--] Pasta ja existe: $basePath" -ForegroundColor Gray
}

Write-Host ""

# ═══════════════════════════════════════════════════════════════
# Função auxiliar para escrever arquivos como UTF-8
# ═══════════════════════════════════════════════════════════════
function Write-FileUtf8 {
    param(
        [string]$Path,
        [string]$Content
    )
    [System.IO.File]::WriteAllText($Path, $Content, [System.Text.UTF8Encoding]::new($false))
}


# ═══════════════════════════════════════════════════════════════
# ARQUIVO 1: Dialogo.tsx
# ═══════════════════════════════════════════════════════════════
$dialogoLines = @(
    "'use client';",
    "",
    "import { useState, ReactNode } from 'react';",
    "import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';",
    "",
    "type DialogoProps = {",
    "  /** Referencia biblica, ex: 'Tobias 5,13' */",
    "  referencia: string;",
    "  /** Contexto narrativo — descricao da cena onde a fala acontece */",
    "  cena?: string;",
    "  /** Quem esta falando, ex: 'Rafael (disfarcado como Azarias)' */",
    "  locutor?: string;",
    "  /** Texto original em latim/grego (opcional) */",
    "  original?: string;",
    "  /** A fala em portugues (children) */",
    "  children: ReactNode;",
    "};",
    "",
    "export default function Dialogo({",
    "  referencia,",
    "  cena,",
    "  locutor = 'Rafael Arcanjo',",
    "  original,",
    "  children,",
    "}: DialogoProps) {",
    "  const [originalAberto, setOriginalAberto] = useState(false);",
    "",
    "  return (",
    "    <div className={styles.dialogoRafael}>",
    "      <div className={styles.dialogoRef}>{referencia}</div>",
    "",
    "      {cena && (",
    "        <div className={styles.dialogoCena}>",
    "          <div className={styles.dialogoCenaLabel}>Cena</div>",
    "          <p className={styles.dialogoCenaTexto}>{cena}</p>",
    "        </div>",
    "      )}",
    "",
    "      <div className={styles.dialogoLocutor}>",
    "        <span className={styles.dialogoLocutorSimbolo}>{String.fromCharCode(9656)}</span>",
    "        <span className={styles.dialogoLocutorNome}>{locutor}</span>",
    "      </div>",
    "",
    "      <div className={styles.dialogoFala}>{children}</div>",
    "",
    "      {original && (",
    "        <div className={styles.dialogoOriginal}>",
    "          <button",
    "            type=`"button`"",
    "            className={styles.dialogoOriginalToggle}",
    "            onClick={() => setOriginalAberto((v) => !v)}",
    "            aria-expanded={originalAberto}",
    "          >",
    "            {originalAberto ? 'Ocultar original' : 'Ver original (latim/grego)'}",
    "          </button>",
    "          {originalAberto && (",
    "            <div className={styles.dialogoOriginalTexto}>{original}</div>",
    "          )}",
    "        </div>",
    "      )}",
    "    </div>",
    "  );",
    "}",
    ""
)
$dialogoContent = ($dialogoLines -join "`r`n").Replace("``", "`")
Write-FileUtf8 -Path (Join-Path $basePath "Dialogo.tsx") -Content $dialogoContent
Write-Host "[OK] Criado: Dialogo.tsx" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# ARQUIVO 2: Testemunho.tsx
# ═══════════════════════════════════════════════════════════════
$testemunhoLines = @(
    "'use client';",
    "",
    "import { ReactNode } from 'react';",
    "import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';",
    "",
    "type TestemunhoProps = {",
    "  /** Nome do autor, ex: 'Santo Ambrosio de Milao' */",
    "  autor: string;",
    "  /** Qualificacao, ex: 'Bispo - Doutor da Igreja - c. 340-397' */",
    "  qualificacao: string;",
    "  /** Iniciais/monograma exibidas no avatar, ex: 'A' ou 'SA' */",
    "  monograma?: string;",
    "  /** Titulo da obra, ex: 'De Tobia, VIII, 28' */",
    "  obra: string;",
    "  /** Referencia tecnica completa */",
    "  fonte?: string;",
    "  /** Texto original em latim/grego (opcional) */",
    "  original?: string;",
    "  /** A citacao em portugues (children) */",
    "  children: ReactNode;",
    "};",
    "",
    "export default function Testemunho({",
    "  autor,",
    "  qualificacao,",
    "  monograma,",
    "  obra,",
    "  fonte,",
    "  original,",
    "  children,",
    "}: TestemunhoProps) {",
    "  const inicial =",
    "    monograma ??",
    "    autor",
    "      .replace(/^(Sao|Santo|Santa|Beato|Beata|Papa|Veneravel)\s+/i, '')",
    "      .charAt(0)",
    "      .toUpperCase();",
    "",
    "  const partesQualif = qualificacao.split(/\s*[·•]\s*/);",
    "  const qualifRender: ReactNode[] = [];",
    "  partesQualif.forEach((parte, i) => {",
    "    if (i > 0) qualifRender.push(<span key={``sep-`${i}``}>·</span>);",
    "    qualifRender.push(<span key={``p-`${i}``}>{parte}</span>);",
    "  });",
    "",
    "  return (",
    "    <div className={styles.testemunho}>",
    "      <div className={styles.testemunhoAvatar}>{inicial}</div>",
    "",
    "      <div className={styles.testemunhoConteudo}>",
    "        <h4 className={styles.testemunhoAutor}>{autor}</h4>",
    "        <p className={styles.testemunhoQualif}>{qualifRender}</p>",
    "",
    "        <div className={styles.testemunhoCitacao}>{children}</div>",
    "",
    "        {original && (",
    "          <div className={styles.testemunhoOriginal}>{original}</div>",
    "        )}",
    "",
    "        <div className={styles.testemunhoFonte}>",
    "          <span className={styles.testemunhoFonteMarca}>{String.fromCharCode(9670)}</span>",
    "          <p className={styles.testemunhoFonteTexto}>",
    "            <em>{obra}</em>",
    "            {fonte && `` — `${fonte}``}",
    "          </p>",
    "        </div>",
    "      </div>",
    "    </div>",
    "  );",
    "}",
    ""
)
$testemunhoContent = ($testemunhoLines -join "`r`n").Replace("``", "`")
Write-FileUtf8 -Path (Join-Path $basePath "Testemunho.tsx") -Content $testemunhoContent
Write-Host "[OK] Criado: Testemunho.tsx" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# ARQUIVO 3: TextoOficial.tsx
# ═══════════════════════════════════════════════════════════════
$textoOficialLines = @(
    "'use client';",
    "",
    "import { ReactNode } from 'react';",
    "import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';",
    "",
    "type TextoOficialProps = {",
    "  /** Titulo/nome do documento */",
    "  documento: string;",
    "  /** Referencia interna, ex: 'Sec. 332' */",
    "  referencia?: string;",
    "  /** Autoridade emissora */",
    "  autoridade?: string;",
    "  /** Ano/data */",
    "  data?: string;",
    "  /** Referencias biblicas/complementares no rodape */",
    "  fontesRodape?: string;",
    "  /** Simbolo/emoji do brasao. Padrao: escudo */",
    "  brasao?: string;",
    "  /** O texto do documento (children) */",
    "  children: ReactNode;",
    "};",
    "",
    "export default function TextoOficial({",
    "  documento,",
    "  referencia,",
    "  autoridade,",
    "  data,",
    "  fontesRodape,",
    "  brasao = String.fromCharCode(9960),",
    "  children,",
    "}: TextoOficialProps) {",
    "  const partesMeta = [referencia, autoridade, data].filter(Boolean) as string[];",
    "",
    "  return (",
    "    <div className={styles.textoOficial}>",
    "      <div className={styles.textoOficialInner}>",
    "        <div className={styles.textoOficialHeader}>",
    "          <div className={styles.textoOficialBrasao}>{brasao}</div>",
    "          <div>",
    "            <h4 className={styles.textoOficialTitulo}>{documento}</h4>",
    "            {partesMeta.length > 0 && (",
    "              <p className={styles.textoOficialMeta}>",
    "                {partesMeta.map((parte, i) => (",
    "                  <span key={i}>",
    "                    {i > 0 && <span>·</span>}",
    "                    {parte}",
    "                  </span>",
    "                ))}",
    "              </p>",
    "            )}",
    "          </div>",
    "        </div>",
    "",
    "        <div className={styles.textoOficialCorpo}>{children}</div>",
    "",
    "        {fontesRodape && (",
    "          <div className={styles.textoOficialRodape}>",
    "            <span className={styles.textoOficialRodapeMarca}>Referencias</span>",
    "            {fontesRodape}",
    "          </div>",
    "        )}",
    "      </div>",
    "    </div>",
    "  );",
    "}",
    ""
)
$textoOficialContent = ($textoOficialLines -join "`r`n").Replace("``", "`")
Write-FileUtf8 -Path (Join-Path $basePath "TextoOficial.tsx") -Content $textoOficialContent
Write-Host "[OK] Criado: TextoOficial.tsx" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# ARQUIVO 4: BibliotecaRafael.tsx (contem 3 componentes)
# ═══════════════════════════════════════════════════════════════
$bibliotecaLines = @(
    "'use client';",
    "",
    "import { ReactNode } from 'react';",
    "import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';",
    "",
    "// ============================================================",
    "// BibliotecaRafael — wrapper principal da antologia",
    "// ============================================================",
    "type Capitulo = {",
    "  id: string;",
    "  icone: string;",
    "  label: string;",
    "};",
    "",
    "type BibliotecaRafaelProps = {",
    "  introducao?: ReactNode;",
    "  capitulos: Capitulo[];",
    "  children: ReactNode;",
    "};",
    "",
    "export function BibliotecaRafael({",
    "  introducao,",
    "  capitulos,",
    "  children,",
    "}: BibliotecaRafaelProps) {",
    "  return (",
    "    <>",
    "      {introducao && (",
    "        <div className={styles.bibliotecaRafael}>",
    "          <div className={styles.bibliotecaIntro}>{introducao}</div>",
    "        </div>",
    "      )}",
    "",
    "      <nav className={styles.bibliotecaNav}>",
    "        <ul className={styles.bibliotecaNavLista}>",
    "          {capitulos.map((cap) => (",
    "            <li key={cap.id}>",
    "              <a href={``#`${cap.id}``}>",
    "                <span className={styles.bibliotecaNavIcone}>{cap.icone}</span>",
    "                {cap.label}",
    "              </a>",
    "            </li>",
    "          ))}",
    "        </ul>",
    "      </nav>",
    "",
    "      <div className={styles.bibliotecaRafael}>{children}</div>",
    "    </>",
    "  );",
    "}",
    "",
    "",
    "// ============================================================",
    "// CapRafael — capitulo tematico dentro da biblioteca",
    "// ============================================================",
    "type CapRafaelProps = {",
    "  id: string;",
    "  icone: string;",
    "  suprat?: string;",
    "  titulo: string;",
    "  contagem?: string;",
    "  children: ReactNode;",
    "};",
    "",
    "export function CapRafael({",
    "  id,",
    "  icone,",
    "  suprat,",
    "  titulo,",
    "  contagem,",
    "  children,",
    "}: CapRafaelProps) {",
    "  return (",
    "    <section id={id} className={styles.capRafael}>",
    "      <header className={styles.capRafaelHeader}>",
    "        <div className={styles.capRafaelIcone}>{icone}</div>",
    "        <div className={styles.capRafaelTituloWrap}>",
    "          {suprat && <p className={styles.capRafaelSuprat}>{suprat}</p>}",
    "          <h2 className={styles.capRafaelTitulo}>{titulo}</h2>",
    "        </div>",
    "        {contagem && (",
    "          <span className={styles.capRafaelContagem}>{contagem}</span>",
    "        )}",
    "      </header>",
    "      {children}",
    "    </section>",
    "  );",
    "}",
    "",
    "",
    "// ============================================================",
    "// SubsecaoRafael — agrupador interno dentro de um CapRafael",
    "// ============================================================",
    "type SubsecaoRafaelProps = {",
    "  titulo: string;",
    "  children: ReactNode;",
    "};",
    "",
    "export function SubsecaoRafael({ titulo, children }: SubsecaoRafaelProps) {",
    "  return (",
    "    <div className={styles.subsecaoRafael}>",
    "      <div className={styles.subsecaoRafaelHeader}>",
    "        <span className={styles.subsecaoRafaelOrn}>{String.fromCharCode(10022)} {String.fromCharCode(10022)} {String.fromCharCode(10022)}</span>",
    "        <h3 className={styles.subsecaoRafaelTitulo}>{titulo}</h3>",
    "        <span className={styles.subsecaoRafaelLinha}></span>",
    "      </div>",
    "      {children}",
    "    </div>",
    "  );",
    "}",
    ""
)
$bibliotecaContent = ($bibliotecaLines -join "`r`n").Replace("``", "`")
Write-FileUtf8 -Path (Join-Path $basePath "BibliotecaRafael.tsx") -Content $bibliotecaContent
Write-Host "[OK] Criado: BibliotecaRafael.tsx" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# RESUMO FINAL
# ═══════════════════════════════════════════════════════════════
Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host " [OK] Tudo pronto!" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Arquivos criados em:" -ForegroundColor Yellow
Write-Host "  $basePath" -ForegroundColor White
Write-Host ""
Write-Host "  - Dialogo.tsx" -ForegroundColor White
Write-Host "  - Testemunho.tsx" -ForegroundColor White
Write-Host "  - TextoOficial.tsx" -ForegroundColor White
Write-Host "  - BibliotecaRafael.tsx" -ForegroundColor White
Write-Host ""
Write-Host "IMPORTANTE:" -ForegroundColor Yellow
Write-Host "  1. Voce ainda precisa criar manualmente o CSS em:" -ForegroundColor Gray
Write-Host "     app\santos\_styles\especificos\arcanjos\sao-rafael-arcanjo\biblioteca.module.css" -ForegroundColor White
Write-Host ""
Write-Host "  2. No frases.mdx do Rafael, importe assim:" -ForegroundColor Gray
Write-Host ""
Write-Host "     import Dialogo from '../../../_components/especificos/arcanjos/sao-rafael-arcanjo/Dialogo';" -ForegroundColor DarkCyan
Write-Host "     import Testemunho from '../../../_components/especificos/arcanjos/sao-rafael-arcanjo/Testemunho';" -ForegroundColor DarkCyan
Write-Host "     import TextoOficial from '../../../_components/especificos/arcanjos/sao-rafael-arcanjo/TextoOficial';" -ForegroundColor DarkCyan
Write-Host "     import { BibliotecaRafael, CapRafael, SubsecaoRafael }" -ForegroundColor DarkCyan
Write-Host "       from '../../../_components/especificos/arcanjos/sao-rafael-arcanjo/BibliotecaRafael';" -ForegroundColor DarkCyan
Write-Host ""