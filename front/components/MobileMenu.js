import styles from "../styles/MobileMenu.module.css"
import Link from "next/link"

export default function MobileMenu({handleClick}){
    return(
        <div className={styles.menu}>
            <Link href="/an-eye-for-an-eye/" className={styles.menu_item} onClick={handleClick}>An Eye For An Eye</Link>
            <Link href="/human-writes/" className={styles.menu_item} onClick={handleClick}>Human Writes</Link>
            {/* <Link href="/non-martial-arts/" className={styles.menu_item} onClick={handleClick}>Non Martial Arts</Link> */}
            <Link href="/exhibitionism/" className={styles.menu_item} onClick={handleClick}>Exhibitionism</Link>
            {/* <Link href="/about/" className={styles.menu_item} onClick={handleClick}>Pars Pro Toto</Link> */}
        </div>
    )
}