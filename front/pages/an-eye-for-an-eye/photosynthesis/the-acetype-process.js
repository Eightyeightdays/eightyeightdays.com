import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import ProjectTemplate from "components/ProjectTemplate.js";
import parse from "html-react-parser"
import styles from "../../../styles/TheAcetypeProcess.module.css"

export async function getStaticProps(){
    const projectSlug = "the-acetype-process";
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

export default function TheAcetypeProcess({data, BASE_URL}){ 
    // console.log(data)
    const embedCode = data.embedCode ? parse(data.embedCode) : null;
    return (
       <ProjectTemplate data={data} BASE_URL={BASE_URL}>
            <div className={styles.video}>{embedCode}</div>
       </ProjectTemplate>
    )
}