import { createStudyMetadata } from '../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Calendário Litúrgico Católico: Tempos, Festas e Cores Litúrgicas',
  description:
    'Entenda a estrutura do Ano Litúrgico católico: Advento, Natal, Quaresma, Tríduo Pascal, Páscoa, Tempo Comum e o significado das cores.',
  path: '/estudos/calendario',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}