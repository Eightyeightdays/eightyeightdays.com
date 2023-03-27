import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import Link from 'next/link'
import fetchDataForProps from 'utils/fetchDataForProps.js'

export async function getStaticProps(){
    const previews = await fetchDataForProps("previews?populate=*")
    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];

    previews.forEach(preview =>{
        switch(preview.type){
            case "curated":
                curatedPreviews.push(preview);
            break;
            case "darkroom":
                darkroomPreviews.push(preview);
            break;
            case "video":
                videoPreviews.push(preview)
            break;
            case "domestication":
                domesticationPreviews.push(preview);
            break;
            case "procedural":
                proceduralPreviews.push(preview);
            break;
            case "misc":
                miscPreviews.push(preview);
        }
    })

    return {props: {
        curatedPreviews: curatedPreviews,
        darkroomPreviews: darkroomPreviews,
        videoPreviews: videoPreviews,
        domesticationPreviews: domesticationPreviews,
        proceduralPreviews: proceduralPreviews,
        miscPreviews: miscPreviews   
    }}
}

export default function AnEyeForAnEye({curatedPreviews, darkroomPreviews, videoPreviews, domesticationPreviews, proceduralPreviews, miscPreviews}){
    console.log(domesticationPreviews);

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
                    {/* <img src={`http://localhost:1337${processes[2]}`} alt="" className={styles.category_card_img} /> */}
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Photosynthesis</div>
                    {/* <img src={`http://localhost:1337${processes[3]}`} alt="" className={styles.category_card_img} /> */}
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Illustrious</div>
                    {/* <img src={`http://localhost:1337${series[4]}`} alt="" className={styles.category_card_img} /> */}
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>Domestication</div>
                    {/* <img src={`http://localhost:1337${series[5]}`} alt="" className={styles.category_card_img} /> */}
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>To Succeed</div>
                    {/* <img src={`http://localhost:1337${videos[4]}`} alt="" className={styles.category_card_img} /> */}
                </div>
                <div className={styles.category_card}>
                    <div className={styles.category_card_title}>The Process Is The Subject</div>
                    {/* <img src={`http://localhost:1337${processes[5]}`} alt="" className={styles.category_card_img} /> */}
                </div>
            </div>

            <div className={styles.project_container}>

            </div>
        </>
    )
}