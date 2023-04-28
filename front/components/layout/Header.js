import styles from "../../styles/layout/Header.module.css"
import Link from "next/link"
import Menu from "../Menu.js";
import MobileMenu from "../MobileMenu.js";
import { useState } from "react";

export default function Header(){
    const [state, setState] = useState(false)
    function toggleMenu(){
        if(!state){
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }else{
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }
        setState(!state)
    }

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
                {state && <MobileMenu handleClick={toggleMenu}/>}
                <div className={styles.menu_button} onClick={toggleMenu}>X</div>
            </header>
        </>
    )
}