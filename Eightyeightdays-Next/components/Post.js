import styles from "../styles/Post.module.css"

export default function Post({data}){   // props object destructured in paramaters
    return(
        <div className={styles.post}>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.post_description}>{data.description}</div>
            <div className={styles.post_content}>{data.content}</div>
        </div>
    )
}