import Layout from "../components/layout/Layout.js"
// @ts-ignore
import styles from "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}