import './globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const dogica = localFont({
  src: [
    { path: '../public/fonts/dogica/dogicapixel.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/dogica/dogicapixelbold.otf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-pixel',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f17b2a',
}

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: 'Posky Cloud',
  description: 'Navighiamo — un tramonto a 8 bit da ascoltare',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Gionata Stante',
  publisher: 'Gionata Stante',
  manifest: `${assetPrefix}/favicon/site.webmanifest`,
  icons: {
    icon: [{
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: `${assetPrefix}/favicon/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: `${assetPrefix}/favicon/favicon-16x16.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: `${assetPrefix}/favicon/apple-touch-icon.png`,
    },
    ]
  },
  openGraph: {
    title: 'Posky Cloud',
    description: 'Navighiamo — un tramonto a 8 bit da ascoltare',
    siteName: '',
    images: [
      {
        url: "/images/full.gif",
        width: 800,
        height: 600,
        alt: 'Sea',
      },
      {
        url: "/images/full.gif",
        width: 1800,
        height: 1600,
        alt: 'Sea',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={dogica.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
