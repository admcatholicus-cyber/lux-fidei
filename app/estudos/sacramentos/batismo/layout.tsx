import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'O Batismo: Significado, Teologia, Rito e Efeitos Espirituais',
  description: 'Estudo completo sobre o sacramento do Batismo: fundamentos bíblicos, história, rito, a graça santificante e os efeitos na alma do cristão.',
  path: '/estudos/sacramentos/batismo',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}