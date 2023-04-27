import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import ProjectTemplate from "components/ProjectTemplate.js";
import styles from "../../../styles/ConditionalGallery.module.css";
import SimpleImageGallery from "../../../components/SimpleImageGallery.js";

export async function getStaticProps(){
    const projectSlug = "roots-routes";
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

export default function RootsRoutes({data}){ 
    // console.log(data)
    
    return (
       <ProjectTemplate data={data}>
                        <SimpleImageGallery images={data.images} style={styles.simple_gallery} />
       </ProjectTemplate>
    )
}