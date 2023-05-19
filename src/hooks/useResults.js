import { useState, useEffect } from 'react'
import { getEpisodes } from '../api'
import { useSearchParams } from 'react-router-dom'

const useResults = () => {
  const [episodes, setEpisodes] = useState([])
  const [results, setResults ] = useState([])
  const [ searchParams, setSearchParams ] = useSearchParams()

  useEffect(() => {
    (async () => {
      if (searchParams.get('query') !== null){
        searchParams.get('query')
      }
     
    })()
    return () => {}
  }, [])

  return results
}

export default useResults

