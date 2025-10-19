import type { Metadata } from 'next'
import './globals.css'
import ClientProvider from '@/components/ClientProvider'

export const metadata: Metadata = {
  title: 'CrackRock - Smart Investment Strategies for Maximum CrackRock Acquisition',
  description: 'Discover intelligent investment strategies to maximize your CrackRock acquisition potential. Build wealth wisely to afford more CrackRock with our expert financial guidance.',
  icons: {
    icon: '/CrackRock Favicon.png',
    apple: '/CrackRock Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}