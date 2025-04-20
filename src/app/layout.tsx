import './globals.css';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Streetknits',
  description: 'Streetknits website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
