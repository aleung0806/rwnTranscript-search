import { useState, useEffect } from 'react'
import { getEpisodes } from '../api'

const useQuery = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    (async () => {
      const paramQuery = urlParams.get('query')
      if (paramQuery !== null){
        setText(paramQuery)
        const results = await getSearch(paramQuery)
        setResults(results)
      }    
    })()
    return () => {}
  }, [])

  return episodes
}

export default useQuery

