import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Footer from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="images/Hooker Hill (1).jpg"></link>
        <title>AdventuresInFallHollow</title>
        <meta property='og:image' content='https://fall-hollow.vercel.app/_next/image?url=%2Fimages%2Ffh%2FIG_1.png&w=3840&q=75' />
        <meta property='og:description' content='Unreal Engine 5 Project' />
        <meta property='og:title' content='Fall Hollow' />
        <meta property="description" content="Unreal Engine 5 Project" />
        <meta property='og:image' content='https://fall-hollow.vercel.app/_next/image?url=%2Fimages%2Ffh%2FIG_1.png&w=3840&q=75' />
        <meta property='og:description' content='Unreal Engine 5 Project' />
        <meta property='og:title' content='Fall Hollow' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fall-hollow.vercel.app/' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
