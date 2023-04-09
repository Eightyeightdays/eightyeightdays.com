import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import GalleryPost from "components/GalleryPost";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?populate=*");
    return {props:{galleryItems:galleryItems}}
}


export default function Exhibitionism({galleryItems}){
    function openModal(id){
        console.log(`${id} id was clicked`)
    }
    
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
                    <GalleryPost key={index} data={item} click={openModal}/>
                ))}
            </div>
        </>
    )
}