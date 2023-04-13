import simplifyStrapiStructure from "./simplifyStrapiStructure.js"

export default async function fetchDataForProps(content){
  const url = `http://localhost:1337/api/${content}`
  const res = await fetch(url)
  const json = await res.json()
  const data = simplifyStrapiStructure(json)
  
  return data
}