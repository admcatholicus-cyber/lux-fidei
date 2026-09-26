import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a1412',
      color: '#ece7dc',
      borderTop: '1px solid #d4b872',
      padding: '30px 20px 20px',
      marginTop: '60px',
      fontSize: '13px',
      textAlign: 'center',
      fontFamily: 'serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '14px' }}>
          <Link href="/" style={{ color: '#d4b872', textDecoration: 'none' }}>Início</Link>
          <Link href="/santos" style={{ color: '#d4b872', textDecoration: 'none' }}>Santos</Link>
          <Link href="/sobre" style={{ color: '#d4b872', textDecoration: 'none' }}>Sobre</Link>
          <Link href="/contato" style={{ color: '#d4b872', textDecoration: 'none' }}>Contato</Link>
          <Link href="/privacidade" style={{ color: '#d4b872', textDecoration: 'none' }}>Política de Privacidade</Link>
          <Link href="/termos-de-uso" style={{ color: '#d4b872', textDecoration: 'none' }}>Termos de Uso</Link>
        </div>
        <p style={{ color: '#999', margin: '10px 0 0', fontSize: '12px' }}>
          © {new Date().getFullYear()} Lux Fidei · <em>Omnia ad maiorem Dei gloriam</em>
        </p>
      </div>
    </footer>
  );
}
