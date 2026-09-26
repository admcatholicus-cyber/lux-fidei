import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato e Linha Editorial | Lux Fidei',
  description: 'Entre em contato com a equipe editorial do Lux Fidei para dúvidas, sugestões, correções hagiográficas ou colaborações.',
};

export default function ContatoPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'serif', color: '#2c2421', lineHeight: '1.8' }}>
      <header style={{ borderBottom: '1px solid #d4b872', paddingBottom: '20px', marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#8c6d3b', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          ← Voltar ao Início
        </Link>
        <h1 style={{ fontSize: '32px', marginTop: '15px', color: '#1a1412' }}>Contato e Atendimento</h1>
        <p style={{ fontSize: '15px', color: '#666', fontStyle: 'italic' }}>Canais diretos de comunicação com a equipe do Lux Fidei.</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <p>
          Apreciamos a interlocução com nossos leitores, pesquisadores e estudantes. Se você possui dúvidas sobre algum texto, identificou alguma imprecisão histórica ou deseja enviar sugestões para o nosso acervo, utilize o canal de comunicação abaixo.
        </p>
      </section>

      <section style={{ marginBottom: '30px', backgroundColor: '#faf7f0', padding: '24px', borderRadius: '8px', border: '1px solid #d4b872' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', marginTop: '0', marginBottom: '15px' }}>Correio Eletrônico Editorial</h2>
        <p style={{ fontSize: '16px', margin: '0 0 10px 0' }}>
          <strong>E-mail oficial:</strong>{' '}
          <a href="mailto:comosercatolico@gmail.com" style={{ color: '#8c6d3b', fontWeight: 'bold' }}>
            comosercatolico@gmail.com
          </a>
        </p>
        <p style={{ fontSize: '13px', color: '#666', margin: '0' }}>
          Respondemos a todas as mensagens enviadas por leitores no prazo de 24 a 48 horas úteis.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Revisões e Correções Hagiográficas</h2>
        <p>
          Caso queira apontar alguma correção ortográfica, citação bibliográfica ausente ou nota histórica sobre a vida de algum santo, pedimos a gentileza de incluir no e-mail a URL da página e a fonte de referência recomendada.
        </p>
      </section>

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #d4b872', textAlign: 'center', fontSize: '13px', color: '#777' }}>
        <p>© {new Date().getFullYear()} Lux Fidei — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
