import type React from "react"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pushkaraj Palli | Mern-Stack Developer",
  description: "Portfolio of Pushkaraj Palli, a creative MERN stack developer specializing in interactive web experiences and dynamic full-stack applications.",
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Only run on client side
                if (typeof window !== 'undefined') {
                  // Check for stored theme preference or use dark as default
                  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
                  document.documentElement.classList.add(storedTheme);
                }
              } catch (e) {
                // If localStorage is not available, default to dark theme
                document.documentElement.classList.add('dark');
              }
            })()
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="portfolio-theme">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
