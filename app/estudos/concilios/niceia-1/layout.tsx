import { createStudyMetadata } from '../../seo-helper';
export const metadata = createStudyMetadata({
  title: 'Primeiro Concílio de Niceia (325 d.C.): História, Arianismo e o Credo',
  description: 'Estudo histórico e dogmático do Concílio de Niceia I: o combate à heresia de Ário, a afirmação da divindade de Cristo e a origem do Credo Niceno.',
  path: '/estudos/concilios/niceia-1',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
