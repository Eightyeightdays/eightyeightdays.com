import fetchDataForProps from '../utils/fetchDataForProps.js'
import ArticlePreview from '../components/ArticlePreview.js'
import Head from 'next/head.js'

export async function getStaticProps(){
  const data = await fetchDataForProps("articles")
  return {props: {data}}
}
export default function Writing({data}){
    return(
        <>
            <Head>
                <title>Writers Never Die</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Writing</h1>
            {data.map((obj, index) => (
                <ArticlePreview data={obj} key={index} />
            ))}
        </>
    )
}