import "@/styles/globals.css"

import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

// If loading a variable font, you don't need to specify the font weight
const font = Inter({
  subsets: ["cyrillic", "latin-ext"],
    variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`font-sans antialiased ${font.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
