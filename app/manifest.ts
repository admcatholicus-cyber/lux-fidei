import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lux Fidei – Luz da Fé Católica',
    short_name: 'Lux Fidei',
    description: 'A sabedoria de dois mil anos ao alcance de quem busca',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#C5A059',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      }
    ],
  }
}