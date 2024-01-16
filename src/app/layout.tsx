import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Vidit Portfolio',
  description: 'Generated by Next.js',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F2F3] `}>
     
        <div className=''>
          {children}
        </div>
        
      </body>
    </html>
  )
}
