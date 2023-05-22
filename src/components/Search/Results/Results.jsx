import './Results.scss'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Results = ({results}) => {
  const navigate = useNavigate()

  // const trimContext = (text) => {
  //   const escapedQuery = escapeStringRegexp(query);
  //   const regex = new RegExp(`\\b${escapedQuery}\\b`, 'i');

  //   const index = text.search(regex)

  //   const start = index > 100 ? index - 100 : 0
  //   const end = index + 300 > text.length - 1 ? text.length - 1 : index + 300
  //   return text.slice(start, end)
  // }
  
  return (
    <ol className='results'>
      {results !== [] &&
        results.map(r => {
          return (
            <li className='result' key={r.id} onClick={() => navigate(`/transcripts/${r.id}`)}>
                <h2 className='title'>{`Ep. ${r.id}`}</h2>
                
                <p>{r.context}</p>
            </li>
          )
        })
      }
    </ol>

  )
}

