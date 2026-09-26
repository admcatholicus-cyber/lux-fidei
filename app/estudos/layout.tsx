import { createStudyMetadata } from './seo-helper';

export const metadata = createStudyMetadata({
  title: 'Centro de Estudos da Fé Católica',
  description: 'Aprofunde-se na fé católica: estudos sobre sacramentos, mandamentos, concílios, liturgia, hagiografia e teologia com fidelidade ao Magistério.',
  path: '/estudos',
});

export default function EstudosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}