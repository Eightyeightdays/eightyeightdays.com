import styles from "../styles/Menu.module.css"
import Link from "next/link"

export default function Menu({toggle}){
    console.log(toggle)
    return(
        <div className={styles.menu}>
            <Link className={`${styles.menu_title} ` + `${styles.menu_title_1} ` + (toggle ? `${styles.menu_title_clicked}` : "")} href="/about/">Pars Pro Toto</Link>
            <Link className={`${styles.menu_title} ` + `${styles.menu_title_2} ` + (toggle ? `${styles.menu_title_clicked}` : "")} href="/human-writes/">Human Writes</Link>
            <Link className={`${styles.menu_title} ` + `${styles.menu_title_3} ` + (toggle ? `${styles.menu_title_clicked}` : "")} href="/non-martial-arts/">Non Martial Arts</Link>
            <Link className={`${styles.menu_title} ` + `${styles.menu_title_4} ` + (toggle ? `${styles.menu_title_clicked}` : "")} href="/exhibitionism/">Indecent Exposures</Link>
            <div className={styles.menu_dropdown}>
                <div><Link className={`${styles.menu_dropdown_link} ` + `${styles.menu_title_5} ` + (toggle ? `${styles.menu_dropdown_link_clicked}` : "")} href="/an-eye-for-an-eye/">An Eye For An Eye</Link></div>
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