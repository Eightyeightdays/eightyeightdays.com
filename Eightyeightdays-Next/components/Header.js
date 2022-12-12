import styles from "../styles/Header.module.css"
import MainMenu from "./MainMenu.js"
import Link from "next/link"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header_title}>
                <Link href="/">Eightyeightdays</Link>
            </div>
            <MainMenu />
        </header>
    )
}