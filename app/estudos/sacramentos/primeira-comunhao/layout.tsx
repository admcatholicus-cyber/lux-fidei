import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Primeira Comunhão: Doutrina Eucarística, Presença Real e Preparação',
  description: 'Guia teológico e pastoral sobre a Primeira Comunhão: a transubstanciação, a Presença Real de Jesus na Eucaristia e a vida de oração.',
  path: '/estudos/sacramentos/primeira-comunhao',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}