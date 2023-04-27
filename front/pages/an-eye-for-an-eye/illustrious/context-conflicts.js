import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import ProjectTemplate from "components/ProjectTemplate.js";
import SimpleImageGallery from "components/SimpleImageGallery.js"
import styles from "../../../styles/ConditionalGallery.module.css"

export async function getStaticProps(){
    const projectSlug = "context-conflicts";
    const apiUrl = `visual-projects?populate=*&filters[slug][$eq]=${projectSlug}`;
    const rawData = await fetchDataForProps(apiUrl);
    var imgArr =[];

    rawData[0].images.data.map(obj=>{
        imgArr.push(
        {
            alt: obj.attributes.alternativeText,
            caption: obj.attributes.caption,
            url: obj.attributes.url
        })
    })

    rawData[0].images = imgArr;    // replace image objects with only the essential data
    const data = rawData[0];
    data.mainUrl = data.imgMain.data.attributes.url; // add main image url simply

    return {props: {data}}
}

export default function ContextConflicts({data}){ 
    // console.log(data)
    
    return (
       <ProjectTemplate data={data}>
            <SimpleImageGallery images={data.images} style={styles.simple_gallery} />
       </ProjectTemplate>
    )
}