import styles from "../styles/Menu.module.css"
import Link from "next/link"

export default function Menu({toggle, toggleMenu, subToggle, toggleSubMenu, setSubToggle}){

    if(!toggle){
        setSubToggle(false)
    }

    return(
        <div className={styles.container}>
            <div className={styles.menu} onClick={toggleMenu}>
                <Link className={`${styles.menu_title} ` + `${styles.delay_1} ` + (toggle ? `${styles.clicked}` : "")} href="/about/">Pars Pro Toto</Link>
                <Link className={`${styles.menu_title} ` + `${styles.delay_2} ` + (toggle ? `${styles.clicked}` : "")} href="/human-writes/">Human Writes</Link>
                <Link className={`${styles.menu_title} ` + `${styles.delay_3} ` + (toggle ? `${styles.clicked}` : "")} href="/non-martial-arts/">Non Martial Arts</Link>
                <Link className={`${styles.menu_title} ` + `${styles.delay_4} ` + (toggle ? `${styles.clicked}` : "")} href="/exhibitionism/">Indecent Exposures</Link>
                <div className={styles.menu_dropdown}>
                    <div>
                        <Link className={`${styles.menu_dropdown_link} ` + `${styles.delay_5} ` + (toggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/">
                            An Eye For An Eye
                        </Link>
                    </div>
                    <div className={`${styles.menu_content} ` + (subToggle ? `${styles.menu_content_clicked}` : "")}>
                        <Link className={`${styles.menu_content_item} ` + `${styles.delay_1} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/illustration">Illustration</Link>
                        <Link className={`${styles.menu_content_item} ` + `${styles.delay_2} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/photosynthesis">Photosynthesis</Link>
                        <Link className={`${styles.menu_content_item} ` + `${styles.delay_3} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/on-photography">On Photography</Link>
                        <Link className={`${styles.menu_content_item} ` + `${styles.delay_4} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/videos">Succession Stories</Link>  
                    </div>
                </div>
            </div>
            <div className={styles.test}>
                <div className={`${styles.test_button} ` + (subToggle ? `${styles.test_button_clicked}` : "")} onClick={toggleSubMenu}>{subToggle ? "X" : "Y"}</div>
            </div>
        </div>
    )
}