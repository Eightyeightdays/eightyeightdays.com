import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import GalleryPost from "components/GalleryPost";
import { useState } from "react";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?sort[0]=publishedAt:desc&populate=*");
    return {props:{galleryItems:galleryItems}}
}


export default function Exhibitionism({galleryItems}){
    // console.log(galleryItems)
    const [modal, setModal] = useState();
    function closeModal(){
        setModal(null);
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
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
                {galleryItems.map((item, index)=>{
                    if(item.videoPreview.data){
                        return(
                            <GalleryPost key={index} data={item} setModalState={false}/>
                        )
                    }else{
                        return(
                            <GalleryPost key={index} data={item} setModalState={setModal}/>
                        )
                    }
                    
                })}
            </div>

            {modal && 
                <div className={styles.modal}>
                    <div className={styles.modal_image_container}>
                        <img className={styles.modal_image} alt={modal.alt} src={`http://localhost:1337${modal.imgUrl}`} />
                    </div>
                    <div className={styles.modal_text_container}>
                        <div className={styles.modal_button} onClick={()=>closeModal()}>X</div>
                        <div className={styles.modal_title}>{modal.title}</div>
                        <div className={styles.symbol_container}>&#9830;</div>
                        {modal.description && <div className={styles.modal_description}>{modal.description}</div>}
                        <div className={styles.modal_date}><u>{modal.date}</u></div>
                    </div>
                </div>
            }
            
        </>
    )
}