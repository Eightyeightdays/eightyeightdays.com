import React from "react"
import * as styles from "./Menu.module.css"
import {Link} from "gatsby";

export default function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menu_title}>
                <Link to="/human-writes/">Human Writes</Link>
            </div>
            <div className={styles.menu_item}>
                <div className={styles.menu_title}>
                    <Link to="/an-eye-for-an-eye/">An Eye For An Eye</Link>
                </div>
                <div className={styles.menu_content}>
                    <div className={styles.menu_content_item}>Series</div>
                    <div className={styles.menu_content_item}>Processes</div>
                    <div className={styles.menu_content_item}>On Photography</div>
                    <div className={styles.menu_content_item}>Galeries</div>    
                </div>
            </div>

            <div className={styles.menu_title}>About</div>
        </div>
    )
}