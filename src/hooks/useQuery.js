import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(null)

  useEffect(() => {
    const queryParam = searchParams.get('query')
    setQuery(queryParam)
  }, []);

  return query
}

export default useQuery