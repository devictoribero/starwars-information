import {useState, useEffect} from 'react';
import {apiBasePath} from '../config'
import axios from 'axios'

export function useStarWarsApi({category}){
  const [data, setData] = useState([])

  useEffect(() => {
    let getData = async () => {
      const {data: {results: data}} = await axios(`${apiBasePath}/${category}`)
      setData(data)
    }

    getData();
  }, [category])

  return data;
}