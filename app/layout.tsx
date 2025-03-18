import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

const inter = Inter({ subsets: ['latin'] })
// const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manokalp',
  description: 'Mental Health Care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f1f1f1]`}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>

        <Footer />

      </body>
    </html>
  )
}
