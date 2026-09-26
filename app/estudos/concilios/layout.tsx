import { createStudyMetadata } from '../seo-helper';
export const metadata = createStudyMetadata({
  title: 'Concílios Ecumênicos da Igreja Católica: História e Decisões Dogmáticas',
  description: 'Guia completo dos 21 Concílios Ecumênicos reconhecidos pela Igreja Católica, de Niceia I ao Vaticano II.',
  path: '/estudos/concilios',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}