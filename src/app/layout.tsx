import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Whitecliffe Student Hub',
  description: 'The ultimate homepage for Whitecliffe College students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
