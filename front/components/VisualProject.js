import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/VisualProject.module.css"

export default function VisualProject({project}){
    const content = parse(project.content.rendered);
    const dataType = project.acf.type.replace(/-/g, " ");

    return(
        <>
            <Head>
                <title>{project.title.rendered}</title>
                <meta name="description" content={project.acf.meta_description} />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.outer_container}>
                <Link className={styles.navigate_button} href={`/an-eye-for-an-eye?category=${project.acf.type}#previewContainer`}>Back to <div className={styles.dataType}>{dataType}</div></Link>
                <div className={styles.main_container}>
                    <h1 className={styles.title}>{project.title.rendered}</h1>
                    <img src={project.acf.banner.url} alt={project.acf.banner.alt} className={styles.main_img}></img>
                    <div className={styles.divider}></div>
                    <div className={styles.content}>{content}</div>
                </div>
            </div>
        </>
    )
}