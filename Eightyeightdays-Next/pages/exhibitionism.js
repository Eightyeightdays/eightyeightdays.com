import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import extractImageUrl from "utils/extractImageUrl";
import parse from "html-react-parser";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?populate=*");
    return {props:{galleryItems:galleryItems}}
}

function Post({data}){
    var 
    video, 
    htmlText,
    imgUrl;

    if(data.video){
        video = parse(data.video);
    }
    if(data.htmlDescription){
        htmlText = parse(data.htmlDescription);
    }
    if(data.image){
        // extractImageUrl(data.image)
        console.log(data.image.data?.attributes?.url)
        imgUrl = data.image.data?.attributes?.url
    }

    return(
        <div className={styles.post_card}>
            <div className={styles.post_title}>{data.title}</div>
            {data.video && <div className={styles.post_video}>{video}</div>}
            {imgUrl && <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt="" />}
        </div>
    )
}

export default function Exhibitionism({galleryItems}){
    console.log(galleryItems)
    const content = parse(galleryItems[0].video)
    return(
        <>
            <Head>
                <title>Exhibitionism</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>Random Art gallery</h1>
            <div className={styles.gallery_container}>
                {galleryItems.map(item=>(
                    <Post data={item} />
                ))}
            </div>
        </>
    )
}