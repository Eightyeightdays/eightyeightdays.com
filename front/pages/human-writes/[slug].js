import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../styles/Article.module.css"
import Link from "next/link.js";
import { useSearchParams } from "next/navigation.js";


export async function getStaticPaths(){
    const URL = process.env.WP_API
    const ENDPOINT = process.env.POST_SLUGS
    const res = await fetch(`${URL}${ENDPOINT}`);    
    const articles = await res.json();
    const paths = articles.map(post=>({
        params: {slug: post.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const URL = process.env.WP_API;
    const fields = "&_fields=title, content, acf.description, acf.meta_description, acf.content";
    const apiUrl = `${URL}posts?slug=${params.slug}${fields}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const article = data[0];

    return {props: {article}}
}

export default function Article({article}){
    const params = useSearchParams();
    const category = params.get("category");
    const htmlString = article.content.rendered;
    const content = parse(htmlString);
    return(
        <>
            <Head>
                <title>{article.title.rendered}</title>
                <meta name="description" content={article.acf.meta_description} />
            </Head>
            <div className={styles.main_container}>
                <Link className={styles.navigate_button} href={`/human-writes?category=${category}#previewContainer`}>Back to <div className={styles.category_title}>{category}</div></Link>
                <div className={styles.article_container}>
                    <h1 className={styles.article_title}>{article.title.rendered}</h1>
                    <h2 className={styles.article_description}>{article.acf.description}</h2>
                    <div className={styles.divider}></div>
                    <div className={styles.article_content}>{content}</div>
                    <div className={styles.symbol_container}>&#9830; &#9830; &#9830;</div>
                </div>
            </div>
        </>
    )
}

