import './styles.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTranscript from '../../../../hooks/useTranscript'

const Transcript = () => {
  const t = useTranscript()
  return (
    <div className="episode">
      { Object.keys(t).length !== 0 &&
        <div>
        <h1>{`Ep. ${t.episode.id} - ${t.episode.title}`}</h1>
        <h2>{`${t.episode.date}`}</h2>
        <ol className="list">
          {
            t.transcript.segments.map(s => {
              return (
                <li className="list-item" key={s.id}>
                  <a className="link" href={`${t.episode.url}#t=${s.seconds}`}> {s.start} &nbsp;</a>
                  <p className="text">{`${s.text}`}</p>
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

export default Transcript