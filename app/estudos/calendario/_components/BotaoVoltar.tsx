'use client';

import Link from 'next/link';

export default function BotaoVoltar({ href = '/estudos', label = 'Voltar' }: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 100,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 18px 10px 14px',
        background: 'rgba(26, 20, 13, 0.92)',
        color: '#c8a870',
        border: '1px solid rgba(200, 168, 112, 0.35)',
        borderRadius: '999px',
        fontFamily: 'Cinzel, Georgia, serif',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(154, 122, 58, 0.95)';
        e.currentTarget.style.color = '#f0e6cc';
        e.currentTarget.style.transform = 'translateX(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(26, 20, 13, 0.92)';
        e.currentTarget.style.color = '#c8a870';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      {/* Seta em SVG */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      {label}
    </Link>
  );
}