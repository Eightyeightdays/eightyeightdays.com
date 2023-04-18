import Head from 'next/head'
import styles from "../styles/index.module.css"


export default function Home() {
  return (
      <div>
        <Head>
          <title>Eightyeightdays.com</title>
          <meta name="description" content="Eightyeightdays" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className={styles.container}>

          <h1 className={styles.title}>Welcome</h1>
          <h2 className={styles.subtitle}>What is this website about?</h2>
          
        
        </div>
      </div>
  )
}


