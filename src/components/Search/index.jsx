import './styles.scss'
import { useState, useEffect } from 'react'
import TextForm from '../shared/TextForm'
import Results from './components/Results'
import Loading from './components/Loading'

import { useSearchParams } from 'react-router-dom'
import getSearch from '../api/search'

const Search = () => {
  const [ urlParams, setUrlParams ] = useSearchParams()
  const [ text, setText ] = useState('')
  const [ results, setResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrlParams(`query=${text}`)
  }
  useEffect(() => {
    (async () => {
      const searchTerm = urlParams.get('query')
      if (searchTerm !== null){
        setText(searchTerm)
        const results = await getSearch(searchTerm)
        setResults(results)
      }    
    })()
    return () => {}
  }, [])


  return (
    <div className='search'>
      <div className='text'>
        <h1>
          Search through the RWN transcripts
        </h1>

      </div>
      <TextForm text={text} setText={setText} handleSubmit={handleSubmit}/>
      {results !== null && <Results results={results}/>}
    </div>

  )
}

export default Search