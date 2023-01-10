import styles from "./Menu.module.css"
import Link from "next/link"

export default function Menu(){
    return(
        <div className={styles.menu}>
            <Link className={styles.menu_title} href="/human-writes/">Human Writes</Link>
            <div className={styles.menu_dropdown}>
                <div className={styles.menu_title}><Link href="/an-eye-for-an-eye/">An Eye For An Eye</Link></div>
                <div className={styles.menu_content}>
                    <div className={styles.menu_content_item}>Serialisation</div>
                    <div className={styles.menu_content_item}>Photosynthesis</div>
                    <div className={styles.menu_content_item}>On Photography</div>
                    <div className={styles.menu_content_item}>Videos</div>  
                </div>
            </div>
            <div className={styles.menu_title}>Non Martial Arts</div>
            <div className={styles.menu_title}>Exhibitionism</div>
            <div className={styles.menu_title}>About</div>
        </div>
    )
}