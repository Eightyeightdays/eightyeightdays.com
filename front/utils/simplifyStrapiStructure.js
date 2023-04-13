/*  SIMPLIFY THE COMPLEX OBJECT RETURNED BY THE STRAPI API
    take obj, 
    obj.data is an array of objects
    obj.data[0] is an object
    obj.data[0].attributes is an object that contains what we want
*/

export default function simplifyStrapiStructure(obj){
    let simpleArray = []
    obj.data.forEach(el => {
        el.attributes.id = el.id;
        simpleArray.push(el.attributes)
    });
    
    return simpleArray
}