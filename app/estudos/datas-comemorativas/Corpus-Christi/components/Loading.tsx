'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      id="loading"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="loading-content">
        <div className="loading-host">☩</div>
        <div className="loading-text">CORPUS CHRISTI</div>
      </div>
    </div>
  )
}