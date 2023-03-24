import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/NewMenu.module.css"

export default function NewMenu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Pars Pro Toto</div>
            </div>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Human Writes</div>
            </div>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>An Eye For An Eye</div>
                <div className={styles.submenu}>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Indecent Exposures</div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Illustrious</div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Photosynthesis</div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>To Succeed</div>
                    </div>
                </div>
            </div>    
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Non Martial Arts</div>
            </div>
        </div>
    )
}