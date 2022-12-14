import styles from "../../styles/layout/Header.module.css"
import MainMenu from "./MainMenu.js"
import Link from "next/link"

export default function Header(){
    return(
        <>
            <header id="header" className={styles.header}>
                <div className={styles.header_title}>
                    <Link href="/">Eightyeightdays</Link>
                </div>
                <MainMenu />
            </header>
        </>
    )
}