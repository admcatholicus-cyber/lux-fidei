@echo off
cd /d "%~dp0"

echo Criando estrutura de pastas...

mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\HeroSection" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\DuasTabuas" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\ListaMandamentos" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoCard" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoDetalhado" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\CitacaoBiblica" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\TabelaNumeracao" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\NovoTestamento" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\ExameConsciencia" 2>nul
mkdir "src\app\estudos\mandamentos\dez-mandamentos\_components\Conexoes" 2>nul
mkdir "src\data\estudos\mandamentos" 2>nul
mkdir "src\types\estudos\mandamentos" 2>nul

echo Criando arquivos...

REM page.tsx
(
echo export default function DezMandamentosPage^(^) {
echo   return ^(
echo     ^<main^>
echo       {/* componentes aqui */}
echo     ^</main^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\page.tsx"

echo /* dezMandamentos.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\dezMandamentos.module.css"

REM HeroSection
(
echo export default function HeroSection^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\HeroSection\HeroSection.tsx"
echo /* heroSection.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\HeroSection\heroSection.module.css"

REM DuasTabuas
(
echo export default function DuasTabuas^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\DuasTabuas\DuasTabuas.tsx"
echo /* duasTabuas.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\DuasTabuas\duasTabuas.module.css"

REM ListaMandamentos
(
echo export default function ListaMandamentos^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\ListaMandamentos\ListaMandamentos.tsx"
echo /* listaMandamentos.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\ListaMandamentos\listaMandamentos.module.css"

REM MandamentoCard
(
echo 'use client'
echo export default function MandamentoCard^(^) {
echo   return ^(
echo     ^<div^>
echo       {/* conteudo aqui */}
echo     ^</div^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoCard\MandamentoCard.tsx"
echo /* mandamentoCard.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoCard\mandamentoCard.module.css"

REM MandamentoDetalhado
(
echo export default function MandamentoDetalhado^(^) {
echo   return ^(
echo     ^<div^>
echo       {/* conteudo aqui */}
echo     ^</div^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoDetalhado\MandamentoDetalhado.tsx"
echo /* mandamentoDetalhado.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\MandamentoDetalhado\mandamentoDetalhado.module.css"

REM CitacaoBiblica
(
echo export default function CitacaoBiblica^(^) {
echo   return ^(
echo     ^<blockquote^>
echo       {/* conteudo aqui */}
echo     ^</blockquote^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\CitacaoBiblica\CitacaoBiblica.tsx"
echo /* citacaoBiblica.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\CitacaoBiblica\citacaoBiblica.module.css"

REM TabelaNumeracao
(
echo export default function TabelaNumeracao^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\TabelaNumeracao\TabelaNumeracao.tsx"
echo /* tabelaNumeracao.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\TabelaNumeracao\tabelaNumeracao.module.css"

REM NovoTestamento
(
echo export default function NovoTestamento^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\NovoTestamento\NovoTestamento.tsx"
echo /* novoTestamento.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\NovoTestamento\novoTestamento.module.css"

REM ExameConsciencia
(
echo export default function ExameConsciencia^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\ExameConsciencia\ExameConsciencia.tsx"
echo /* exameConsciencia.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\ExameConsciencia\exameConsciencia.module.css"

REM Conexoes
(
echo export default function Conexoes^(^) {
echo   return ^(
echo     ^<section^>
echo       {/* conteudo aqui */}
echo     ^</section^>
echo   ^);
echo }
) > "src\app\estudos\mandamentos\dez-mandamentos\_components\Conexoes\Conexoes.tsx"
echo /* conexoes.module.css */ > "src\app\estudos\mandamentos\dez-mandamentos\_components\Conexoes\conexoes.module.css"

REM DATA
(
echo import { Mandamento } from '@/types/estudos/mandamentos/mandamento';
echo.
echo export const dezMandamentos: Mandamento[] = [];
) > "src\data\estudos\mandamentos\dezMandamentos.ts"

REM TYPES
(
echo export interface CitacaoBiblica {
echo   texto: string;
echo   referencia: string;
echo }
echo.
echo export type Tabua = 'primeira' ^| 'segunda';
echo.
echo export interface Mandamento {
echo   id: number;
echo   numero: string;
echo   titulo: string;
echo   textoCatequetico: string;
echo   textoBiblico: string;
echo   referenciaBiblica: string;
echo   tabua: Tabua;
echo   explicacao: string;
echo   oqueDeusOrdena: string[];
echo   oqueDeusProibe: string[];
echo   catecismoReferencia: string;
echo   citacoesRelacionadas: CitacaoBiblica[];
echo   aplicacaoModerna: string;
echo   perguntasExame: string[];
echo }
) > "src\types\estudos\mandamentos\mandamento.ts"

echo.
echo ============================================
echo   ESTRUTURA CRIADA COM SUCESSO!
echo ============================================
echo.
pause