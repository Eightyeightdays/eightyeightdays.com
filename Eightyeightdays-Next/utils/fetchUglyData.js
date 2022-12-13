export default async function fetchUglyData(content){
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
  const data = await res.json()
  
  return data
}