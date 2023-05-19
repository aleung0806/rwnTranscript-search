import './styles.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useEpisodes from '../../../../hooks/useEpisodes'

const sample_episodes = [
  {
    date: '01/01/2000',
    episode: 1,
    title: 'The Iraq War'
  },
  {
    date: '02/01/2000',
    episode: 2,
    title: 'George Bush'
  }
]

const Directory = () => {
  const episodes = useEpisodes()

  return (
    <div className="directory">
      <h1>Directory</h1>
      <ol className="list">
        { episodes !== [] &&
          episodes.map(e => {
            return (
              <li key={e.number}>
                <Link className="link" to={`../${e.episode}`}>
                {`${e.date} | Ep. ${e.episode} - ${e.title}`}
                </Link>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default Directory