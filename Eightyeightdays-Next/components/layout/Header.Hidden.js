import styles from "../../styles/layout/Header.Hidden.module.css"

export default function HeaderHidden(){
    return(
        <>
            <header id="header" className={styles.header}>
                <div className={styles.header_title}>
                    <div>Eightyeightdays</div>
                </div>
            </header>
        </>
    )
}