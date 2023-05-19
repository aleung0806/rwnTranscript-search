import './styles.scss'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Text from '../Text'

const Results = ({results}) => {
  const navigate = useNavigate()

  const processContext = (result) => {
    const text = result.text

  }
  return (
    <ol className='results'>
      {results !== [] &&
        results.map(r => {
          return (
            <li className='result' key={r.id} onClick={() => navigate(`/transcripts/${r.id}`)}>
                <h2 className='title'>{`Ep. ${r.id}`}</h2>
                
              <Text context={r.context} query={r.query}/>
            </li>
          )
        })
      }
    </ol>

  )
}

export default Results