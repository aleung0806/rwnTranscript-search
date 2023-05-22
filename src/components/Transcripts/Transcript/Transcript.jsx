import './styles.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTranscript from '../../../hooks/useTranscript'
import useQuery from '../../../hooks/useQuery'

import { useSearchParams } from 'react-router-dom'

export const Transcript = () => {
  const t = useTranscript()
  const query = useQuery()
  return (
    <div className="episode">
      {query !== null && console.log('query', query)}
      { Object.keys(t).length !== 0 &&
        <div key={t.episode.id}>
          <h1>{`Ep. ${t.episode.id} - ${t.episode.title}`}</h1>
          <h2>{`${t.episode.date}`}</h2>
          <ol className="list">
            {
              t.transcript.segments.map(s => {
                return (
                  <li className="list-item" key={s.id}>
                    <a className="link" href={`${t.episode.url}#t=${s.seconds}`}> {s.start} &nbsp;</a>
                    <p className='text'> {`${s.text}`}</p>
                    {/* <HighlightText context={`${s.text}`} query={searchParams.get('query') === null ? '' : searchParams.get('query')}/> */}
                  </li>
                )
              })
            }
          </ol>
        </div>
  }
    </div>
  )
}

