// estudos/concilios/calcedonia/_components/MapaPatriarcados.tsx
// Mapa esquemático da Pentarquia circa 451 d.C.
// NOTA: fronteiras aproximadas, sem valor de detalhe.

export default function MapaPatriarcados() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
        role="img"
        aria-label="Mapa esquemático da Pentarquia circa 451"
      >
        {/* Fundo */}
        <rect width="800" height="500" fill="#f7f1e5" />

        {/* Mares */}
        <ellipse cx="350" cy="280" rx="120" ry="70" fill="#c5d4e8" opacity="0.5" />
        <text x="350" y="285" textAnchor="middle" fill="#5a7a9a" fontSize="11" fontStyle="italic">
          Mar Mediterrâneo
        </text>

        <ellipse cx="500" cy="180" rx="40" ry="55" fill="#c5d4e8" opacity="0.4" />
        <text x="500" y="185" textAnchor="middle" fill="#5a7a9a" fontSize="9" fontStyle="italic">
          Mar Negro
        </text>

        {/* Itália */}
        <path
          d="M130,140 L160,120 L180,150 L170,200 L140,230 L110,200 L110,170 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="1.5"
        />
        <text x="145" y="175" textAnchor="middle" fill="#5b2c83" fontSize="9" fontWeight="600">
          Itália
        </text>

        {/* Grécia / Bálcãs */}
        <path
          d="M200,150 L240,130 L270,160 L250,200 L210,210 L190,180 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="1.5"
        />
        <text x="230" y="175" textAnchor="middle" fill="#5b2c83" fontSize="9" fontWeight="600">
          Grécia
        </text>

        {/* Ásia Menor */}
        <path
          d="M300,130 L420,110 L520,140 L540,200 L480,250 L380,270 L290,230 L280,180 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="1.5"
        />
        <text x="410" y="195" textAnchor="middle" fill="#5b2c83" fontSize="9" fontWeight="600">
          Ásia Menor
        </text>

        {/* Egito */}
        <path
          d="M300,320 L380,300 L400,350 L380,420 L320,430 L280,380 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="1.5"
        />
        <text x="340" y="370" textAnchor="middle" fill="#5b2c83" fontSize="9" fontWeight="600">
          Egito
        </text>

        {/* Síria / Levante */}
        <path
          d="M460,250 L520,230 L540,280 L530,340 L480,360 L440,320 L450,270 Z"
          fill="#d4c5a9"
          stroke="#8b6508"
          strokeWidth="1.5"
        />
        <text x="490" y="300" textAnchor="middle" fill="#5b2c83" fontSize="9" fontWeight="600">
          Síria
        </text>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PATRIARCADOS                                                   */}
        {/* ═══════════════════════════════════════════════════════════════ */}

        {/* 1. Roma */}
        <circle cx="140" cy="185" r="10" fill="#bd3a29" stroke="#fff" strokeWidth="2.5" />
        <text x="140" y="165" textAnchor="middle" fill="#bd3a29" fontSize="12" fontWeight="bold">
          1. Roma
        </text>
        <text x="140" y="155" textAnchor="middle" fill="#bd3a29" fontSize="8">
          Primazia de honra
        </text>

        {/* 2. Constantinopla */}
        <circle cx="280" cy="145" r="10" fill="#bd3a29" stroke="#fff" strokeWidth="2.5" />
        <text x="280" y="125" textAnchor="middle" fill="#bd3a29" fontSize="12" fontWeight="bold">
          2. Constantinopla
        </text>
        <text x="280" y="115" textAnchor="middle" fill="#bd3a29" fontSize="8">
          Nova Roma (Cânon 28)
        </text>

        {/* 3. Alexandria */}
        <circle cx="340" cy="390" r="10" fill="#bd3a29" stroke="#fff" strokeWidth="2.5" />
        <text x="340" y="415" textAnchor="middle" fill="#bd3a29" fontSize="12" fontWeight="bold">
          3. Alexandria
        </text>
        <text x="340" y="425" textAnchor="middle" fill="#bd3a29" fontSize="8">
          Sé de Marcos
        </text>

        {/* 4. Antioquia */}
        <circle cx="490" cy="270" r="10" fill="#bd3a29" stroke="#fff" strokeWidth="2.5" />
        <text x="490" y="255" textAnchor="middle" fill="#bd3a29" fontSize="12" fontWeight="bold">
          4. Antioquia
        </text>
        <text x="490" y="245" textAnchor="middle" fill="#bd3a29" fontSize="8">
          Sé de Pedro
        </text>

        {/* 5. Jerusalém */}
        <circle cx="470" cy="350" r="10" fill="#bd3a29" stroke="#fff" strokeWidth="2.5" />
        <text x="470" y="340" textAnchor="middle" fill="#bd3a29" fontSize="12" fontWeight="bold">
          5. Jerusalém
        </text>
        <text x="470" y="330" textAnchor="middle" fill="#bd3a29" fontSize="8">
          Sé da Ressurreição
        </text>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SEDES SECUNDÁRIAS                                              */}
        {/* ═══════════════════════════════════════════════════════════════ */}

        {/* Éfeso */}
        <circle cx="380" cy="220" r="6" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="398" y="223" textAnchor="start" fill="#8b6508" fontSize="9">
          Éfeso (sede sufragânea)
        </text>

        {/* Gangra */}
        <circle cx="360" cy="165" r="5" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="375" y="168" textAnchor="start" fill="#8b6508" fontSize="9">
          Gangra
        </text>

        {/* Calcedônia */}
        <circle cx="295" cy="150" r="5" fill="#8b6508" stroke="#fff" strokeWidth="1.5" />
        <text x="310" y="153" textAnchor="start" fill="#8b6508" fontSize="9">
          Calcedônia
        </text>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* ZONAS DE INFLUÊNCIA (sombreado)                                 */}
        {/* ═══════════════════════════════════════════════════════════════ */}

        {/* Influência romana */}
        <circle cx="140" cy="185" r="45" fill="none" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
        <text x="90" y="230" fill="#bd3a29" fontSize="7" opacity="0.6">
          Influência de Roma
        </text>

        {/* Influência constantinopolitana */}
        <circle cx="280" cy="145" r="55" fill="none" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
        <text x="230" y="100" fill="#bd3a29" fontSize="7" opacity="0.6">
          Influência de Constantinopla
        </text>

        {/* Influência alexandrina */}
        <circle cx="340" cy="390" r="50" fill="none" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
        <text x="290" y="445" fill="#bd3a29" fontSize="7" opacity="0.6">
          Influência de Alexandria
        </text>

        {/* Influência antioquena */}
        <circle cx="490" cy="270" r="45" fill="none" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
        <text x="540" y="275" fill="#bd3a29" fontSize="7" opacity="0.6">
          Influência de Antioquia
        </text>

        {/* Influência jerussolimitana */}
        <circle cx="470" cy="350" r="35" fill="none" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
        <text x="510" y="355" fill="#bd3a29" fontSize="7" opacity="0.6">
          Influência de Jerusalém
        </text>

        {/* Legenda */}
        <rect x="590" y="350" width="195" height="130" fill="#fff" stroke="#e0d7c6" strokeWidth="1" rx="6" />
        <text x="600" y="370" fill="#3a1f5c" fontSize="10" fontWeight="bold">Legenda</text>
        <circle cx="606" cy="388" r="5" fill="#bd3a29" />
        <text x="618" y="391" fill="#3e3328" fontSize="9">Patriarcado (1º–5º)</text>
        <circle cx="606" cy="408" r="4" fill="#8b6508" />
        <text x="618" y="411" fill="#3e3328" fontSize="9">Sede secundária</text>
        <line x1="600" y1="425" x2="620" y2="425" stroke="#bd3a29" strokeWidth="1" strokeDasharray="4,3" />
        <text x="628" y="428" fill="#3e3328" fontSize="9">Zona de influência</text>
        <rect x="600" y="440" width="12" height="12" fill="#d4c5a9" stroke="#8b6508" strokeWidth="1" />
        <text x="618" y="451" fill="#3e3328" fontSize="9">Região do patriarcado</text>
      </svg>
      <p style={{ fontSize: '0.78rem', color: 'var(--calc-text-faint)', fontStyle: 'italic', marginTop: '0.5rem' }}>
        Mapa esquemático, sem valor de detalhe — fronteiras aproximadas dos patriarcados da Pentarquia circa 451 d.C.
      </p>
    </div>
  );
}
