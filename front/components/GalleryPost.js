import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, setModalState, BASE_URL}){
    var imgUrl;
    var dateObj = new Date(data.publishedAt);
    var date = dateObj.toDateString();

    let state = {
        title: data.title,  
        alt: data.alt, 
        date: date,
    };

    if(data.description){
        state.description = parse(data.description);
    }
    if(data.image.data){
        state.imgUrl = data.image.data.attributes.url;
        imgUrl = data.image.data.attributes.url;
    }
    if(data.videoPreview.data){
        state.videoPreview = data.videoPreview.data.attributes.url;
    }

    function openModal(){
        setModalState(state);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    return(
        <div className={styles.post_card} onClick={setModalState? ()=>openModal() : null}>

            {data.videoUrl && 
                <a className={styles.video_link} href={data.videoUrl}>
                    <img className={styles.post_video} src={`${BASE_URL}${state.videoPreview}`} alt={data.alt}/>
                </a>
            }

            {imgUrl && 
                <img className={styles.post_img} src={`${BASE_URL}${imgUrl}`} alt={data.alt} />
            }

        </div>
    )
}