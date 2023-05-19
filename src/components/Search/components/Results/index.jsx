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
            <li className='result' key={r.episode.id} onClick={() => navigate(`/transcripts/${r.episode.number}`)}>
                <h2 className='title'>{`Ep. ${r.episode.id} - ${r.episode.title}`}</h2>
                <p >{`${r.episode.date}`}</p>
              <Text context={r.context}/>
            </li>
          )
        })
      }
    </ol>

  )
}

export default Results