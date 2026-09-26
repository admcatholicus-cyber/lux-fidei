import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Crisma: O Sacramento da Confirmação e os 7 Dons do Espírito Santo',
  description: 'Aprofunde-se na teologia e história da Crisma: o rito do crisma, os dons do Espírito Santo, o caráter indelével e o testemunho cristão.',
  path: '/estudos/sacramentos/crisma',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}