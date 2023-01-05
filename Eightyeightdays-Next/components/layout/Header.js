import styles from "../../styles/layout/Header.module.css"
import Link from "next/link"
import Menu from "../Menu.js"

export default function Header(){
    return(
        <>
            <header id="header" className={styles.header}>
                <div className={styles.header_title}>
                    <Link href="/">Eightyeightdays</Link>
                </div>
                <div className={styles.menu_container}>
                    <Menu />
                </div>
                
            </header>
        </>
    )
}