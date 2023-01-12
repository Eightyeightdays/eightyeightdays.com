import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import Link from 'next/link'
import fetchDataForProps from 'utils/fetchDataForProps.js'

export async function getStaticProps(){
    const data = await fetchDataForProps("eye-preview-images?populate=*")
    let processData = []
    let seriesData = []
    let videoData = []

    data.map(item=>{
        switch(item.title){
            case "processes":
            processData.push(...item.images.data);
            break;
            case "series":
            seriesData.push(...item.images.data);
            break;
            case "videos":
            videoData.push(...item.images.data);
        }
    })

    let processUrls = []
    let seriesUrls = []
    let videoUrls = []

    processData.map(item =>{
        processUrls.push(item.attributes.url)
    })

    seriesData.map(item =>{
        seriesUrls.push(item.attributes.url)
    })

    videoData.map(item =>{
        videoUrls.push(item.attributes.url)
    })

    return {props: {processes: processUrls, series: seriesUrls, videos: videoUrls}}
}

export default function AnEyeForAnEye({processes, series, videos}){
    console.log(processes)
    console.log(series)
    console.log(videos)
    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Visuals</h1>
            <div className={styles.container}>
                <Link href="/an-eye-for-an-eye/series" className={styles.card}>
                    <h2 className={styles.title}>Series</h2>
                    {series.map(item =>(
                        <img className={styles.preview_image} src={`http://localhost:1337${item}`}></img>
                    ))}
                    <div className={styles.description}></div>
                </Link>
                <Link href="/an-eye-for-an-eye/processes" className={styles.card}>
                    <h2 className={styles.title}>Processes</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
                <Link  href="/an-eye-for-an-eye/on-photography" className={styles.card}>
                    <h2 className={styles.title}>On Photography</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
                <Link href="/an-eye-for-an-eye/videos" className={styles.card}>
                    <h2 className={styles.title}>Videos</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
            </div>
            
        </>
    )
}