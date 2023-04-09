import styles from "../styles/Article.Preview.module.css"
import Link from "next/link"
import parse from "html-react-parser";

export default function ArticlePreview({data}){   // props object destructured in parameters
    let date = new Date(data.createdAt).toString().substring(0,15)
    let htmlString = data.content.substring(0, 150)
    const preview = parse(htmlString)
    return(
        <Link href={`/human-writes/${data.slug}`} className={styles.preview_card}>
            <div className={styles.preview_card_title}>{data.title}</div>
            <div className={styles.preview_card_description}>{data.description}</div>
            <div className={styles.preview_card_preview}>{preview}</div>
            <div className={styles.symbol_container}>&#9830;</div>
            <div className={styles.preview_card_date}>Date posted: {date}</div>
        </Link>
    )
}