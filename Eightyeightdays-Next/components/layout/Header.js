import styles from "../../styles/layout/Header.module.css"
import Link from "next/link"
import Menu from "../Menu.js"
import { useState } from "react"

export default function Header(){
    const [menu, setMenu] = useState(false);

    function toggleMenu(){
        setMenu(!menu)
    }

    return(
        <>
            <header id="header" className={styles.header}>
                <div className={styles.header_title}>
                    <Link href="/" onClick={toggleMenu}>Eightyeightdays</Link>
                </div>
                <div className={menu ? styles.menu_container : styles.menu_container_clicked} onClick={toggleMenu}>
                    <Menu toggle={menu}/>
                </div>
                <div className={menu? styles.menu_button_clicked : styles.menu_button} onClick={toggleMenu}>{menu? "X" : "Y"}</div>
            </header>
        </>
    )
}