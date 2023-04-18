import styles from "../../styles/layout/Header.module.css"
import Link from "next/link"
import Menu from "../Menu.js";

export default function Header(){

    return(
        <>
            <header id="header" className={styles.header}>
                <Link href="/">
                    <img className={styles.header_icon} src="http://localhost:1337/uploads/Leaf_Photogram_95f13ca374.png"></img>
                </Link>
                <div className={styles.header_title}>
                    <Link href="/">Eightyeightdays</Link>
                </div>
                <Menu />
            </header>
        </>
    )
}