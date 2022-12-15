import React from "react"
import * as styles from "./Menu.module.css"

export default function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menu_title}>Unclog</div>
            <div className={styles.menu_title}>Human Writes</div>
            
            <div className={styles.menu_item}>
                <div className={styles.menu_title}>An Eye For An Eye</div>
                <div className={styles.menu_content}>
                    <div className={styles.menu_content_item}>Series</div>
                    <div className={styles.menu_content_item}>Processes</div>
                    <div className={styles.menu_content_item}>Galeries</div>    
                </div>
            </div>

            <div className={styles.menu_title}>About</div>
        </div>
    )
}