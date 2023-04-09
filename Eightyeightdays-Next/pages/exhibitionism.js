import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import GalleryPost from "components/GalleryPost";
import { useState } from "react";
// import parse from "html-react-parser";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?populate=*");
    return {props:{galleryItems:galleryItems}}
}


export default function Exhibitionism({galleryItems}){
    const [modal, setModal] = useState();
    function closeModal(){
        setModal(null);
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
                    <GalleryPost key={index} data={item} click={setModal}/>
                ))}
            </div>
            {modal && 
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modal_image_container}>
                        <img className={styles.modal_image} alt={modal.alt} src={`http://localhost:1337${modal.imgUrl}`} />
                    </div>
                    <div className={styles.modal_text_container}>
                        <div className={styles.modal_title}>{modal.title}</div>
                        {(modal.description || modal.html) && <div className={styles.symbol_container}>&#9830;</div>}
                        {modal.description && <div className={styles.modal_description}>{modal.description}</div>}
                        {modal.html && <div className={styles.modal_html}>{modal.html}</div>}

                    </div>
                </div>
            }
        </>
    )
}