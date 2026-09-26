import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Lux Fidei',
  description: 'Termos e Condições de Uso do portal Lux Fidei, regras de citação, reprodução e isenção de responsabilidade.',
};

export default function TermosDeUsoPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'serif', color: '#2c2421', lineHeight: '1.8' }}>
      <header style={{ borderBottom: '1px solid #d4b872', paddingBottom: '20px', marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#8c6d3b', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          ← Voltar ao Início
        </Link>
        <h1 style={{ fontSize: '32px', marginTop: '15px', color: '#1a1412' }}>Termos e Condições de Uso</h1>
        <p style={{ fontSize: '15px', color: '#666', fontStyle: 'italic' }}>Regras gerais para consulta, citação e utilização do portal.</p>
      </header>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e navegar pelo portal <strong>Lux Fidei</strong>, você concorda em cumprir e respeitar os presentes Termos de Uso. O conteúdo deste portal destina-se exclusivamente a fins educativos, de pesquisa e devoção pessoal.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>2. Direitos Autorais e Citação</h2>
        <p>
          Grande parte do acervo documental disponibilizado (como o texto da Bíblia Vulgata e obras da Patrística) pertence ao domínio público. As traduções originais, compilações hagiográficas e notas editoriais elaboradas pela equipe do Lux Fidei podem ser citadas livremente para fins pastorais, catequéticos ou acadêmicos, desde que citada a fonte com link direto para o portal.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>3. Isenção de Responsabilidade</h2>
        <p>
          Embora nos esforcemos para garantir a máxima precisão histórica e teológica em nossas publicações, o Lux Fidei não se responsabiliza por eventuais divergências de interpretação ou por falhas temporárias na disponibilidade do serviço.
        </p>
      </section>

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #d4b872', textAlign: 'center', fontSize: '13px', color: '#777' }}>
        <p>© {new Date().getFullYear()} Lux Fidei — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
