import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import Link from 'next/link'

export default function AnEyeForAnEye({data}){
    console.log(data)
    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Photography Home</h1>
            <div className={styles.container}>
                <Link href="/an-eye-for-an-eye/series" className={styles.card}>
                    <h2 className={styles.title}>Series</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link>
                <Link href="/an-eye-for-an-eye/processes" className={styles.card}>
                    <h2 className={styles.title}>Processes</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
                <Link  href="/an-eye-for-an-eye/on-photography" className={styles.card}>
                    <h2 className={styles.title}>On Photography</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
                <Link href="/an-eye-for-an-eye/videos" className={styles.card}>
                    <h2 className={styles.title}>Videos</h2>
                    <img className={styles.preview_image} src=""></img>
                    <div className={styles.description}></div>
                </Link >
            </div>
            
        </>
    )
}