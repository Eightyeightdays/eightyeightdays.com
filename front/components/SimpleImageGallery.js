import styles from "../styles/SimpleImageGallery.module.css"
import { useState } from "react";
export default function ImageGallery({images, style}){
    console.log(images)
    
    const [current, setCurrent] = useState(0);
    const length = images.length -1;
    var previous;
    var next;
    
    if(current === 0){
        previous = length;
    }else{
        previous = current -1;
    }

    if(current === length){
        next = 0;
    }else{
        next = current +1;
    }

    return(
        <div className={style? style :styles.gallery_container}>
            <div className={styles.gallery_card}>
                <div className={styles.previous_btn} onClick={()=>setCurrent(previous)}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
                    </svg>
                </div>
                <div className={styles.next_btn} onClick={()=>setCurrent(next)}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                        <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
                    </svg>
                </div>
                <img className={styles.gallery_img} src={`http://localhost:1337${images[current].url}`} alt={images[current].alt}></img>
                <div className={styles.gallery_img_caption}>{images[current].caption}</div>
            </div>
        </div>
    )
}