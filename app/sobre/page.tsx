import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre o Lux Fidei | Luz da Fé Católica',
  description: 'Conheça o propósito, a linha editorial e o compromisso hagiográfico do portal Lux Fidei com a Tradição Católica e as fontes primárias.',
};

export default function SobrePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'serif', color: '#2c2421', lineHeight: '1.8' }}>
      <header style={{ borderBottom: '1px solid #d4b872', paddingBottom: '20px', marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#8c6d3b', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          ← Voltar ao Início
        </Link>
        <h1 style={{ fontSize: '32px', marginTop: '15px', color: '#1a1412' }}>Sobre o Lux Fidei</h1>
        <p style={{ fontSize: '15px', color: '#666', fontStyle: 'italic' }}>A sabedoria de dois mil anos ao alcance de quem busca.</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>1. Nossa Missão</h2>
        <p>
          O <strong>Lux Fidei</strong> é uma biblioteca e enciclopédia digital independente dedicada à preservação, pesquisa e divulgação da hagiografia, liturgia, patristica e doutrina da Igreja Católica Apostólica Romana.
        </p>
        <p>
          Nossa missão é oferecer a estudantes, pesquisadores e fiéis um acervo organizado, esteticamente digno e fundamentado na Verdade histórica e espiritual transmitida ao longo de dois milênios.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>2. Rigor Histórico e Fontes Primárias</h2>
        <p>
          Buscamos pautar todo o nosso acervo hagiográfico e doutrinário em documentos e edições de reconhecido valor histórico e teológico. Nossas biografias e estudos fundamentam-se em:
        </p>
        <ul>
          <li><strong>Processos de Canonização e Acta Sanctorum:</strong> Registros históricos e depoimentos documentados nos processos formais da Santa Sé.</li>
          <li><strong>Escritos dos Padres e Doutores da Igreja:</strong> Obras patrísticas e textos teológicos em edições críticas e traduções de domínio público.</li>
          <li><strong>Magistério e Liturgia:</strong> Documentos conciliares, o Catecismo da Igreja Católica e os martirológios oficiais romanos.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>3. Independência e Gratuidade</h2>
        <p>
          O Lux Fidei é um projeto cultural e educativo mantido de forma independente. O acesso a todas as biografias, textos da Vulgata, estudos conciliares e recursos litúrgicos é e permanecerá inteiramente gratuito para todos os visitantes.
        </p>
      </section>

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #d4b872', textAlign: 'center', fontSize: '13px', color: '#777' }}>
        <p>© {new Date().getFullYear()} Lux Fidei — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
