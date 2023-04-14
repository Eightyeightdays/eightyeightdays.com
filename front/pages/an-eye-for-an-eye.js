import { useState } from 'react';
import Head from 'next/head.js'
import styles from "../styles/An-Eye-For-An-Eye.module.css"
import fetchDataForProps from 'utils/fetchDataForProps.js'
import VisualCategoryCard from 'components/VisualCategoryCard';
import ProjectPreviewCard from 'components/ProjectPreviewCard';

export async function getStaticProps(){
    const categoryImages = await fetchDataForProps("visual-category-preview-images?populate=*");

    function extractImageUrl(obj){
        let url = obj.image.data.attributes.url;
        obj.url = url;
        // delete obj.image; // can be removed from the structure if data not needed
    }
    
    categoryImages.forEach(el => extractImageUrl(el));

    // only keep url and alt text for categoryImages
    let imgObj = {};
    categoryImages.map(item=>{
        imgObj[item.type] = item;
        delete imgObj[item.type].id;
        delete imgObj[item.type].image;
        delete imgObj[item.type].publishedAt;
        delete imgObj[item.type].createdAt;
        delete imgObj[item.type].updatedAt;
        delete imgObj[item.type].type;
    })

    const previews = await fetchDataForProps("previews?populate=*");
    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];

    previews.forEach(preview =>{
        switch(preview.type){       // in case of errors verify this corresponds with collection attributes in API
            case "catastrophe-and-the-curator":
                extractImageUrl(preview);
                curatedPreviews.push(preview);
            break;
            case "photosynthesis":
                extractImageUrl(preview);
                darkroomPreviews.push(preview);
            break;
            case "to-succeed":
                extractImageUrl(preview);
                videoPreviews.push(preview)
            break;
            case "domestication":
                extractImageUrl(preview);
                domesticationPreviews.push(preview);
            break;
            case "procedural":
                extractImageUrl(preview);
                proceduralPreviews.push(preview);
            break;
            case "illustrious":
                extractImageUrl(preview);
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
            description: "A group of series based on the conceptual metaphor of &quot;domestication&quot;"
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
    const [category, setCategory] = useState(null);

    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>An Eye For An Eye</h1>
            
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

            <div className={styles.preview_container}>
                {category &&  category.map((preview, index) =>
                    (<ProjectPreviewCard index={index} type={preview.type} slug={preview.slug} url={preview.url} alt={preview.alt} title={preview.title} description={preview.description} year={preview.year} />)
                )}
            </div>
        </>
    )
}