import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../../styles/Project.module.css";

export async function getStaticPaths(){
    // const projects = await fetchDataForProps("projects");
    const projects = await fetchDataForProps("projects?&filters[type][$eq]=domestication");

    const paths = projects.map(obj=>({
        params: {slug: obj.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const apiUrl = `projects?populate=*&filters[slug][$eq]=${params.slug}`
    const data = await fetchDataForProps(apiUrl)

    return {props: {data}}
}

export default function Project({data}){
    const project = data[0]
    const htmlString = project.content;
    const content = parse(htmlString)

    console.log(data)
    return(
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.main_container}>
                <div className={styles.project_container}>
                    <h1 className={styles.project_title}>{project.title}</h1>
                    <div className={styles.project_content}>{content}</div>
                    <img src={`http://localhost:1337${project.images.data[0].attributes.url}`} alt={project.images.data[0].attributes.alternativeText} />
                </div>
            </div>
        </>
    )
}
