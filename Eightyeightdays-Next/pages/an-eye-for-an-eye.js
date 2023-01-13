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
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <Link href="/an-eye-for-an-eye/illustration" className={styles.card}>
                        {/* <h2 className={styles.title}>Illustration</h2> */}
                        <div className={`${styles.image_container} ${styles.card_1}`}>
                            {series.map(item =>(
                                <img className={styles.preview_image} src={`http://localhost:1337${item}`}></img>
                            ))}    
                        </div>
                        <div className={styles.description}></div>
                    </Link>
                    <Link href="/an-eye-for-an-eye/photosynthesis" className={styles.card}>
                        {/* <h2 className={styles.title}>Photosynthesis</h2> */}
                        <div className={`${styles.image_container} ${styles.card_2}`}>
                            {processes.map(item =>(
                                <img className={styles.preview_image} src={`http://localhost:1337${item}`}></img>
                            ))}    
                        </div>
                        <div className={styles.description}></div>
                    </Link >
                    <Link  href="/an-eye-for-an-eye/on-photography" className={styles.card}>
                        {/* <h2 className={styles.title}>On Photography</h2> */}
                        <div className={`${styles.image_container} ${styles.card_3}`}>
                            <img className={styles.single_image} src="http://localhost:1337/uploads/48631295161_e1a3d0e4ea_h_1449642f9e.jpg"></img>
                        </div>
                        <div className={styles.description}></div>
                    </Link >
                    <Link href="/an-eye-for-an-eye/videos" className={styles.card}>
                        {/* <h2 className={styles.title}>Succession Stories</h2> */}
                        <div className={`${styles.image_container} ${styles.card_4}`}>
                            {videos.map(item =>(
                                <img className={styles.preview_image} src={`http://localhost:1337${item}`}></img>
                            ))}    
                        </div>
                        <div className={styles.description}></div>
                    </Link >
                </div>
            </div>
        </>
    )
}