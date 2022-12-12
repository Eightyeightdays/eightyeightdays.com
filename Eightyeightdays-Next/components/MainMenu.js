import styles from "../styles/MainMenu.module.css"

export default function MainMenu(){
    return (
        <nav className={styles.nav}>
            <div>Unclog</div>
            <div>Writing</div>
            <div>Videos</div>
            <div>Photography</div>
            <div>About</div>
        </nav>
    )
}