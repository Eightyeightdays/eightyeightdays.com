export default function extractImageUrl(obj){
    console.log(obj)
    let url = obj.data.attributes.url;
    obj.url = url;
    // delete obj.image; // can be removed from the structure if data not needed
}