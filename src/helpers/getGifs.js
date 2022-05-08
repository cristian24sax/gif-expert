
const getGifs= async({category})=>{
  
    const url=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=V7elucgm53BbzFhJDzIHxsA1DV6MZv0w`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( result=>{
      return{
         id:result.id,
         title:result.title,
         url:result.images?.downsized_medium.url
      }
    })
    return gifs
  }

export default getGifs