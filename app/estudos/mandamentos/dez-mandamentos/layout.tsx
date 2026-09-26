import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Os 10 Mandamentos da Lei de Deus: Explicação Catequética e Teológica',
  description: 'Estudo detalhado sobre o Decálogo: o significado de cada um dos dez mandamentos segundo o Catecismo da Igreja Católica.',
  path: '/estudos/mandamentos/dez-mandamentos',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}