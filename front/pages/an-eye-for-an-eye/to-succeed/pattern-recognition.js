import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import ProjectTemplate from "components/ProjectTemplate.js";
import parse from "html-react-parser";
import styles from "../../../styles/PatternRecognition.module.css"

export async function getStaticProps(){
    const projectSlug = "pattern-recognition";
    const apiUrl = `visual-projects?populate=*&filters[slug][$eq]=${projectSlug}`;
    const rawData = await fetchDataForProps(apiUrl);
    const data = rawData[0];

    data.mainUrl = data.imgMain.data.attributes.url; // add main image url simply
    return {props: {data}}
}

export default function PatternRecognition({data}){ 
    // console.log(data)
    const embedCode = data.embedCode ? parse(data.embedCode) : null;
    return (
       <ProjectTemplate data={data}>
            <div className={styles.video}>{embedCode}</div>
       </ProjectTemplate>
    )
}