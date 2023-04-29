import Head from 'next/head'
import styles from "../styles/index.module.css"
import fetchDataForProps from 'utils/fetchDataForProps';
import parse from "html-react-parser"

export async function getStaticProps(){
  const data = await fetchDataForProps("page-infos?filters[pageName][$eq]=index&populate=*");
  const info = data[0];
  return {props:{info}}
}

export default function Home({info}) {
  const description = parse(info.description);
  const embedCode = parse(info.embedCode)
  const url = info.image.data.attributes.url;
  return (
      <div>
        <Head>
          <title>{info.metaTitle}</title>
          <meta name="description" content={info.metaDescription} />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className={styles.main_container}>
          
          <div className={styles.inner_container}>
            <h1 className={styles.title}>{info.title}</h1>
            <img className={styles.main_image} src={`${process.env.BASE_URL}${url}`} alt=""></img>
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


