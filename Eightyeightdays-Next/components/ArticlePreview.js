import styles from "../styles/ArticlePreview.module.css"

export default function ArticlePreview({data}){   // props object destructured in parameters
    return(
        <div className={styles.article}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.article_description}>{data.description}</div>
        </div>
    )
}