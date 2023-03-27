import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import Link from 'next/link'
import fetchDataForProps from 'utils/fetchDataForProps.js'

export async function getStaticProps(){
    const categoryImages = await fetchDataForProps("category-preview-images?populate=*");
    categoryImages.forEach(el => extractImageUrl(el));
    const previews = await fetchDataForProps("previews?populate=*");
    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];

    function extractImageUrl(obj){
        let url = obj.image.data.attributes.url;
        obj.url = url;
        // delete obj.image; // can be removed from the structure if data not needed
    }

    previews.forEach(preview =>{
        switch(preview.type){
            case "curated":
                extractImageUrl(preview);
                curatedPreviews.push(preview);
            break;
            case "darkroom":
                extractImageUrl(preview);
                darkroomPreviews.push(preview);
            break;
            case "video":
                extractImageUrl(preview);
                videoPreviews.push(preview)
            break;
            case "domestication":
                extractImageUrl(preview);
                domesticationPreviews.push(preview);
            break;
            case "procedural":
                extractImageUrl(preview);
                proceduralPreviews.push(preview);
            break;
            case "misc":
                extractImageUrl(preview);
                miscPreviews.push(preview);
        }
    })

    return {props: {
        curatedPreviews: curatedPreviews,
        darkroomPreviews: darkroomPreviews,
        videoPreviews: videoPreviews,
        domesticationPreviews: domesticationPreviews,
        proceduralPreviews: proceduralPreviews,
        miscPreviews: miscPreviews,
        categoryImages: categoryImages  
    }}
}

export default function AnEyeForAnEye({categoryImages, curatedPreviews, darkroomPreviews, videoPreviews, domesticationPreviews, proceduralPreviews, miscPreviews}){

    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.category_container}>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[6].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>Catastrophe & The Curator</div>
                    <div className={styles.category_card_description}>Curated series of found photos</div>
                </div>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[8].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>Photosynthesis</div>
                    <div className={styles.category_card_description}>Alternative photography processes for the darkroom</div>
                </div>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[11].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>Illustrious</div>
                    <div className={styles.category_card_description}>Conceptual photography series</div>
                </div>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[10].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>Domestication</div>
                    <div className={styles.category_card_description}>A group of series based on the conceptual metaphor of "domestication"</div>
                </div>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[9].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>To Succeed</div>
                    <div className={styles.category_card_description}>Moving images / Images moving</div>
                </div>
                <div className={styles.category_card}>
                    <img src={`http://localhost:1337${categoryImages[7].url}`} alt="" className={styles.category_card_img} />
                    <div className={styles.category_card_title}>The Process Is The Subject</div>
                    <div className={styles.category_card_description}>Photographic series focused on the process</div>
                </div>
            </div>

            <div className={styles.project_container}>

            </div>
        </>
    )
}