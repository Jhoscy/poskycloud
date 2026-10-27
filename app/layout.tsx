import './globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const dogica = localFont({
  src: '../public/fonts/dogica/dogicapixel.otf',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: 'Posky Cloud',
  description: 'A Posky Cloud space over the web',
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
    description: 'A Posky Cloud space over the web',
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
    <html lang="en">
      <body className={dogica.className}>
        {children}
        <div id='react-modal'></div>
      </body>
    </html>
  )
}
