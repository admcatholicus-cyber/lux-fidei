import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Lux Fidei',
  description: 'Política de Privacidade, Uso de Cookies, LGPD e Termos de Uso do portal Lux Fidei.',
};

export default function PrivacidadePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'serif', color: '#2c2421', lineHeight: '1.8' }}>
      <header style={{ borderBottom: '1px solid #d4b872', paddingBottom: '20px', marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#8c6d3b', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          ← Voltar ao Início
        </Link>
        <h1 style={{ fontSize: '32px', marginTop: '15px', color: '#1a1412' }}>Política de Privacidade e Proteção de Dados</h1>
        <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>Última atualização: Setembro de 2026</p>
      </header>

      <section style={{ marginBottom: '25px' }}>
        <p>
          O portal <strong>Lux Fidei</strong> (disponível em <code>https://lux-fidei.vercel.app</code>) tem como compromisso a transparência, a integridade e o respeito à privacidade dos seus visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações quando você navega em nosso site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e com os requisitos do programa Google AdSense.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>1. Coleta e Tratamento de Dados Pessoais</h2>
        <p>
          O Lux Fidei não exige cadastro, criação de contas ou fornecimento de informações pessoais identificáveis (como nome, CPF, endereço ou telefone) para a leitura do portal. A navegação é livre e gratuita. Para o funcionamento técnico, segurança e análise estatística, dados anônimos de navegação e desempenho são processados via parceiros de tecnologia (como Google Analytics e Google AdSense), cujas preferências podem ser gerenciadas diretamente pelo usuário nas configurações do navegador ou da conta Google.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>2. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar estatísticas de acesso e veicular anúncios publicitários personalizados. Os cookies são pequenos arquivos de texto salvos no seu navegador.
        </p>
        <ul>
          <li><strong>Cookies Essenciais:</strong> Necessários para guardar preferências do usuário (como o estado do banner de consentimento).</li>
          <li><strong>Cookies de Desempenho e Análise:</strong> Utilizados via <strong>Google Analytics (ID: G-QKZMHVKNGL)</strong> para contabilizar acessos, páginas mais lidas e métricas de desempenho de forma totalmente anônima e agregada.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>3. Publicidade e Google AdSense (DART Cookie)</h2>
        <p>
          O Lux Fidei utiliza o serviço de publicidade prestado pelo <strong>Google AdSense (ID de Anunciante: ca-pub-30773640736874)</strong>.
        </p>
        <p>
          O Google, como fornecedor terceiro, utiliza cookies para veicular anúncios neste site. Com o uso do <strong>cookie DART</strong>, o Google pode exibir anúncios para os usuários com base nas visitas feitas ao Lux Fidei e a outros sites na Internet.
        </p>
        <p>
          Os usuários podem desativar a publicidade personalizada ou o uso do cookie DART acessando as{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#8c6d3b' }}>
            Configurações de Anúncios do Google
          </a>{' '}
          ou visitando o portal{' '}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#8c6d3b' }}>
            AboutAds.info
          </a>.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>4. Direitos do Titular de Dados (LGPD)</h2>
        <p>
          Nos termos da LGPD (Art. 18), todo usuário possui o direito de solicitar a confirmação do tratamento de seus dados, acesso, correção ou eliminação de informações eventualmente coletadas por serviços terceirizados, bem como a revogação do consentimento para uso de cookies no navegador.
        </p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', color: '#8c6d3b', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>5. Alterações nesta Política e Contato</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos a consulta regular desta página. Para dúvidas, solicitações ou esclarecimentos sobre a proteção de dados, entre em contato pelo e-mail:
        </p>
        <p style={{ fontWeight: 'bold', color: '#8c6d3b' }}>✉ comosercatolico@gmail.com</p>
      </section>

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #d4b872', textAlign: 'center', fontSize: '13px', color: '#777' }}>
        <p>© {new Date().getFullYear()} Lux Fidei — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
