import styles from "../styles/Menu.module.css"
import Link from "next/link"
import { useEffect } from "react"

export default function Menu({toggle, toggleMenu, setToggle, subToggle, toggleSubMenu, setSubToggle}){

    useEffect(()=>{
        document.addEventListener("click", function(event){
            if(event.target.dataset.area !== "menu"){
                console.log("toggle set to false")
                setSubToggle(false)
                setToggle(false)
            }
        })
    }, [])
    

    if(!toggle){
        setSubToggle(false)
    }

    return(
        <div data-area="menu" className={styles.container}>
            <div data-area="menu" className={styles.menu} onClick={toggleMenu}>
                <Link data-area="menu" className={`${styles.menu_title} ` + `${styles.delay_1} ` + (toggle ? `${styles.clicked}` : "")} href="/about/">Pars Pro Toto</Link>
                <Link data-area="menu" className={`${styles.menu_title} ` + `${styles.delay_2} ` + (toggle ? `${styles.clicked}` : "")} href="/human-writes/">Human Writes</Link>
                <Link data-area="menu" className={`${styles.menu_title} ` + `${styles.delay_3} ` + (toggle ? `${styles.clicked}` : "")} href="/non-martial-arts/">Non Martial Arts</Link>
                {/* <Link data-area="menu" className={`${styles.menu_title} ` + `${styles.delay_4} ` + (toggle ? `${styles.clicked}` : "")} href="/exhibitionism/">Indecent Exposures</Link> */}
                <div data-area="menu" className={styles.menu_dropdown}>
                    <div data-area="menu">
                        <Link data-area="menu" className={`${styles.menu_dropdown_link} ` + `${styles.delay_5} ` + (toggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/">
                            An Eye For An Eye
                        </Link>
                    </div>
                    <div data-area="menu" className={`${styles.menu_content} ` + (subToggle ? `${styles.menu_content_clicked}` : "")}>
                        <Link data-area="menu" className={`${styles.menu_content_item} ` + `${styles.delay_1} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/illustration">Illustration</Link>
                        <Link data-area="menu" className={`${styles.menu_content_item} ` + `${styles.delay_2} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/photosynthesis">Photosynthesis</Link>
                        <Link data-area="menu" className={`${styles.menu_content_item} ` + `${styles.delay_3} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/on-photography">On Photography</Link>
                        <Link data-area="menu" className={`${styles.menu_content_item} ` + `${styles.delay_4} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/videos">Succession Stories</Link>  
                        <Link data-area="menu" className={`${styles.menu_content_item} ` + `${styles.delay_4} ` + (subToggle ? `${styles.clicked}` : "")} href="/an-eye-for-an-eye/exhibitionism/">Indecent Exposures</Link>

                    </div>
                </div>
            </div>
            <div data-area="menu" className={styles.test}>
                <div data-area="menu" className={`${styles.test_button} ` + (subToggle ? `${styles.test_button_clicked}` : "")} onClick={toggleSubMenu}>{subToggle ? "X" : "Y"}</div>
            </div>
        </div>
    )
}