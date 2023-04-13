import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, setModalState}){
    var imgUrl;

    let state = {
        title: data.title,  
        alt: data.alt, 
    };

    if(data.description){
        state.description = parse(data.description);
    }
    if(data.image.data){
        state.imgUrl = data.image.data.attributes.url;
        imgUrl = data.image.data.attributes.formats.small.url;
    }
    if(data.videoPreview.data){
        state.videoPreview = data.videoPreview.data.attributes.url;
    }

    function openModal(){
        setModalState(state);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    return(
        <div className={styles.post_card} onClick={()=>openModal()}>

            {data.videoUrl && 
                <a className={styles.video_link} href={data.videoUrl}>
                    <img className={styles.post_video} src={`http://localhost:1337${state.videoPreview}`} alt={data.alt}/>
                </a>
            }

            {imgUrl && 
                <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt={data.alt} />
            }

        </div>
    )
}