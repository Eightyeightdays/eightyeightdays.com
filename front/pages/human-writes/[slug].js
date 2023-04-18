import fetchDataForProps from "../../utils/fetchDataForProps.js"
import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../styles/Article.module.css"
import Link from "next/link.js";

export async function getStaticPaths(){
    const articles = await fetchDataForProps("articles")
    const paths = articles.map(obj=>({
        params: {slug: obj.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const apiUrl = `articles?filters[slug][$eq]=${params.slug}&populate=*`
    const data = await fetchDataForProps(apiUrl)

    return {props: {data}}
}

export default function Article({data}){
    const article = data[0]
    const htmlString = article.content;
    const content = parse(htmlString)
    const category = data[0].categories.data[0].attributes.category;

    return(
        <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.main_container}>
            <div>
                <Link href={`/human-writes?category=${category}`}>Navigate to {category} category</Link>
            </div>

                <div className={styles.article_container}>
                    <h1 className={styles.article_title}>{article.title}</h1>
                    <h2 className={styles.article_description}>{article.description}</h2>
                    <div className={styles.divider}></div>
                    <div className={styles.article_content}>{content}</div>
                </div>
            </div>
        </>
    )
}

