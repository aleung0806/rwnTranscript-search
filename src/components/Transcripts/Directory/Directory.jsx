import './Directory.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useEpisodes from '../../../hooks/useEpisodes'
import { getEpisodes }from '../../../api'

export const Directory = () => {

  const episodes = useEpisodes()

  return (
    <div className="directory">
      <h1>Directory</h1>
      <ol className="list">
        { episodes !== [] &&
         episodes.map(e => {
            return (
              <li key={e.id}>
                <Link className="link" to={`../${e.id}`}>
                {`${e.date} | Ep. ${e.id} | ${e.title}`}
                </Link>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

