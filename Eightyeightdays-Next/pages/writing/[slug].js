import fetchDataForProps from "../../utils/fetchDataForProps.js"
import Head from "next/head.js"

export default function Article({data}){
    const article = data[0]
    const htmlString = article.cont;
    
    const parse = require('html-react-parser');
    const test = parse(htmlString)

    console.log(data)
    console.log(test)

    return(
        <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div>{test}</div>
        </>
    )
}

export async function getStaticPaths(){
    const articles = await fetchDataForProps("articles")
    const paths = articles.map(obj=>({
        params: {slug: obj.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const apiUrl = `articles?filters[slug][$eq]=${params.slug}`
    const data = await fetchDataForProps(apiUrl)

    return {props: {data}}
}