// estudos/concilios/calcedonia/_components/MapaImperio.tsx
// Mapa esquemático do Império Romano do Oriente circa 451 d.C.
// NOTA: fronteiras aproximadas, sem valor de detalhe.

export default function MapaImperio() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
        role="img"
        aria-label="Mapa esquemático do Império Romano do Oriente circa 451"
      >
        {/* Fundo */}
        <rect width="800" height="500" fill="#f7f1e5" />

        {/* Mares */}
        <ellipse cx="350" cy="280" rx="130" ry="80" fill="#c5d4e8" opacity="0.5" />
        <text x="350" y="285" textAnchor="middle" fill="#5a7a9a" fontSize="11" fontStyle="italic">
          Mar Mediterrâneo
        </text>

        <ellipse cx="520" cy="180" rx="40" ry="60" fill="#c5d4e8" opacity="0.4" />
        <text x="520" y="185" textAnchor="middle" fill="#5a7a9a" fontSize="9" fontStyle="italic">
          Mar Negro
        </text>

        <ellipse cx="200" cy="200" rx="30" ry="50" fill="#c5d4e8" opacity="0.4" />
        <text x="200" y="205" textAnchor="middle" fill="#5a7a9a" fontSize="9" fontStyle="italic">
          Mar Adriático
        </text>

        {/* Império Ocidental (sombreado) */}
        <path
          d="M80,120 L130,100 L170,130 L190,180 L160,230 L120,260 L80,240 L60,190 Z"
          fill="#e8ddd0"
          stroke="#8a7e74"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        <text x="120" y="185" textAnchor="middle" fill="#8a7e74" fontSize="9">
          Imp. Ocidental
        </text>

        {/* Império Oriental (destacado) */}
        <path
          d="M180,100 L280,80 L400,90 L520,110 L580,140 L600,180 L580,220 L530,260 L450,290 L370,310 L280,290 L200,250 L160,210 L160,160 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="2"
        />
        <text x="380" y="155" textAnchor="middle" fill="#8b6508" fontSize="12" fontWeight="bold">
          IMPÉRIO ROMANO DO ORIENTE
        </text>

        {/* Regiões */}
        <text x="220" y="200" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Trácia
        </text>
        <text x="350" y="200" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Bitínia
        </text>
        <text x="470" y="210" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Ponto
        </text>
        <text x="300" y="270" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Galácia
        </text>
        <text x="420" y="280" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Capadócia
        </text>
        <text x="550" y="230" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Armênia (bizantina)
        </text>
        <text x="250" y="330" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Ásia Menor
        </text>
        <text x="440" y="340" textAnchor="middle" fill="#5b2c83" fontSize="10" fontWeight="600">
          Cilícia
        </text>

        {/* Cidades principais */}
        {/* Constantinopla */}
        <circle cx="250" cy="140" r="8" fill="#bd3a29" stroke="#fff" strokeWidth="2" />
        <text x="250" y="125" textAnchor="middle" fill="#bd3a29" fontSize="11" fontWeight="bold">
          Constantinopla
        </text>

        {/* Roma */}
        <circle cx="100" cy="195" r="7" fill="#3a1f5c" stroke="#fff" strokeWidth="2" />
        <text x="100" y="178" textAnchor="middle" fill="#3a1f5c" fontSize="11" fontWeight="bold">
          Roma
        </text>

        {/* Alexandria */}
        <circle cx="300" cy="420" r="7" fill="#3a1f5c" stroke="#fff" strokeWidth="2" />
        <text x="300" y="440" textAnchor="middle" fill="#3a1f5c" fontSize="11" fontWeight="bold">
          Alexandria
        </text>

        {/* Antioquia */}
        <circle cx="480" cy="280" r="7" fill="#3a1f5c" stroke="#fff" strokeWidth="2" />
        <text x="480" y="265" textAnchor="middle" fill="#3a1f5c" fontSize="11" fontWeight="bold">
          Antioquia
        </text>

        {/* Jerusalém */}
        <circle cx="420" cy="380" r="7" fill="#3a1f5c" stroke="#fff" strokeWidth="2" />
        <text x="420" y="400" textAnchor="middle" fill="#3a1f5c" fontSize="11" fontWeight="bold">
          Jerusalém
        </text>

        {/* Calcedônia */}
        <circle cx="270" cy="145" r="5" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="285" y="155" textAnchor="start" fill="#8b6508" fontSize="9">
          Calcedônia
        </text>

        {/* Éfeso */}
        <circle cx="340" cy="230" r="5" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="355" y="233" textAnchor="start" fill="#8b6508" fontSize="9">
          Éfeso
        </text>

        {/* Gangra */}
        <circle cx="380" cy="175" r="5" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="395" y="178" textAnchor="start" fill="#8b6508" fontSize="9">
          Gangra
        </text>

        {/* Sásidas */}
        <path
          d="M600,120 L700,100 L720,200 L680,300 L600,280 L580,200 Z"
          fill="#f0e6d0"
          stroke="#8a7e74"
          strokeWidth="1"
          strokeDasharray="3,2"
        />
        <text x="660" y="200" textAnchor="middle" fill="#8a7e74" fontSize="9">
          Império Sassânida
        </text>

        {/* Legenda */}
        <rect x="590" y="350" width="190" height="120" fill="#fff" stroke="#e0d7c6" strokeWidth="1" rx="6" />
        <text x="600" y="370" fill="#3a1f5c" fontSize="10" fontWeight="bold">Legenda</text>
        <rect x="600" y="380" width="12" height="12" fill="#d4c5a9" stroke="#8b6508" strokeWidth="1" />
        <text x="618" y="391" fill="#3e3328" fontSize="9">Império Oriental</text>
        <rect x="600" y="400" width="12" height="12" fill="#e8ddd0" stroke="#8a7e74" strokeWidth="1" />
        <text x="618" y="411" fill="#3e3328" fontSize="9">Império Ocidental</text>
        <rect x="600" y="420" width="12" height="12" fill="#f0e6d0" stroke="#8a7e74" strokeWidth="1" />
        <text x="618" y="431" fill="#3e3328" fontSize="9">Império Sassânida</text>
        <circle cx="606" cy="448" r="4" fill="#bd3a29" />
        <text x="618" y="451" fill="#3e3328" fontSize="9">Capital</text>
        <circle cx="606" cy="462" r="3" fill="#8b6508" />
        <text x="618" y="465" fill="#3e3328" fontSize="9">Cidade importante</text>
      </svg>
      <p style={{ fontSize: '0.78rem', color: 'var(--calc-text-faint)', fontStyle: 'italic', marginTop: '0.5rem' }}>
        Mapa esquemático, sem valor de detalhe — fronteiras aproximadas do Império Romano do Oriente circa 451 d.C.
      </p>
    </div>
  );
}
