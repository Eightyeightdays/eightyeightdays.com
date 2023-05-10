export default async function fetchDataForProps(content){
  const url = `http://localhost:1337/api/${content}`
  const res = await fetch(url)
  const data = await res.json()
  
  return data
}