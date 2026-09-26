import type { Metadata } from 'next'
import Script from 'next/script'
import PwaInstallToast from './_components/PwaInstallToast'
import CookieBanner from './_components/layout/CookieBanner'

export const metadata: Metadata = {
  title: 'Lux Fidei – Luz da Fé Católica',
  description: 'A sabedoria de dois mil anos ao alcance de quem busca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-30773640736874"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children}

        {/* Aviso de Instalação do Aplicativo (Tema Sacro / Pergaminho & Ouro) */}
        <PwaInstallToast />

        {/* Banner de Consentimento de Cookies (LGPD / Google AdSense) */}
        <CookieBanner />

        {/* Script para Registrar o Service Worker (Ativa o PWA de 1 clique) */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKZMHVKNGL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QKZMHVKNGL');
          `}
        </Script>
      </body>
    </html>
  )
}