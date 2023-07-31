import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const dogica = localFont({
  src: '../public/fonts/dogica/dogicapixel.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://jhoscy.github.io/${process.env.NEXT_PUBLIC_BASE_PATH}`),
  title: 'Posky Cloud',
  description: 'A Posky Cloud space over the web',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Gionata Stante',
  publisher: 'Gionata Stante',
  manifest: `${process.env.NEXT_PUBLIC_BASE_PATH }/favicon/site.webmanifest`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [{
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: `/favicon/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: `/favicon/favicon-16x16.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: `/favicon/apple-touch-icon.png`,
    },
    ]
  },
  openGraph: {
    title: 'Posky Cloud',
    description: 'A Posky Cloud space over the web',
    url: `https://jhoscy.github.io/${process.env.NEXT_PUBLIC_BASE_PATH}`,
    siteName: 'poskycloud',
    images: [
      {
        url: `/images/full.gif`,
        width: 800,
        height: 600,
        alt: 'Sea',
      },
      {
        url: `/images/full.gif`,
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
