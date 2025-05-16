import './globals.css';
import { Metadata } from 'next/types';
import Link from 'next/link';

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
