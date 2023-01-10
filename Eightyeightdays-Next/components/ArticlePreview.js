import styles from "../styles/unclog/Unclog.Preview.module.css"
import Link from "next/link"

export default function ArticlePreview({data}){   // props object destructured in parameters
    return(
        <div className={styles.post}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.post_description}>{data.description}</div>
            <Link href={`/writing/${data.slug}`}>Continue reading...</Link>
        </div>
    )
}