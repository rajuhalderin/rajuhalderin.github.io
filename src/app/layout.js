import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import icon from '../app/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Raju Halder - Portfolio',
  description: 'Experienced Android, Windows, and Web App Developer | Enhancing User Experience through Innovative Solutions | Skilled in Crafting High-Performance Applications | Portfolio Showcasing Diverse Development Projects | Expertise in Android, Windows, and Web App Development for Seamless User Engagement | Elevate Your Digital Presence with Tailored Solutions from a Versatile Developer.',
  generator: 'Raju Halder',
  applicationName: 'Raju Halder - Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Raju Halder', 'raju', 'halder', 'rajuhalder'],
  authors: [{ name: 'Raju' }, { name: 'Raju Halder', url: 'https://raju.betadebug.com' }],
  creator: 'Raju Halder',
  publisher: 'Raju Halder',
  formatDetection: {
    email: 'raju@betadebug.com',
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Raju Halder - Portfolio',
    description: 'Expertise in Android, Windows, and Web App Development for Seamless User Engagement',
    url: 'https://raju.betadebug.com',
    siteName: 'Raju Halder - Portfolio',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['raju@betadebug.com', 'https://raju.betadebug.com'],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` absolute bg-light items-center ${inter.className}`}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
