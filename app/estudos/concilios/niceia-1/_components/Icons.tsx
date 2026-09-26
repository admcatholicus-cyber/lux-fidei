interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

const defaultProps = { size: 18 }

export function IconConcilio(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M10 10h.01" /><path d="M14 10h.01" />
    </svg>
  )
}

export function IconGlobe(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function IconDebates(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function IconStop(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export function IconDNA(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="M17 6l-2.5-2.5" /><path d="M14 8l-1-1" /><path d="M7 18l2.5 2.5" /><path d="M3.5 14.5l.5.5" /><path d="M20 9l.5.5" /><path d="M6.5 12.5l1 1" /><path d="M16.5 10.5l1 1" />
    </svg>
  )
}

export function IconMicroscope(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}

export function IconCross(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M12 2v20" /><path d="M2 12h20" />
    </svg>
  )
}

export function IconBook(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

export function IconScales(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <line x1="12" y1="3" x2="12" y2="21" /><polyline points="8 7 4 11 8 15" /><polyline points="16 7 20 11 16 15" /><line x1="4" y1="11" x2="20" y2="11" />
    </svg>
  )
}

export function IconMoon(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function IconScissors(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

export function IconHourglass(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  )
}

export function IconCycle(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}

export function IconPencil(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  )
}

export function IconGlobeLines(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function IconCandle(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    </svg>
  )
}

export function IconXmark(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
}

export function IconPalette(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

export function IconParty(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M5.8 11.3L2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" /><path d="M22 2L12 12" /><path d="M9.5 10.5L2 22" />
    </svg>
  )
}

export function IconFlask(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M9 3h6" /><path d="M10 3v7.4a2 2 0 0 1-.5 1.3L4 18a2 2 0 0 0 1.5 3h13a2 2 0 0 0 1.5-3l-5.5-6.3a2 2 0 0 1-.5-1.3V3" />
    </svg>
  )
}

export function IconBooks(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="13" y2="11" />
    </svg>
  )
}

export function IconScroll(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" />
    </svg>
  )
}

export function IconMountain(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M8 3l4 8 5-5 3 14H2L8 3z" />
    </svg>
  )
}

export function IconWind(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  )
}

export function IconPin(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconArrowRight(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function IconCheck(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function IconWarning(p: IconProps = defaultProps) {
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={p.className} style={p.style}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
