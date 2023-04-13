import parse from "html-react-parser";
import styles from "../styles/GalleryPost.module.css";

export default function GalleryPost({data, click}){
console.log(data)

    var imgUrl;

    let state = {
        title: data.title, 
        description: data.description, 
        alt: data.alt, 
    };

    if(data.htmlDescription){
        state.html = parse(data.htmlDescription);
    }
    if(data.image.data){
        state.imgUrl = data.image.data.attributes.url;
        imgUrl = data.image.data.attributes.formats.small.url;
    }
    if(data.videoPreview.data){
        state.videoPreview = data.videoPreview.data.attributes.url;
    }

    return(
        <div className={styles.post_card} onClick={()=>click(state)}>

            {data.videoUrl && 
            <a className={styles.video_link} href={data.videoUrl}>
                <img className={styles.post_video} src={`http://localhost:1337${state.videoPreview}`} alt={data.alt}/>
            </a>
            }

            {imgUrl && <img className={styles.post_img} src={`http://localhost:1337${imgUrl}`} alt={data.alt} />}

        </div>
    )
}