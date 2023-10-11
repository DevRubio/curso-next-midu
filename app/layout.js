import './globals.css'
import { Navigation } from '@/components/Navigation'



export const metadata = {
  title: 'Curso Next Midu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
