import Head from 'next/head'
import fetchDataForProps from '../utils/fetchDataForProps.js'
import Post from '../components/Post.js'

export async function getStaticProps(){
  const data = await fetchDataForProps("posts")
  return {props: {data}}
}

export default function Home({data}) {
  return (
      <div>
        <Head>
          <title>Eightyeightdays.com</title>
          <meta name="description" content="Eightyeightdays" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {data.map((obj, index) => (
          <Post data={obj} key={index} />
        ))}
        
      </div>
  )
}


