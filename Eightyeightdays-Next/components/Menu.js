import styles from "../styles/Menu.module.css"
import Link from "next/link"

export default function Menu(toggle){
    return(
        <div className={styles.menu}>
            <Link className={toggle ? `${styles.menu_title_clicked}` : `${styles.menu_title}` + `${styles.menu_title_2}`} href="/about/">Pars Pro Toto</Link>
            <Link className={styles.menu_title} href="/human-writes/">Human Writes</Link>
            <Link className={styles.menu_title} href="/non-martial-arts/">Non Martial Arts</Link>
            <Link className={styles.menu_title} href="/exhibitionism/">Indecent Exposures</Link>
            <div className={styles.menu_dropdown}>
                <div><Link className={styles.menu_dropdown_link} href="/an-eye-for-an-eye/">An Eye For An Eye</Link></div>
                <div className={styles.menu_content}>
                    <Link className={styles.menu_content_item} href="/an-eye-for-an-eye/illustration">Illustration</Link>
                    <Link className={styles.menu_content_item} href="/an-eye-for-an-eye/photosynthesis">Photosynthesis</Link>
                    <Link className={styles.menu_content_item} href="/an-eye-for-an-eye/on-photography">On Photography</Link>
                    <Link className={styles.menu_content_item} href="/an-eye-for-an-eye/videos">Succession Stories</Link>  
                </div>
            </div>
        </div>
    )
}