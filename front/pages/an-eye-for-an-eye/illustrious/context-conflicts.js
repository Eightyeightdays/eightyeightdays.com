import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import ProjectTemplate from "components/ProjectTemplate.js";

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

    return {props: {data}}
}

export default function ContextConflicts({data}){ 
    console.log(data)
    
    return (
       <ProjectTemplate data={data}>
            {/* <div>TEST</div> */}
       </ProjectTemplate>
    )
}