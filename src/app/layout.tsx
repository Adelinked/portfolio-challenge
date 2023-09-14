import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'], 
  display: 'swap',
  weight : [ '500', '600', '700']
})


export const metadata: Metadata = {
  title: 'portfolio challenge',
  description: 'portfolio challenge created by nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <link rel="icon" href="/devchallenges.png" sizes="any" />
      <body className={montserrat.className} >{children}</body>
    </html>
  )
}
