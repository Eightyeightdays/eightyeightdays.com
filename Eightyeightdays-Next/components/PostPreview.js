import styles from "../styles/PostPreview.module.css"
import Link from "next/link"

export default function PostPreview({data}){   // props object destructured in parameters
    return(
        <div className={styles.post}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.post_description}>{data.description}</div>
            <div>{data.date}</div>
            <Link href={`/unclog/${data.slug}`}>Continue reading...</Link>
        </div>
    )
}