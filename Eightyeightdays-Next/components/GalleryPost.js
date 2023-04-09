import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css"

export default function GalleryPost({data}){
console.log(data)

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

    function openModal(id){
        console.log(`${id} id was clicked`)
    }

    return(
        <div className={styles.post_card} onClick={()=>openModal(data.id)}>
            {data.videoUrl && 
            <a className={styles.video_link} href={data.videoUrl}>
                <img className={styles.post_video} src={`http://localhost:1337${videoPreview}`} alt={data.alt}/>
            </a>}
            {imgUrl && <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt={data.alt} />}
        </div>
    )
}