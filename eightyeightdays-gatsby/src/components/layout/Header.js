import React from "react"
import * as styles from "./Header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header_titleContainer}>
                <div className={styles.header_title}>Eightyeightdays.com</div>
            </div>
            <div className={styles.header_menuContainer}>
                <div className={styles.header_menu}>Menu</div>
            </div>
        </header>
    )
}