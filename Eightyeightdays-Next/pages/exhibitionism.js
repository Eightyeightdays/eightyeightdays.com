import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import parse from "html-react-parser";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?populate=*");
    return {props:{galleryItems:galleryItems}}
}

function Post({data}){
    var 
    htmlText,
    imgUrl,
    videoPreview;


    if(data.htmlDescription){
        htmlText = parse(data.htmlDescription);
    }
    if(data.image.data){
        imgUrl = data.image.data.attributes.url;
    }
    if(data.videoPreview.data){
        videoPreview = data.videoPreview.data.attributes.url;
    }

    return(
        <div className={styles.post_card}>
            {data.videoUrl && 
            <a className={styles.video_link} href={data.videoUrl}>
                <img className={styles.post_video} src={`http://localhost:1337${videoPreview}`} alt={data.alt}/>
            </a>}
            {imgUrl && <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt={data.alt} />}
        </div>
    )
}

export default function Exhibitionism({galleryItems}){
    return(
        <>
            <Head>
                <title>Exhibitionism</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>Random Art gallery</h1>
            <div className={styles.gallery_container}>
                {galleryItems.map((item, index)=>(
                    <Post key={index} data={item} />
                ))}
            </div>
        </>
    )
}