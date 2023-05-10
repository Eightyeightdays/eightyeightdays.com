import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, setModalState}){
    var imgUrl;
    var alt;
    var dateObj = new Date(data.date);
    var date = dateObj.toDateString();

    console.log(data.date)
    console.log(dateObj)
    console.log(date)
    
    
    if(data.acf.image){
        imgUrl = data.acf.image.url;
        alt = data.acf.image.alt;
    }
    if(data.acf.video_preview_image){
        imgUrl = data.acf.video_preview_image.url;
        alt = data.acf.video_preview_image.alt;
    }  
    
    let state = {
        title: data.title.rendered,  
        date: date,
        imgUrl: imgUrl,
        alt: alt,
    };
    
    if(data.acf.description){
        state.description = parse(data.acf.description);
    }

    function openModal(){
        setModalState(state);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    return(
        <div className={styles.post_card} onClick={setModalState? ()=>openModal() : null}>

            {data.acf.video_preview_image && 
                <a className={styles.video_link} href={data.acf.video_url}>
                    <img className={styles.post_video} src={imgUrl} alt={alt}/>
                </a>
            }

            {imgUrl && 
                <img className={styles.post_img} src={imgUrl} alt={alt} />
            }

        </div>
    )
}