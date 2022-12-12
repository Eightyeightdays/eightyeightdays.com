import Layout from "../components/Layout.js"
import styles from "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}