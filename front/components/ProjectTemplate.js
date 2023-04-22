import Head from "next/head.js"
import styles from "../styles/ProjectTemplate.module.css"
import parse from "html-react-parser"
import Link from "next/link";

export default function ProjectTemplate({data, children}){
    const content = parse(data.content);
    const dataType = data.type.replace(/-/g, " ");

    return(
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.metaDescription} />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.outer_container}>
                <Link className={styles.navigate_button} href={`/an-eye-for-an-eye?category=${data.type}#previewContainer`}>Back to <div className={styles.dataType}>{dataType}</div></Link>
                <div className={styles.main_container}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <img src={`http://localhost:1337${data.mainUrl}`} alt={``} className={styles.main_img}></img>
                    <div className={styles.divider}></div>
                    <div className={styles.content}>{content}</div>
                </div>
                {children}
            </div>
            
        </>
    )
}