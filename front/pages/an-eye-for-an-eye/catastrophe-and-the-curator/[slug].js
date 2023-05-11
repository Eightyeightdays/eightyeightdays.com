import VisualProject from "components/VisualProject";

export async function getStaticPaths(){
    const URL = process.env.WP_API
    const ENDPOINT = process.env.PROJECT_SLUGS;
    const res = await fetch(`${URL}${ENDPOINT}`); 
    const slugs = await res.json();
    const paths = slugs.map(item=>({
        params: {slug: item.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const query = `&slug=${params.slug}`;
    const URL = process.env.WP_API;
    const ENDPOINT = process.env.VISUAL_PROJECTS;
    const apiUrl = `${URL}${ENDPOINT}${query}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const project = data[0];
    return {props: {project}}
}

export default function ProjectTemplate({project}){
    return(
        <VisualProject project={project} />
    )
}