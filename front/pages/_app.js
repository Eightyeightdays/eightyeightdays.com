import Layout from "../components/layout/Layout.js"
// @ts-ignore
import styles from "../styles/globals.css"
import Head from "next/head.js"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}