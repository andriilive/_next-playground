import { Head, Html, Main, NextScript } from 'next/document'
import { AppConfig } from '@/config'

export default function Document() {
  return (
    <Html lang={AppConfig.locale} className={`dark`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
