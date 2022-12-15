import React from "react"
import * as styles from "./Header.module.css"
import Menu from "./Menu.js"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header_titleContainer}>
                <div className={styles.header_title}>Eightyeightdays</div>
            </div>
            <div className={styles.header_menuContainer}>
                <Menu />
            </div>
        </header>
    )
}