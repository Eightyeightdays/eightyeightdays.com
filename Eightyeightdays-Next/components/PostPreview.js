import styles from "../styles/PostPreview.module.css"

export default function PostPreview({data}){   // props object destructured in parameters
    return(
        <div className={styles.post}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.post_description}>{data.description}</div>
        </div>
    )
}