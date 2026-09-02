import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import SantoHeader from '../../_components/layout/SantoHeader';
import SantoTabs from '../../_components/layout/SantoTabs';
import BotaoVoltar from '../../_components/layout/BotaoVoltar';
import NavegacaoAbas from '../../_components/layout/NavegacaoAbas';

// ✨ NOVOS
import { SettingsProvider } from '../../_components/layout/SettingsProvider';
import SettingsButton from '../../_components/layout/SettingsButton';
import BackToTop from '../../_components/layout/BackToTop';

import styles from '../../_styles/santo.module.css';

/**
 * Carrega dinamicamente o meta do santo baseado na URL
 */
async function carregarMeta(categoria: string, slug: string) {
  try {
    const mod = await import(`../../_content/${categoria}/${slug}/meta`);
    return mod.meta;
  } catch (err) {
    console.error(`[SantoLayout] Meta não encontrado: ${categoria}/${slug}`, err);
    return null;
  }
}

const ABAS_WIDE = ['frases', 'arte'];

export default async function SantoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;
  const meta = await carregarMeta(categoria, slug);

  if (!meta) {
    notFound();
  }

  const headersList = await headers();
  const pathname =
    headersList.get('x-invoke-path') ||
    headersList.get('x-pathname') ||
    '';

  const isWide = ABAS_WIDE.some((aba) => pathname.endsWith(`/${aba}`));

  return (
    // ✨ Provider envolve TUDO (para o context estar disponível)
    <SettingsProvider>
      <div className={styles.page}>
        {/* ✨ Botão de configurações no canto superior direito */}
        <SettingsButton />

        {/* Botão de voltar fixo no canto superior esquerdo */}
        <BotaoVoltar />

        <div className={styles.wrap}>
          <SantoHeader
            nome={meta.nome}
            titulo={meta.titulo}
            subtitulo={meta.subtitulo}
          />
          <SantoTabs
            categoria={meta.categoria}
            slug={meta.slug}
            abas={meta.abas}
          />
        </div>

        <main className={isWide ? styles.mainWide : styles.main}>
          {children}

          <NavegacaoAbas
            categoria={meta.categoria}
            slug={meta.slug}
            abas={meta.abas}
          />
        </main>

        {/* ✨ Botão voltar ao topo no canto inferior esquerdo */}
        <BackToTop />
      </div>
    </SettingsProvider>
  );
}