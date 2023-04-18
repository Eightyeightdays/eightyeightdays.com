import { useState } from 'react';
import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import fetchDataForProps from 'utils/fetchDataForProps.js'
import VisualCategoryCard from 'components/VisualCategoryCard';
import ProjectPreviewCard from 'components/ProjectPreviewCard';
import { useSearchParams } from "next/navigation";

export async function getStaticProps(){
    const categoryImages = await fetchDataForProps("visual-category-preview-images?populate=*");

    function extractImageUrl(obj, type){
        let url = obj[`${type}`].data.attributes.url;
        obj.url = url;
        delete obj[`${type}`];
        delete obj.publishedAt;
        delete obj.createdAt;
        delete obj.updatedAt;
        delete obj.id;
    }
    
    let imgObj = {};
    categoryImages.map(item=>{
        extractImageUrl(item, "image");
        imgObj[item.type] = item;
        delete item.type;
    })

    const previews = await fetchDataForProps("visual-projects?&populate=*");
    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];

    previews.forEach(preview =>{
        switch(preview.type){       // in case of errors verify this corresponds with collection attributes in API
            case "catastrophe-and-the-curator":
                extractImageUrl(preview, "previewImg");
                curatedPreviews.push(preview);
            break;
            case "photosynthesis":
                extractImageUrl(preview, "previewImg");
                darkroomPreviews.push(preview);
            break;
            case "to-succeed":
                extractImageUrl(preview, "previewImg");
                videoPreviews.push(preview)
            break;
            case "domestication":
                extractImageUrl(preview, "previewImg");
                domesticationPreviews.push(preview);
            break;
            case "procedural":
                extractImageUrl(preview, "previewImg");
                proceduralPreviews.push(preview);
            break;
            case "illustrious":
                extractImageUrl(preview, "previewImg");
                miscPreviews.push(preview);
        }
    })

    // TODO: add on back end
    const categoryData = {
        curated: {
            title: "Catastrophe & The Curator",
            description: "Curated series of found and accidental photos"
        },
        darkroom: {
            title: "Photosynthesis",
            description: "Alternative photography processes for the darkroom"
        },
        conceptual: {
            title: "Illustrious",
            description: "Conceptual photography series"
        },
        domestication: {
            title: "Domestication",
            description: "A group of series based on the conceptual metaphor of 'domestication'"
        },
        video: {
            title: "To Succeed",
            description: "Moving images / Images moving"
        },
        process: {
            title: "The Process Is The Subject",
            description: "Photographic series focused on the process"
        },
    }

    return {props: {
        curatedPreviews: curatedPreviews,
        darkroomPreviews: darkroomPreviews,
        videoPreviews: videoPreviews,
        domesticationPreviews: domesticationPreviews,
        proceduralPreviews: proceduralPreviews,
        miscPreviews: miscPreviews,
        categoryImages: imgObj,
        data: categoryData 
    }}
}

export default function AnEyeForAnEye({categoryImages, curatedPreviews, darkroomPreviews, videoPreviews, domesticationPreviews, proceduralPreviews, miscPreviews, data}){
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
    }
    
    const [category, setCategory] = useState(initialState);
    const subtitle = "Photography in many forms, from curated collections and alternative processes to videos, conceptual series and explorations into printmaking.";
    
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
                <VisualCategoryCard setCategory={setCategory} categoryData={curatedPreviews} url={categoryImages["Curated"].url} alt={categoryImages["Curated"].alt} title={data.curated.title} description={data.curated.description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={darkroomPreviews} url={categoryImages["Darkroom"].url} alt={categoryImages["Darkroom"].alt} title={data.darkroom.title} description={data.darkroom.description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={miscPreviews} url={categoryImages["Conceptual"].url} alt={categoryImages["Conceptual"].alt} title={data.conceptual.title} description={data.conceptual.description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={domesticationPreviews} url={categoryImages["Domestication"].url} alt={categoryImages["Domestication"].alt} title={data.domestication.title} description={data.domestication.description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={videoPreviews} url={categoryImages["Video"].url} alt={categoryImages["Video"].alt} title={data.video.title} description={data.video.description} />
                <VisualCategoryCard setCategory={setCategory} categoryData={proceduralPreviews} url={categoryImages["Process Based"].url} alt={categoryImages["Process Based"].alt} title={data.process.title} description={data.process.description} />
            </div>

            <div className={styles.divider_container}>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.preview_container} id="previewContainer">
                {category &&  category.map((preview, index) =>
                    (<ProjectPreviewCard key={index} type={preview.type} slug={preview.slug} url={preview.url} alt={preview.alt} title={preview.title} description={preview.description} year={preview.year} />)
                )}
            </div>
        </>
    )
}