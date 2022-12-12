import Head from 'next/head'

export default function Home({data}) {
  return (
      <div>
        <Head>
          <title>Eightyeightdays.com</title>
          <meta name="description" content="Eightyeightdays" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Welcome</h1>
        <p>What is this website about?</p>
        
      </div>
  )
}


