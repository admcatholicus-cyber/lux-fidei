import './styles/globals.css'
import './styles/components.css'
import './styles/layout.css'
import { createStudyMetadata } from '../../seo-helper';

export const metadata = createStudyMetadata({
  title: 'Corpus Christi: Solenidade, Tapetes, Procissão e Milagres Eucarísticos',
  description: 'História e liturgia da Solenidade de Corpus Christi: Santa Juliana de Cornillon, o Milagre de Bolsena, a tradição dos tapetes e a procissão.',
  path: '/estudos/datas-comemorativas/Corpus-Christi',
});
export default function CorpusChristiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

