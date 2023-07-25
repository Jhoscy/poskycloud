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
      </Head>
      <body className={dogica.className}>
        {children}
        <div id='react-modal'></div>
      </body>
    </html>
  )
}
