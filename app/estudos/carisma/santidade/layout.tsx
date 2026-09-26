import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Santidade: O Chamado Universal à Perfeição Cristã',
  description: 'Compêndio teológico sobre a santidade: a graça, as virtudes, os carismas e o mandato de Cristo para todo batizado viver em plenitude.',
  path: '/estudos/carisma/santidade',
});

// ESTA PARTE ESTAVA FALTANDO OU COM ERRO:
export default function SantidadeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}