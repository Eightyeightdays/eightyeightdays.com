import fetchDataForProps from "../../../utils/fetchDataForProps.js";
import styles from "../../../styles/GorillaGlue.module.css";
import ProjectTemplate from "components/ProjectTemplate.js";
import SimpleImageGallery from "components/SimpleImageGallery.js";

export async function getStaticProps(){
    const projectSlug = "gorilla-glue";
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

    const BASE_URL = process.env.BASE_URL;
    return {props: {data:data, BASE_URL:BASE_URL}}
}

export default function GorillaGlue({data, BASE_URL}){ 
    // console.log(data)
    
    return (
       <ProjectTemplate data={data} BASE_URL={BASE_URL}>
            <SimpleImageGallery images={data.images} BASE_URL={BASE_URL}/>
       </ProjectTemplate>
    )
}