import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Head from 'next/head'

const dogica = localFont({
  src: '../public/fonts/dogica/dogicapixel.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Posky Cloud',
  description: 'Navighiamo',
  icons: {
    icon: [{
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body className={dogica.className}>
        {children}
        <div id='react-modal'></div>
      </body>
    </html>
  )
}
