'use client'

import styles from '../niceia-1.module.css'
import { Mito } from '../_data/mitos'

export function MitoCard({ mito, realidade, origem }: Mito) {
  return (
    <div className={styles.caixaAlerta} style={{ marginBottom: '16px', borderLeftColor: '#e74c3c' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ background: '#e74c3c', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px' }}>
          ❌ MITO POPULAR
        </span>
        <strong style={{ fontSize: '1rem', color: '#2c3e50' }}>&ldquo;{mito}&rdquo;</strong>
      </div>
      <p style={{ margin: '8px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>
        <strong>✅ Realidade Histórica:</strong> <span dangerouslySetInnerHTML={{ __html: realidade }} />
      </p>
      {origem && (
        <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#7f8c8d', fontStyle: 'italic' }}>
          Origem da narrativa: {origem}
        </p>
      )}
    </div>
  )
}