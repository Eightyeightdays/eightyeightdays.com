import styles from "../styles/MainMenu.module.css"
import Link from "next/link"

export default function MainMenu(){
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div><Link href="/unclog">Unclog</Link></div>
                <div><Link href="/writing">Writing</Link></div>
                <div>Videos</div>
                <div>Photography</div>
                <div>About</div>
            </nav>
        </div>
        
    )
}