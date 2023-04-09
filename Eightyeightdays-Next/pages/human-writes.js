import fetchDataForProps from '../utils/fetchDataForProps.js'
import ArticlePreview from '../components/ArticlePreview.js'
import Head from 'next/head.js'
import styles from "../styles/Human-Writes.module.css"
import { useEffect, useState } from 'react'

export async function getStaticProps(){
    let data = await fetchDataForProps("articles?populate=*")
    data.sort((a,b)=> a.createdAt > b.createdAt? -1 : 1)
    const test = await fetch("http://localhost:1337/api/category-preview-images?populate=*")
    const json = await test.json()
    const categories = await fetchDataForProps("categories?populate=*")

  return {props: {articles: data, images: json, categories: categories}}
}

export function Category({title, imgUrl, fun, count, latest, name}){
    let date = new Date(latest).toString().substring(0,15)
    let text ="";
    if(count == 1){
        text = "Post"
    }else{
        text = "Posts"
    }
    return(
        <div id={name} className={`${styles.category_card} card`} onClick={(event)=>fun(event, title)}>
            <img src={`http://localhost:1337${imgUrl}`} className={styles.category_card_img} alt="" ></img>
            <div className={styles.category_card_title}>{title}</div>
            <p className={styles.category_card_details}>{count} {text}</p>
            <p className={styles.category_card_details}>Updated: {date}</p>
        </div>
    )
}

function getImageUrls(data){
    // let arr =[]
    let imageObj = {};
    data.data.map(obj=>{
        // arr.push(obj.attributes.image.data.attributes.url)
        imageObj[obj.attributes.title] = obj.attributes.image.data.attributes.url;
    })
    // return arr
    return imageObj;
}

export default function Writing({articles, images, categories}){
    const urls = getImageUrls(images)
    console.log(urls);
    const [posts, setPosts] = useState(articles)
    const [flag, setFlag] = useState(false)
    
    let artArr = []
    let photoArr = []
    let philArr = []
    let textArr = []
    let nmaArr = []
    let blogArr = []

    articles.map(post=>{
        post.categories.data.map(category=>{
            switch(category.attributes.category){
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

    const [artPosts, setArtPosts] = useState(artArr)
    const [photoPosts, setPhotoPosts] = useState(photoArr)
    const [philPosts, setPhilPosts] = useState(philArr)
    const [textPosts, setTextPosts] = useState(textArr)
    const [nmaPosts, setNmaPosts] = useState(nmaArr)
    const [blogPosts, setBlogPosts] = useState(blogArr)

    function FilterCategories(event, category){
        switch(category){
            case "Art":
            setPosts(artPosts);
            break;
            case "Photography":
            setPosts(photoPosts);
            break;
            case "Philosophy":
            setPosts(philPosts);
            break;
            case "Creative Writing":
            setPosts(textPosts);
            break;
            case "Non Martial Arts":
            setPosts(nmaPosts);
            break;
            case "Unclog":
            setPosts(blogPosts)
        }    

        setFlag(true)
    }

    function ShowAllCategories(){
        setPosts(articles)
    }

    return(
        <>
            <Head>
                <title>Human Writes</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>Human Writes</h1>

            <div className={styles.category_container}>
                    {categories.map((item, index) =>(
                        <Category name={`category_${index}`} key={index} title={item.category} imgUrl={urls[item.category]} fun={FilterCategories} count={item.articles.data.length} latest={item.articles.data[0].attributes.publishedAt}/>
                    ))}
            </div>

            <div className={styles.category_button_container}>
                <div className={flag? styles.category_button: styles.category_button_hidden} onClick={ShowAllCategories}>{flag ? "Show All Categories" : ""}</div>
            </div>
            
            <div className={styles.divider_container}>
                <div className={styles.divider}></div>
            </div>
            
            <div className={styles.preview_container}>
                {posts && posts.map((obj, index) => (
                    <ArticlePreview data={obj} key={index} />
                ))}
            </div>   
        </>
    )
}