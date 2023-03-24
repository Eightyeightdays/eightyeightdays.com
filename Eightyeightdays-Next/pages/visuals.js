import styles from "../styles/Visuals.module.css"
import fetchDataForProps from "utils/fetchDataForProps.js"

export async function getStaticProps(){
    const data = await fetchDataForProps("eye-preview-images?populate=*");

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

export default function Visuals({processes, series, videos}){
    
    return(
        <div className={styles.main_container}>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src={`http://localhost:1337${series[3]}`}></img>
                    </div>
                    <div className={styles.title}>Illustration</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src={`http://localhost:1337${processes[0]}`}></img>
                    </div>
                    <div className={styles.title}>Photosynthesis</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src="http://localhost:1337/uploads/48631295161_e1a3d0e4ea_h_1449642f9e.jpg"></img>
                    </div>
                    <div className={styles.title}>On Photography</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src={`http://localhost:1337${videos[0]}`}></img>
                    </div>
                    <div className={styles.title}>Succession Stories</div>
                </div>
            </div>
        </div>
    )
}