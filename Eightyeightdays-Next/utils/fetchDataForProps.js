import simplifyStrapiStructure from "./simplifyStrapiStructure.js"

export default async function fetchDataForProps(content){
    const url = `http://localhost:1337/api/${content}`
    const settings = {
    credentials: "include",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "bearer 404c8326209e572d140057cc450025db7cce4a00ff0a15910557ba2e149890f54dc4fa4fd86c1579e8e2dabccc481910516340e57fdc3b700a8c582e37060e836f880175dcd6bc6a6806f9b51b1e194a69c7d442499096a393534002ee11c869e0bbec14a4201bb5efcc00b1fa97da309f155dbf8b788f7bc9ee155b78e0a63e",
    }
  }
  const res = await fetch(url, settings)
  const json = await res.json()
  const data = simplifyStrapiStructure(json)
  
  return data
}