import styles from "../styles/WritingCategoryCard.module.css";

export default function WritingCategoryCard({title, imgUrl, fun, count, latest, name}){
    let date = new Date(latest).toString().substring(0,15)
    let text ="";
    if(count == 1){
        text = "Post"
    }else{
        text = "Posts"
    }
    return(
        <div id={name} className={`${styles.category_card} card`} onClick={()=>fun(title)}>
            <img src={`http://localhost:1337${imgUrl}`} className={styles.category_card_img} alt="" ></img>
            <div className={styles.category_card_title}>{title}</div>
            <p className={styles.category_card_details}>{count} {text}</p>
            <p className={styles.category_card_details}>Updated: {date}</p>
        </div>
    )
}