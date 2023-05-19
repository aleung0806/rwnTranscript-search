import { useState, useEffect } from 'react'
import { getEpisodes, getSearch } from '../api'
import { useSearchParams } from 'react-router-dom'

const useResults = () => {
  const [results, setResults ] = useState([])
  const [ searchParams, setSearchParams ] = useSearchParams()

  useEffect(() => {
    (async () => {
      if (searchParams.get('query') !== null){
        const results = await getSearch(searchParams.get('query'))
        setResults(results)
      }
     
    })()
    return () => {}
  }, [])

  return results
}

export default useResults

