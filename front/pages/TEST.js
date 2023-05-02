export async function getStaticProps(){
   const data = await fetch("http://eightyeightdays.com/wp-json/wp/v2/posts") ;
   return {props:{data}}
}

export default function Test({props}){
    console.log(props);
}