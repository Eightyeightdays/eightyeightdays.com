import fetchDataForProps from '../utils/fetchDataForProps.js'
import ArticlePreview from '../components/ArticlePreview.js'
import Head from 'next/head.js'
import styles from "../styles/unclog/Unclog.module.css"
import styles2 from "../styles/Human-Writes.module.css"
import { useState } from 'react'

export async function getStaticProps(){
    const data = await fetchDataForProps("articles?populate=*")
    const test = await fetch("http://localhost:1337/api/category-preview-images?populate=*")
    const json = await test.json()

  return {props: {articles: data, images: json}}
}

export function Category({title, url, data, fun}){
    return(
        <div className={styles2.category_card} onClick={()=>fun(title, data)}>
            <h2>{title}</h2>
            <img src={`http://localhost:1337${url}`} className={styles2.category_image}></img>
        </div>
    )
}

export default function Writing({articles, images}){
    // console.log(images.data[0].attributes.image.data.attributes.url)
    const url = images.data[0].attributes.image.data.attributes.url

    const [posts, setPosts] = useState([])
    const FilterCategories = (title, data) =>{
        let arr = []
        data.map(post=>{
            post.categories.data.map(category=>{
                if(category.attributes.category == title){
                    arr.push(post)
                }else{
                    console.log("no match")
                    return null
                }
            })
        })
        setPosts(arr)
    }
    
    return(
        <>
            <Head>
                <title>Human Writes</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Human Writes</h1>

            <div className={styles2.category_container}>
                <p>Select a category</p>
                <div className={styles2.category}>
                    <Category title="Art" url={url} data={articles} fun={FilterCategories}/>
                    <Category title="Philosophy" url={url} data={articles} fun={FilterCategories}/>
                    <Category title="Creative Writing" url={url} data={articles} fun={FilterCategories}/>
                    <Category title="Photography" url={url} data={articles} fun={FilterCategories}/>
                    <Category title="Non Martial Arts" url={url} data={articles} fun={FilterCategories}/>
                </div>
            </div>
            
           {posts && posts.map((obj, index) => (
                    <ArticlePreview data={obj} key={index} />
                ))}
        </>
    )
}