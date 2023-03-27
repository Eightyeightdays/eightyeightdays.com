import styles from "../styles/NewMenu.module.css"
import Link from "next/link"
import { useEffect } from "react"

export default function NewMenu(){
    return(
        <div className={styles.menu}>
            <Link href="/an-eye-for-an-eye/" className={styles.menu_item}>An Eye For An Eye</Link>
            <Link href="/human-writes/" className={styles.menu_item}>Human Writes</Link>
            <Link href="/non-martial-arts/" className={styles.menu_item}>Non Martial Arts</Link>
            <Link href="/about/" className={styles.menu_item}>Pars Pro Toto</Link>
        </div>
    )
}