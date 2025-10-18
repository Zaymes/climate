import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Climate Knowledge Portal',
  description: 'Nepal Climate Knowledge Portal - Centralized datasets, resources, insights, and stakeholders related to climate change in Nepal.',
  keywords: ['climate', 'nepal', 'data', 'environment', 'sustainability'],
  authors: [{ name: 'Open Knowledge Nepal' }],
  openGraph: {
    title: 'Climate Knowledge Portal',
    description: 'Nepal Climate Knowledge Portal - Centralized datasets, resources, insights, and stakeholders related to climate change in Nepal.',
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
      <body className={inter.className}>
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
