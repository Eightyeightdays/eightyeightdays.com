import styles from "../styles/Article.Preview.module.css"
import Link from "next/link"
import parse from "html-react-parser";

export default function ArticlePreview({data}){   // props object destructured in parameters
    let date = new Date(data.createdAt).toString().substring(0,15)
    let htmlString = data.content.substring(0, 150)
    const preview = parse(htmlString)
    return(
        <Link href={`/human-writes/${data.slug}`} className={styles.post}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.post_description}>{data.description}</div>
            <div>{preview}</div>
            <div>Date posted: {date}</div>
        </Link>
    )
}