import {AppConfig} from "@/config";
import { Html, Head, Main, NextScript } from 'next/document'

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
