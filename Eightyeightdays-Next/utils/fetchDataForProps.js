import simplifyStrapiStructure from "./simplifyStrapiStructure.js"

export default async function fetchDataForProps(content){
    const url = `http://localhost:1337/api/${content}`
    const settings = {
    credentials: "include",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    }
  }
  const res = await fetch(url, settings)
  const json = await res.json()
  const data = simplifyStrapiStructure(json)
  
  return data
}