import Head from 'next/head'
import styles from "../styles/index.module.css"
import parse from "html-react-parser"

export async function getStaticProps(){
  const URL = process.env.WP_API;
  const SINGLE_PAGE = process.env.SINGLE_PAGE;
  const SLUG = "the-wisdom-of-multiple-perspectives";
  const data = await fetch(`${URL}${SINGLE_PAGE}${SLUG}`);
  const res = await data.json();
  const info = res[0];
  return {props:{info}}
}

export default function Home({info}) {
  const description = parse(info.acf.description);
  const embedCode = parse(info.acf.embed_code)
  const url = info.acf.image.url;
  const alt = info.acf.image.alt;
  return (
      <div>
        <Head>
          <title>{info.acf.meta_title}</title>
          <meta name="description" content={info.acf.meta_description} />
        </Head>

        <div className={styles.main_container}>
          <div className={styles.inner_container}>
            <h1 className={styles.title}>{info.title.rendered}</h1>
            <img className={styles.main_image} src={url} alt={alt}></img>
            <div className={styles.divider}></div>
            <h2 className={styles.description}>{description}</h2>
            <div className={styles.video_container}>
              {embedCode}
            </div>
          </div>
        </div>
      </div>
  )
}


