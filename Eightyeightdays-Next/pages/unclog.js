import fetchDataForProps from '../utils/fetchDataForProps.js'
import PostPreview from '../components/PostPreview.js'
import Head from 'next/head.js'
import styles from "../styles/Unclog.module.css"

export async function getStaticProps(){
    const data = await fetchDataForProps("posts")
    return {props: {data}}
}

export default function Unclog({data}){
    console.log(data)
    return(
        <>
            <Head>
                <title>Unclog - Just Blog It</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Unclog</h1>

            <div className={styles.posts_container}>
                {data.map((obj, index) => (
                    <PostPreview data={obj} key={index} />
                ))}
            </div>
        </>
    )
}