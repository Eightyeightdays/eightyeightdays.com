import styles from "../styles/Menu.module.css"
import Link from "next/link"

export default function Menu(){
    return(
        <div className={styles.menu}>
            <Link href="/an-eye-for-an-eye/" className={styles.menu_item}>An Eye For An Eye</Link>
            <Link href="/human-writes/" className={styles.menu_item}>Human Writes</Link>
            {/* <Link href="/non-martial-arts/" className={styles.menu_item}>Non Martial Arts</Link> */}
            <Link href="/exhibitionism/" className={styles.menu_item}>Exhibitionism</Link>
            {/* <Link href="/about/" className={styles.menu_item}>Pars Pro Toto</Link> */}
        </div>
    )
}