import styles from "../styles/Header.module.css"
import MainMenu from "./MainMenu.js"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header_title}>Eightyeightdays</div>
            <MainMenu />
        </header>
    )
}