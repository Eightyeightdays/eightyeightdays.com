import styles from "../styles/Exhibitionism.module.css";
import Head from "next/head";
import fetchDataForProps from "utils/fetchDataForProps";
import GalleryPost from "components/GalleryPost";
import { useState } from "react";

export async function getStaticProps(){
    const galleryItems = await fetchDataForProps("random-media-posts?sort[0]=publishedAt:desc&populate=*");
    const BASE_URL = process.env.BASE_URL;
    return {props:{galleryItems:galleryItems, BASE_URL:BASE_URL}}
}


export default function Exhibitionism({galleryItems, BASE_URL}){
    // console.log(galleryItems)
    const [modal, setModal] = useState();
    const subtitle = "\"We've painted beautiful wall to wall murals in our selfish youth, so we either face the four-storey critics, or die for our art.  I'll probably be found hung in a gallery somewhere.\"";

    function closeModal(){
        setModal(null);
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    return(
        <>
            <Head>
                <title>Exhibitionism</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.heading_container}>
                <h1 className={styles.title}>Exhibitionism</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.gallery_container}>
                <div className={styles.gallery}>
                    {galleryItems.map((item, index)=>{
                        if(item.videoPreview.data){
                            return(
                                <GalleryPost key={index} data={item} setModalState={false} BASE_URL={BASE_URL}/>
                            )
                        }else{
                            return(
                                <GalleryPost key={index} data={item} setModalState={setModal} BASE_URL={BASE_URL}/>
                            )
                        }
                    })}
                </div>
            </div>

            {modal && 
                <div className={styles.modal}>
                    <div className={styles.modal_image_container}>
                        <img className={styles.modal_image} alt={modal.alt} src={`${BASE_URL}${modal.imgUrl}`} />
                    </div>
                    <div className={styles.modal_text_container}>
                        <div className={styles.modal_button} onClick={()=>closeModal()}>X</div>
                        <div className={styles.modal_title}>{modal.title}</div>
                        <div className={styles.symbol_container}>&#9830;</div>
                        {modal.description && <div className={styles.modal_description}>{modal.description}</div>}
                        <div className={styles.modal_date}>{modal.date}</div>
                    </div>
                </div>
            }
            
        </>
    )
}