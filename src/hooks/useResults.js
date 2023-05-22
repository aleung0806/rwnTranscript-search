import { useState, useEffect } from 'react'
import { getEpisodes, getSearch } from '../api'
import { useSearchParams } from 'react-router-dom'
import useQuery from './useQuery'


const useResults = () => {
  const [results, setResults ] = useState([])
  const query = useQuery()

  useEffect(() => {
    (async () => {
      if (query !== null){
        const results = await getSearch(query)
        setResults(results)
      }
    })()
    return () => {}
  }, [query])

  return results
}

export default useResults

