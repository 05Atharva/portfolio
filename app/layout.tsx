import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atharva Kanawade | Software Engineer',
  description: 'Portfolio of Atharva Kanawade — Software Engineer specializing in Agentic AI systems, full-stack development, mobile applications, and cybersecurity. Currently building production AI systems at Applied AI Consulting.',
  keywords: [
    'Atharva Kanawade',
    'software engineer',
    'agentic AI',
    'full stack developer',
    'mobile app developer',
    'React Native developer',
    'machine learning engineer',
    'cybersecurity engineer',
    'FastAPI',
    'LangGraph',
    'Python developer',
    'CCNA',
    'AWS',
    'drone racing',
  ],
  authors: [{ name: 'Atharva Kanawade', url: 'https://github.com/05Atharva' }],
  creator: 'Atharva Kanawade',
  openGraph: {
    title: 'Atharva Kanawade — Software Engineer',
    description: 'Building production AI systems, full-stack applications, and mobile apps. Currently at Applied AI Consulting.',
    url: 'https://atharvakanawade.vercel.app',
    siteName: 'Atharva Kanawade Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Atharva Kanawade — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Kanawade | Software Engineer',
    description: 'Agentic AI • Full-Stack • Mobile • Cybersecurity',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-body" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}