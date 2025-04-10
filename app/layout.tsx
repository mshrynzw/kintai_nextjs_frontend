import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"
import {FeatureProvider} from "@/context/FeatureContext"
import {IsMenuOpenProvider} from "@/context/IsMenuOpenContext"
import StampsProvider from "@/providers/StampsProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "勤怠管理システム",
  description: "勤怠管理システム",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <FeatureProvider>
      <IsMenuOpenProvider>
        <StampsProvider>
          {children}
        </StampsProvider>
      </IsMenuOpenProvider>
    </FeatureProvider>
    </body>
    </html>
  )
}
