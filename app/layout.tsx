import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tab Session Reviver — Restore Browser Sessions from Crash Screenshots',
  description: 'Upload a screenshot of your browser crash and instantly recover all your lost tabs with OCR-powered URL extraction.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66de92ac-4926-4be5-82a8-e70bfc6a3815"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
