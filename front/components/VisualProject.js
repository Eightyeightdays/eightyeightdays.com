import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/VisualProject.module.css"

export default function VisualProject({project}){
    const content = parse(project.content.rendered);
    const embed = parse(project.acf.embed_code);
    const dataType = project.acf.type.replace(/-/g, " ");
    const oldTitle = project.title.rendered;
    const title = oldTitle.replace("&#8217;", "'");
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={project.acf.meta_description} />
            </Head>
            <div className={styles.outer_container}>
                <Link className={styles.navigate_button} href={`/an-eye-for-an-eye?category=${project.acf.type}#previewContainer`}>Back to <div className={styles.dataType}>{dataType}</div></Link>
                <div className={styles.main_container}>
                    <h1 className={styles.title}>{title}</h1>
                    <img src={project.acf.banner.url} alt={project.acf.banner.alt} className={styles.main_img}></img>
                    <div className={styles.divider}></div>
                    <div className={styles.content}>{content}</div>
                    {project.acf.embed_code && <div className={styles.embed}>{embed}</div>}
                    <div className={styles.symbol_container}>&#9830; &#9830; &#9830;</div>
                </div>
            </div>
        </>
    )
}