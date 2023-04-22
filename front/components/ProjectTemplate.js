import Head from "next/head.js"
import styles from "../styles/ProjectTemplate.module.css"
import parse from "html-react-parser"
import Link from "next/link";

export default function ProjectTemplate({data, children}){
    const content = parse(data.content);
    
    return(
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.outer_container}>
                <Link className={styles.navigate_button} href={`/an-eye-for-an-eye?category=${data.type}#previewContainer`}>Back to {data.type}</Link>
                <div className={styles.main_container}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.content}>{content}</div>
                </div>
                {children}
            </div>
            
        </>
    )
}