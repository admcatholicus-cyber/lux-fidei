import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Os Preceitos da Igreja: Os 5 Mandamentos do Católico',
  description: 'Conheça os cinco preceitos da Santa Mãe Igreja e sua importância para a disciplina espiritual e vida comunitária do cristão.',
  path: '/estudos/mandamentos/mandamentos-igreja',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}