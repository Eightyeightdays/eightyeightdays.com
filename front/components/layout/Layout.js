import Header from "./Header.js";
import Footer from "./Footer.js";
import styles from "../../styles/layout/Content.module.css"

export default function Layout({children}){
    return(
        <>        
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            {/* <Footer />   */}
        </>
    )
}