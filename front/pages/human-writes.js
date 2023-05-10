import { useState } from 'react';
import Head from 'next/head.js';
import fetchDataForProps from '../utils/fetchDataForProps.js';
import ArticlePreview from '../components/ArticlePreview.js';
import WritingCategoryCard from 'components/WritingCategoryCard.js';
import styles from "../styles/Human-Writes.module.css";
import { useSearchParams } from "next/navigation";

export async function getStaticProps(){
    const URL = process.env.WP_API;
    const POSTS_ENDPOINT = process.env.POSTS_API_ENDPOINT;
    const IMAGES_ENDPOINT = process.env.VISUAL_CATEGORY_PREVIEWS_API_ENDPOINT;
    const res = await fetch(`${URL}${POSTS_ENDPOINT}`);
    const articles = await res.json();
    
    let artArr = []
    let photoArr = []
    let philArr = []
    let textArr = []
    let nmaArr = []
    let blogArr = []

    articles.map(post=>{    
        post.acf.category.map(category=>{
            switch(category){
                case "Art":
                artArr.push(post);
                break;
                case "Photography":
                photoArr.push(post);
                break;
                case "Philosophy":
                philArr.push(post)
                break;
                case "Creative Writing":
                textArr.push(post)
                break;
                case "Non Martial Arts":
                nmaArr.push(post);
                break;
                case "Unclog":
                blogArr.push(post)
            }
        })
    })

    const imageData = await fetch(`${URL}${IMAGES_ENDPOINT}`);
    const images = await imageData.json();

    // create an object where the category type is the key and the image url is the value //
    let imageObj = {};
    images.map(item=>{
        imageObj[item.acf.category] = item.acf.image.url;  
    })

    const BASE_URL = process.env.BASE_URL;
    
    const categories = [
        {category: "Art", count: artArr.length, latest: artArr[0].date},
        {category: "Photography", count: photoArr.length, latest: photoArr[0].date},
        {category: "Philosophy", count: philArr.length, latest: philArr[0].date},
        {category: "Creative Writing", count: textArr.length, latest: textArr[0].date},
        {category: "Non Martial Arts", count: nmaArr.length, latest: nmaArr[0].date},
        {category: "Unclog", count: blogArr.length, latest: blogArr[0].date}
    ]

    return {props: 
    {
        articles: articles, 
        images: imageObj, 
        categories: categories,
        art: artArr,
        photography: photoArr,
        philosophy: philArr,
        writing: textArr,
        nma: nmaArr,
        unclog: blogArr,
        BASE_URL: BASE_URL
    }}
}

export default function Writing({articles, images, categories, art, photography, philosophy, writing, nma, unclog, BASE_URL}){
    const params = useSearchParams();
    var query = params.get("category");
    const initialFlag = query? true : false;
    const [flag, setFlag] = useState(initialFlag)
    

    var initialState;

    switch(query){
        case "Art":
            initialState = art;
        break;
        case "Photography":
            initialState = photography;
        break;
        case "Philosophy":
            initialState = philosophy;
        break;
        case "Non Martial Arts":
            initialState = nma;
        break;
        case "Creative Writing":
            initialState = writing;
        break;
        case "Unclog":
            initialState = unclog;
        break;
    }
    
    const [posts, setPosts] = useState(initialState)


    function FilterCategories(category){
        switch(category){
            case "Art":
            setPosts(art);
            break;
            case "Photography":
            setPosts(photography);
            break;
            case "Philosophy":
            setPosts(philosophy);
            break;
            case "Creative Writing":
            setPosts(writing);
            break;
            case "Non Martial Arts":
            setPosts(nma);
            break;
            case "Unclog":
            setPosts(unclog)
        }    

        setFlag(true)
    }

    function ShowAllCategories(){
        setPosts(articles)
    }

    const subtitle = "Texts and articles on various topics from art and rationality, to exercise, mental health, and darkroom photography."

    return(
        <>
            <Head>
                <title>Human Writes</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={styles.heading_container}>
                <h1 className={styles.title}>Human Writes</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.category_container}>
                {categories.map((item, index) =>(
                    <WritingCategoryCard 
                        name={`category_${index}`} 
                        key={index} title={item.category} 
                        imgUrl={images[item.category]} 
                        fun={FilterCategories} 
                        count={item.count} 
                        latest={item.latest}
                        BASE_URL={BASE_URL}
                    />
                ))}
            </div>

            <div className={styles.category_button_container}>
                <div className={flag? styles.category_button: styles.category_button_hidden} onClick={ShowAllCategories}>{flag ? "Show All Categories" : ""}</div>
            </div>
            
            <div className={styles.divider_container}>
                <div className={styles.divider}></div>
            </div>
            
            <div className={styles.preview_container} id="previewContainer">
                {posts && posts.map((obj, index) => (
                    <ArticlePreview data={obj} key={index} />
                ))}
            </div>   
        </>
    )
}