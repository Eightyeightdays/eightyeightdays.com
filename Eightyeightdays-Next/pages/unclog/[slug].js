import fetchDataForProps from "../../utils/fetchDataForProps.js"
import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../styles//unclog/Unclog.Single.module.css"

export default function Post({data}){
    const post = data[0]
    const htmlString = post.content;
    const content = parse(htmlString)

    return(
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.main_container}>
                <div className={styles.post_container}>
                    <h1>{post.title}</h1>
                    {/* <p>{post.description}</p> */}
                    <div className={styles.article_content}>{content}</div>
                </div>
            </div>
                
        </>
    )
}

export async function getStaticPaths(){
    const posts = await fetchDataForProps("posts")
    const paths = posts.map(obj=>({
        params: {slug: obj.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const apiUrl = `posts?filters[slug][$eq]=${params.slug}`
    const data = await fetchDataForProps(apiUrl)

    return {props: {data}}
}