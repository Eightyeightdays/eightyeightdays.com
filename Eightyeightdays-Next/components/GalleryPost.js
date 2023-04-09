import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, click}){
console.log(data)

    var 
    htmlText,
    imgUrl,
    largeImgUrl,
    videoPreview;


    if(data.htmlDescription){
        htmlText = parse(data.htmlDescription);
    }
    if(data.image.data){
        largeImgUrl = data.image.data.attributes.url;
        imgUrl = data.image.data.attributes.formats.small.url;
    }
    if(data.videoPreview.data){
        videoPreview = data.videoPreview.data.attributes.url;
    }

    // should only return an object with non-null values
    return(
        <div className={styles.post_card} onClick={()=>click({
            title: data.title, 
            description: data.description, 
            html: parse(data.htmlDescription), 
            alt: data.alt, 
            imgUrl: largeImgUrl})}>

            {data.videoUrl && 
            <a className={styles.video_link} href={data.videoUrl}>
                <img className={styles.post_video} src={`http://localhost:1337${videoPreview}`} alt={data.alt}/>
            </a>
            }

            {imgUrl && <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt={data.alt} />}

        </div>
    )
}