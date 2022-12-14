import Header from "./Header.js";
import HeaderHidden from "./Header.Hidden.js";
import Footer from "./Footer.js";

export default function Layout({children}){
    return(
        <>        
            <Header />
            <HeaderHidden />
            {children}
            <Footer />  
        </>
    )
}