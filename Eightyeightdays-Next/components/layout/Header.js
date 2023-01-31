import styles from "../../styles/layout/Header.module.css"
import Link from "next/link"
import Menu from "../Menu.js"
import { useState } from "react"

export default function Header(){
    const [toggle, setToggle] = useState(false);
    const [subToggle, setSubToggle] = useState(false);

    function toggleMenu(){
        setToggle(!toggle)
    }

    function toggleSubMenu(){
        setSubToggle(!subToggle)
    }

    return(
        <>
            <header id="header" className={styles.header}>
                <div className={styles.header_title}>
                    <Link href="/">Eightyeightdays</Link>
                </div>
                <div className={toggle ? styles.menu_container_clicked : styles.menu_container} >
                    <Menu toggle={toggle} toggleMenu={toggleMenu} setToggle={setToggle} subToggle={subToggle} toggleSubMenu={toggleSubMenu} setSubToggle={setSubToggle}/>
                </div>
                <div data-area="menu" className={`${styles.menu_button} ` + (toggle? `${styles.menu_button_clicked}` : "")} onClick={toggleMenu}>{toggle? "X" : "Y"}</div>
            </header>
        </>
    )
}