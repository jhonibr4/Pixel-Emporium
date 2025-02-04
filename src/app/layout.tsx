import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Pixel Emporium',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-zinc-50">{children}</body>
    </html>
  )
}
