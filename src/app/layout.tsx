import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata = {
  title: 'Bryan Verneck',
  description: 'Here you can see a bit of my work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-charcoal text-white`}>
        {children}
      </body>
    </html>
  )
}
