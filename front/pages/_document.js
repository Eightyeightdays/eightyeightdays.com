import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const FAVICON_XL = "http://admin.eightyeightdays.com/wp-content/uploads/2023/05/Favicon-XL.png";
  const FAVICON_L = "http://admin.eightyeightdays.com/wp-content/uploads/2023/05/Favicon-L.png";
  const FAVICON_M = "http://admin.eightyeightdays.com/wp-content/uploads/2023/05/Favicon-M.png";
  const FAVICON_S = "http://admin.eightyeightdays.com/wp-content/uploads/2023/05/Favicon-S.png";

  return (
    <Html>
        <Head>
          <link rel="icon" href={FAVICON_S} />
          <link rel="icon" href={FAVICON_M} />
          <link rel="icon" href={FAVICON_L} />
          <link rel="icon" href={FAVICON_XL} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Cormorant:ital,wght@0,600;0,700;1,500&family=Quicksand&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
