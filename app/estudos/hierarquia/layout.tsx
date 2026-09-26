import { createStudyMetadata } from '@/app/estudos/seo-helper';

export const metadata = createStudyMetadata({
  title: 'Vocações e Hierarquia da Igreja Católica: Do Papa aos Leigos',
  description: 'Conheça a constituição hierárquica da Igreja fundada por Cristo: o Papa, os bispos, sacerdotes, diáconos, religiosos e a vocação dos leigos.',
  path: '/estudos/hierarquia',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}