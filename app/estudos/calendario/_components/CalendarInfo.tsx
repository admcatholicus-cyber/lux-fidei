export default function CalendarInfo() {
  return (
    <section
      style={{
        maxWidth: '860px',
        margin: '80px auto 40px',
        padding: '0 24px',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {/* --- HERO --- */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <span style={dividerStyle} />
          <span style={{ color: '#d97706', fontSize: '14px' }}>✦</span>
          <span style={dividerStyle} />
        </div>
        <h2
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#1c1917',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}
        >
          O Ano Litúrgico
        </h2>
        <p
          style={{
            fontSize: '19px',
            color: '#57534e',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto',
            fontStyle: 'italic',
          }}
        >
          Um caminho de fé que nos faz reviver, semana após semana, os mistérios centrais da vida de Cristo.
        </p>
      </div>

      {/* --- CARD PRINCIPAL --- */}
      <div style={cardStyle}>
        <p style={paragraphStyle}>
          O <strong style={strongStyle}>Ano Litúrgico</strong> é o modo como a Igreja Católica organiza a
          celebração dos mistérios da vida de Cristo ao longo do ano. Não é apenas um calendário —
          é um itinerário espiritual que nos faz reviver, semana após semana, os acontecimentos
          centrais da salvação: desde a espera do Messias (<em>Advento</em>) até a manifestação plena
          do Reino (<em>Cristo Rei</em>).
        </p>
      </div>

      {/* --- HISTÓRIA --- */}
      <SectionTitle>Origem e História</SectionTitle>
      <div style={cardStyle}>
        <p style={paragraphStyle}>
          Desde os primeiros séculos, os cristãos celebravam anualmente a <strong style={strongStyle}>Páscoa</strong>
          {' '}— a Ressurreição de Cristo — como o coração da fé. A partir dela, o Ano Litúrgico foi
          se estruturando com o Tríduo Pascal, a Quaresma (preparação batismal), o Tempo Pascal
          (mistagogia) e, mais tarde, o Advento e o Natal.
        </p>
        <p style={{ ...paragraphStyle, marginTop: '16px' }}>
          A forma atual foi consolidada pelo <strong style={strongStyle}>Concílio Vaticano II</strong>{' '}
          (1962–1965) e pela reforma litúrgica que se seguiu, culminando no{' '}
          <em>Calendário Romano Geral</em> (1969), que organiza os tempos e festas celebrados
          universalmente pela Igreja.
        </p>
      </div>

      {/* --- TEMPOS LITÚRGICOS --- */}
      <SectionTitle>Os Tempos Litúrgicos</SectionTitle>
      <div style={{ display: 'grid', gap: '14px' }}>
        <TimeCard color="#C7B8E0" name="Advento" description="Quatro semanas de espera e preparação para o Natal, iniciando o ano litúrgico." />
        <TimeCard color="#F5F1E4" name="Natal" description="Do Natal até o Batismo do Senhor, celebra o mistério da Encarnação." />
        <TimeCard color="#5BA85B" name="Tempo Comum (I)" description="Semanas entre o Batismo do Senhor e a Quaresma, meditando a vida pública de Jesus." />
        <TimeCard color="#B39BC8" name="Quaresma" description="Quarenta dias de conversão e penitência que preparam para a Páscoa." />
        <TimeCard color="#9B2C2C" name="Tríduo Pascal" description="O ápice do ano: Quinta-feira Santa, Sexta-feira Santa e Vigília Pascal." />
        <TimeCard color="#FDFCF7" name="Páscoa" description="Cinquenta dias de alegria pela Ressurreição, culminando em Pentecostes." />
        <TimeCard color="#5BA85B" name="Tempo Comum (II)" description="Do Pentecostes até a Solenidade de Cristo Rei, encerrando o ano litúrgico." />
      </div>

      {/* --- CORES LITÚRGICAS --- */}
      <SectionTitle>As Cores Litúrgicas</SectionTitle>
      <div style={cardStyle}>
        <p style={{ ...paragraphStyle, marginBottom: '20px' }}>
          Cada tempo e celebração tem uma cor própria, usada nos paramentos do celebrante:
        </p>
        <div style={{ display: 'grid', gap: '12px' }}>
          <ColorRow color="#5BA85B" name="Verde" meaning="Tempo Comum — esperança, vida, caminhada" />
          <ColorRow color="#8B5CF6" name="Roxo" meaning="Advento e Quaresma — penitência, espera, conversão" />
          <ColorRow color="#FDFCF7" name="Branco" meaning="Natal, Páscoa, festas do Senhor, de Maria e dos santos" darkText />
          <ColorRow color="#9B2C2C" name="Vermelho" meaning="Ramos, Sexta-feira Santa, Pentecostes, mártires — paixão, fogo, sangue" />
          <ColorRow color="#F9A8D4" name="Rosa" meaning="Domingo Gaudete e Laetare — alegria no tempo penitencial" darkText />
        </div>
      </div>

      {/* --- RODAPÉ --- */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '60px',
          paddingTop: '30px',
          borderTop: '1px solid #e7e5e4',
          fontSize: '14px',
          color: '#a8a29e',
          fontStyle: 'italic',
        }}
      >
        <p>
          As informações desta página seguem o <em>Calendário Romano Geral</em><br />
          e as adaptações para o Brasil aprovadas pela CNBB.
        </p>
      </div>
    </section>
  );
}

// ============================================================
// 🧩 SUBCOMPONENTES
// ============================================================

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#78716c',
        margin: '48px 0 20px',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {children}
    </h3>
  );
}

function TimeCard({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: '#fff',
        padding: '18px 24px',
        borderRadius: '14px',
        border: '1px solid #e7e5e4',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(6px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      }}
    >
      <div
        style={{
          width: '8px',
          height: '48px',
          borderRadius: '4px',
          background: color,
          border: color === '#FDFCF7' || color === '#F5F1E4' ? '1px solid #d6d3d1' : 'none',
          flexShrink: 0,
        }}
      />
      <div>
        <h4
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#1c1917',
            marginBottom: '4px',
            fontFamily: 'Georgia, serif',
          }}
        >
          {name}
        </h4>
        <p style={{ fontSize: '14px', color: '#57534e', lineHeight: 1.5 }}>{description}</p>
      </div>
    </div>
  );
}

function ColorRow({ color, name, meaning, darkText }: { color: string; name: string; meaning: string; darkText?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span
        style={{
          width: '80px',
          padding: '6px 12px',
          background: color,
          color: darkText ? '#1c1917' : '#fff',
          fontSize: '13px',
          fontWeight: 700,
          textAlign: 'center',
          borderRadius: '20px',
          border: darkText ? '1px solid #d6d3d1' : 'none',
          fontFamily: 'system-ui, sans-serif',
          flexShrink: 0,
        }}
      >
        {name}
      </span>
      <span style={{ fontSize: '15px', color: '#44403c', lineHeight: 1.5 }}>{meaning}</span>
    </div>
  );
}

// ============================================================
// 🎨 ESTILOS COMPARTILHADOS
// ============================================================

const paragraphStyle: React.CSSProperties = {
  fontSize: '17px',
  lineHeight: 1.75,
  color: '#292524',
};

const strongStyle: React.CSSProperties = {
  color: '#1c1917',
  fontWeight: 700,
};

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, #fff 0%, #fafaf9 100%)',
  padding: '28px 32px',
  borderRadius: '18px',
  border: '1px solid #e7e5e4',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  marginBottom: '24px',
};

const dividerStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '48px',
  height: '1px',
  background: '#d97706',
};