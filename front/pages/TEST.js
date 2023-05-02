import parse from "html-react-parser";
import Head from "next/head";
import styles from "../styles/TEST.module.css"

export async function getStaticProps(){
   const json = await fetch("http://eightyeightdays.com/wp-json/wp/v2/posts?_fields=title,content,yoast_head") ;
   const data = await json.json()
   return {props:{data}}
}

export default function Test({data}){
    const title = parse(data[0].title.rendered)
    const content = parse(data[0].content.rendered);
    const head = parse(data[0]["yoast_head"]);

    return(
        <>
            <Head>
                {head}
            </Head>
            <div className={styles.container}>
                <h1>{title}</h1>
                {content}
            </div>
        </>
    )
}