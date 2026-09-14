import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingActionButton from "@/components/floating-action-button"
import BackToTop from "@/components/back-to-top"
import CookieConsent from "@/components/cookie-consent"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
})

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "ACK St. Andrews Kibabet | Faith that feels like family",
  description: "Join ACK St. Andrews Kibabet in Eldoret for worship, fellowship, service, and community.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>

            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingActionButton />
            <BackToTop />
            <CookieConsent />

            <Analytics />
            <SpeedInsights />

        </ThemeProvider>
      </body>
    </html>
  )
}

