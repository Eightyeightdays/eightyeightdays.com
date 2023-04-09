import fetchDataForProps from "../../../utils/fetchDataForProps.js"
import Head from "next/head.js"
import parse from "html-react-parser";
import styles from "../../../styles/Project.module.css"

export async function getStaticPaths(){
    // const projects = await fetchDataForProps("projects");
    const projects = await fetchDataForProps("projects?&filters[type][$eq]=illustrious")

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
    const project = data[0];
    const regex = /\/uploads/g;
    const regex2 = /<img/g;
    const htmlString = project.content.replace(regex, "http://localhost:1337/uploads");
    const string2 = htmlString.replace(regex2, "<img className='richTextImage' ");
    const content = parse(string2);

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
                    {/* <img src={`http://localhost:1337${project.images.data[0].attributes.url}`} alt={project.images.data[0].attributes.alternativeText} /> */}
                </div>
            </div>
        </>
    )
}
