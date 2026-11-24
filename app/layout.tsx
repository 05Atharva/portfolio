import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/instrument-sans'
import './globals.css'
import type { Metadata } from 'next'
import { site } from './site'

const title = site.name + ' | ' + site.role
const homepage = site.url + '/'
const socialImage = '/brand/social-card.png'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: homepage },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '16x16 32x32 64x64', type: 'image/x-icon' }],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title,
    description: site.description,
    url: homepage,
    siteName: site.name,
    type: 'website',
    images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: [socialImage],
  },
  robots: { index: true, follow: true },
}

const restoreTheme = `try {
  const theme = localStorage.getItem('portfolio-theme');
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme;
  }
} catch {}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
