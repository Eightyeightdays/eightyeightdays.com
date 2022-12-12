import fetchDataForProps from '../utils/fetchDataForProps.js'
import PostPreview from '../components/PostPreview.js'
import Head from 'next/head.js'

export async function getStaticProps(){
  const data = await fetchDataForProps("posts")
  return {props: {data}}
}
export default function Unclog({data}){
    return(
        <>
            <Head>
                <title>Unclog - The Art of Blog Therapy</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>Unclog</h1>
            {data.map((obj, index) => (
                <PostPreview data={obj} key={index} />
            ))}
        </>
    )
}