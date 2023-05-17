import './styles.scss'
import TextForm from '../shared/TextForm'
import Results from './components/Results'

const Search = () => {
  return (
    <div className='search'>
      <div className='text'>
        <h1>
          Search through the RWN transcripts
        </h1>

      </div>
      <TextForm />
      <Results/>
    </div>

  )
}

export default Search