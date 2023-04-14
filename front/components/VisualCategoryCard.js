import styles from "../styles/VisualCategoryCard.module.css";


export default function VisualCategoryCard({setCategory, categoryData, url, alt, title, description}){
    return(
        <div className={styles.category_card} onClick={()=>setCategory(categoryData)}>
            <img src={`http://localhost:1337${url}`} alt={alt} className={styles.category_card_img} />
            <div className={styles.category_card_title}>{title}</div>
            <div className={styles.category_card_description}>{description}</div>
        </div>
    )
}