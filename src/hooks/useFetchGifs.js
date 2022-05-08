import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifts = ({category}) => {
    const [state, setstate] = useState({
      data:[],
      loading:true
    });
    // const [Gif, setGif] = useState([]);
    useEffect(() => {
      getGifs({category})
      .then(data=>setstate({data,loading:false}))
  }, [category]);
    return state
}
