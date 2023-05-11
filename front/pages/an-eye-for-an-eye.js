import { useState } from 'react';
import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import VisualCategoryCard from 'components/VisualCategoryCard';
import ProjectPreviewCard from 'components/ProjectPreviewCard';
import { useSearchParams } from "next/navigation";

export async function getStaticProps(){
    const URL = process.env.WP_API;
    const CATEGORY_PREVIEW_ENDPOINT = process.env.VISUAL_CATEGORY_PREVIEWS_API_ENDPOINT;
    const res = await fetch(`${URL}${CATEGORY_PREVIEW_ENDPOINT}`);
    const categoryPreviews = await res.json(); 

    var previewObj = {};

    categoryPreviews.map(obj=>{
        previewObj[obj.acf.category] = {};
        previewObj[obj.acf.category].url = obj.acf.image.url;
        previewObj[obj.acf.category].alt = obj.acf.image.alt;
        previewObj[obj.acf.category].title = obj.acf.category;
        previewObj[obj.acf.category].description = obj.acf.description;
    })

    const PROJECT_PREVIEW_ENDPOINT = process.env.VP_PREVIEWS;
    const data = await fetch(`${URL}${PROJECT_PREVIEW_ENDPOINT}`);
    const previews = await data.json();

    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];

    previews.forEach(preview =>{
        switch(preview.acf.category){       // in case of errors verify this corresponds with collection attributes in API (Visual Project -> Category)
            case "Catastrophe & The Curator":
                curatedPreviews.push(preview);
            break;
            case "Photosynthesis":
                darkroomPreviews.push(preview);
            break;
            case "To Succeed":
                videoPreviews.push(preview)
            break;
            case "Domestication":
                domesticationPreviews.push(preview);
            break;
            case "The Process Is The Subject":
                proceduralPreviews.push(preview);
            break;
            case "Illustrious":
                miscPreviews.push(preview);
        }
    })
 
    return {props: {
        curatedPreviews: curatedPreviews,
        darkroomPreviews: darkroomPreviews,
        videoPreviews: videoPreviews,
        domesticationPreviews: domesticationPreviews,
        proceduralPreviews: proceduralPreviews,
        miscPreviews: miscPreviews,
        categoryPreviews: previewObj,
    }}
}

export default function AnEyeForAnEye({categoryPreviews, curatedPreviews, darkroomPreviews, videoPreviews, domesticationPreviews, proceduralPreviews, miscPreviews, data,}){
    const params = useSearchParams();
    var query = params.get("category");
    var initialState;

    switch(query){
        case "domestication":
            initialState = domesticationPreviews;
        break;
        case "photosynthesis":
            initialState = darkroomPreviews;
        break;
        case "catastrophe-and-the-curator":
            initialState = curatedPreviews;
        break;
        case "the-process-is-the-subject":
            initialState = proceduralPreviews;
        break;
        case "illustrious":
            initialState = miscPreviews;
        break;
        case "to-succeed":
            initialState = videoPreviews;
        break;
    }
    
    const [category, setCategory] = useState(initialState);
    const subtitle = "Photography in many forms, from curated collections and alternative processes, to videos, conceptual series, and explorations into printmaking.";
    
    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <div className={styles.heading_container}>
                <h1 className={styles.title}>An Eye For An Eye</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.divider}></div>
            </div>
            
            <div className={styles.category_container}>
                <VisualCategoryCard setCategory={setCategory} categoryData={curatedPreviews} url={categoryPreviews["Catastrophe & The Curator"].url} alt={categoryPreviews["Catastrophe & The Curator"].alt} title={categoryPreviews["Catastrophe & The Curator"].title} description={categoryPreviews["Catastrophe & The Curator"].description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={darkroomPreviews} url={categoryPreviews["Photosynthesis"].url} alt={categoryPreviews["Photosynthesis"].alt} title={categoryPreviews["Photosynthesis"].title} description={categoryPreviews["Photosynthesis"].description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={miscPreviews} url={categoryPreviews["Illustrious"].url} alt={categoryPreviews["Illustrious"].alt} title={categoryPreviews["Illustrious"].title} description={categoryPreviews["Illustrious"].description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={domesticationPreviews} url={categoryPreviews["Domestication"].url} alt={categoryPreviews["Domestication"].alt} title={categoryPreviews["Domestication"].title} description={categoryPreviews["Domestication"].description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={videoPreviews} url={categoryPreviews["To Succeed"].url} alt={categoryPreviews["To Succeed"].alt} title={categoryPreviews["To Succeed"].title} description={categoryPreviews["To Succeed"].description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={proceduralPreviews} url={categoryPreviews["The Process Is The Subject"].url} alt={categoryPreviews["The Process Is The Subject"].alt} title={categoryPreviews["The Process Is The Subject"].title} description={categoryPreviews["The Process Is The Subject"].description} />
            </div>

            <div className={styles.divider_container}>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.preview_container}  id="previewContainer">
                {category &&  category.map((preview, index) =>
                    (<ProjectPreviewCard key={index} type={preview.acf.type} slug={preview.slug} url={preview.acf.preview_image.url} alt={preview.acf.preview_image.alt} title={preview.title.rendered} description={preview.acf.description} year={preview.acf.year}/>)
                )}
            </div>
        </>
    )
}