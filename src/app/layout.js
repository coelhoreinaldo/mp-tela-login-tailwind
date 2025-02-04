import './globals.css'
import { DM_Sans } from "next/font/google";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${dmSans.className} bg-slate-950 text-slate-100` }>{ children }</body>
    </html>
  )
}
