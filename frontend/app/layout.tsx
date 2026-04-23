import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Batoul Abedelrahman | Full-Stack Developer',
  description: 'A modern, clean portfolio showcasing projects and skills in full-stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-surface text-on-surface">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}