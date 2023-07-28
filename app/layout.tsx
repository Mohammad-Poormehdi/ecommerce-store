import "@/styles/globals.css"
import { Metadata } from "next"
import { Urbanist } from "next/font/google"

import { siteConfig } from "@/config/site"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={urbanist.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
