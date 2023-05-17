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
    window.location.reload()
  }
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


  return (
    <div className='search'>
      <div className='text'>
        <h1>
          Search through the RWN transcripts
        </h1>

      </div>
      <TextForm text={text} setText={setText} handleSubmit={handleSubmit}/>
      {results !== null && <Results results={results} /> }
      {results === null && urlParams.get('query') === undefined && <Loading/> }
    </div>

  )
}

export default Search