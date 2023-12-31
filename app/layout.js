import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Space_Grotesk } from 'next/font/google'

const font = Space_Grotesk({
  weight: ['400','700'],
  subsets: ['latin'],
  //display: 'swap',
})
 


export const metadata = {
  title: 'Curso Next Midu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
