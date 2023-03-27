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

            <div className={styles.category_container}>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Catastrophe And The Curator</div>
                    <img src={`http://localhost:1337${processes[2]}`} alt="" className={styles.category_card_img} />
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Photosynthesis</div>
                    <img src={`http://localhost:1337${processes[3]}`} alt="" className={styles.category_card_img} />
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Illustrious</div>
                    <img src={`http://localhost:1337${series[4]}`} alt="" className={styles.category_card_img} />
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Domestication</div>
                    <img src={`http://localhost:1337${series[5]}`} alt="" className={styles.category_card_img} />
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>To Succeed</div>
                    <img src={`http://localhost:1337${videos[4]}`} alt="" className={styles.category_card_img} />
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>The Process Is The Subject</div>
                    <img src={`http://localhost:1337${processes[5]}`} alt="" className={styles.category_card_img} />
                </div>
            </div>

            <div className={styles.project_container}>

            </div>
        </>
    )
}