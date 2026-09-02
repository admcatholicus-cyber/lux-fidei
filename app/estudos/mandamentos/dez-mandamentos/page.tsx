import styles from './dezMandamentos.module.css'
import './_styles/variables.css'
import { dezMandamentos } from '@/data/estudos/mandamentos/dezMandamentos'
import BarraNavegacao from './_components/BarraNavegacao/BarraNavegacao'
import HeroSection from './_components/HeroSection/HeroSection'
import MonteSinai from './_components/MonteSinai/MonteSinai'
import DuasVersoes from './_components/DuasVersoes/DuasVersoes'
import DuasTabuas from './_components/DuasTabuas/DuasTabuas'
import ListaMandamentos from './_components/ListaMandamentos/ListaMandamentos'
import TabelaNumeracao from './_components/TabelaNumeracao/TabelaNumeracao'
import SantoAgostinho from './_components/SantoAgostinho/SantoAgostinho'
import NovoTestamento from './_components/NovoTestamento/NovoTestamento'
import ExameConsciencia from './_components/ExameConsciencia/ExameConsciencia'
import PerguntasFrequentes from './_components/PerguntasFrequentes/PerguntasFrequentes'

export const metadata = {
  title: "Os Dez Mandamentos — Decálogo",
  description: "Conheça em profundidade os Dez Mandamentos de Deus."
}

export default function DezMandamentosPage() {
  return (
    <>
      <BarraNavegacao />
      <main className={styles.pagina}>
        <HeroSection />
        <MonteSinai />
        <DuasVersoes />
        <DuasTabuas />
        <ListaMandamentos mandamentos={dezMandamentos} />
        <TabelaNumeracao />
        <SantoAgostinho />
        <NovoTestamento />
        <ExameConsciencia />
        <PerguntasFrequentes />
      </main>
    </>
  )
}