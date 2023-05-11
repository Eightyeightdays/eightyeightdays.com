import Link from "next/link";
import styles from "../styles/ProjectPreviewCard.module.css";

export default function ProjectPreviewCard({type, slug, url, alt, title, description, year}){
    return(
        <Link className={styles.preview_card} href={`/an-eye-for-an-eye/${type}/${slug}`}>
            <img className={styles.preview_card_img} src={url} alt={alt} />
            <div className={styles.preview_card_title}>{title}</div>
            <div className={styles.preview_card_description}>{description}</div>
            <div className={styles.symbol_container}>&#9830;</div>
            <div className={styles.preview_card_year}>{year}</div>
        </Link>
    )
}