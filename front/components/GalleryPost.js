import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, setModalState}){
    var imgUrl;
    var dateObj = new Date(data.date);
    var date = dateObj.toDateString();

    let state = {
        title: data.title.rendered,  
        alt: data.acf.image.alt, 
        date: date,
    };

    if(data.acf.description){
        state.description = parse(data.acf.description);
    }
    if(data.acf.image){
        imgUrl = data.acf.image.url;
        state.imgUrl = imgUrl;
    }
    if(data.acf.video_preview_image){
        state.videoPreview = data.acf.video_preview_image.url;
    }

    function openModal(){
        setModalState(state);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    return(
        <div className={styles.post_card} onClick={setModalState? ()=>openModal() : null}>

            {data.videoUrl && 
                <a className={styles.video_link} href={data.videoUrl}>
                    <img className={styles.post_video} src={state.videoPreview} alt={data.alt}/>
                </a>
            }

            {imgUrl && 
                <img className={styles.post_img} src={imgUrl} alt={data.alt} />
            }

        </div>
    )
}