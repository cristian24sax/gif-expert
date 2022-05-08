import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({category}) => {
  const {data,loading}= useFetchGifts({category});
  return (
    <>
      <h2>{category}</h2>
      {loading?'esta cargando':'data completada'}
      <div className='card-grid'>
      {/* {Gif.map(result=><GifGridItem key={result.id} img={result}/>)} */}
      {data.map(result=><GifGridItem key={result.id} {...result}/>)}
   
    </div>
    </>
  )
}
