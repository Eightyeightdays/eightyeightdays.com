import fetchDataForProps from "../../utils/fetchDataForProps.js"
import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../styles/Article.module.css"

export default function Article({data}){
    const article = data[0]
    const htmlString = article.content;
    const content = parse(htmlString)

    return(
        <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.article_container}>
                <h1>{article.title}</h1>
                {/* <p>{article.description}</p> */}
                <div className={styles.article_content}>{content}</div>
            </div>
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