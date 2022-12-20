import React from "react"
import * as styles from "./Header.module.css"
import Menu from "./Menu.js"
import { Link } from "gatsby"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header_titleContainer}>
                <div className={styles.header_title}>
                    <Link to="/">Eightyeightdays</Link>
                </div>
            </div>
            <div className={styles.header_menuContainer}>
                <Menu />
            </div>
        </header>
    )
}