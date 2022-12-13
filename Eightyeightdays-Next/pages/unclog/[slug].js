import fetchDataForProps from "../../utils/fetchDataForProps.js"

export default function Post({data}){
    console.log(data)
    const post = data[0]
    return(
        <>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </>
    )
}

export async function getStaticPaths(){
    const posts = await fetchDataForProps("posts")
    const paths = posts.map(obj=>({
        params: {slug: obj.slug}
    }))
    
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const apiUrl = `posts?filters[slug][$eq]=${params.slug}`
    const data = await fetchDataForProps(apiUrl)

    return {props: {data}}
}