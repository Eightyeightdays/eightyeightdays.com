import fetchDataForProps from '../utils/fetchDataForProps.js'
import UnclogPreview from '../components/Unclog.Preview.js'
import Head from 'next/head.js'
import styles from "../styles/unclog/Unclog.module.css"

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
                    <UnclogPreview data={obj} key={index} />
                ))}
            </div>
        </>
    )
}