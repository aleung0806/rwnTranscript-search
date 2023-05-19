import './styles.scss'
import { useState, useEffect } from 'react'
import TextForm from '../shared/TextForm'
import Results from './components/Results'
import Loading from './components/Loading'
import useResults from '../../hooks/useResults'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ text, setText ] = useState(searchParams.get('query') !== null ? searchParams.get('query') : '')
  const results = useResults()


  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams(`query=${text}`)
  }

  return (
    <div className='search'>
      <div className='text'>
        <h1>
          Search through the RWN transcripts
        </h1>

      </div>
      <TextForm text={text} setText={setText} handleSubmit={handleSubmit}/>
      {results !== [] && <Results results={results} /> }
    </div>

  )
}

export default Search