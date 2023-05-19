import './styles.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTranscript from '../../../../hooks/useTranscript'

const Episode = () => {
  const t = useTranscript()
  return (
    <div className="episode">
      { t !== {} &&
      console.log(t) &&
        <div>
        <h1>{`Ep. ${t.episode.id} - ${t.episode.title}`}</h1>
        <h2>{`${t.episode.date}`}</h2>
        <ol className="list">
          {
            t.episode.segments.map(s => {
              return (
                <li className="list-item" key={s.start}>
                  <Link className="link" to={s.url}> {`[${s.start}]`} &nbsp;</Link>
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

export default Episode