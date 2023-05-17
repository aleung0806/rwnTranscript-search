import './styles.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const sample_episode = {
  
  date: '01/01/2000',
  number: 1,
  title: 'The Iraq War',

  lines: [
    {
      time: '00:00:00',
      text: 'Hello and welcome to another episode of',
      url: 'mp3.com'
    },
    {
      time: '00:00:07',
      text: 'Radio War Nerd. My name is Mark Ames',
      url: 'mp3.com'
    },
  ]

}

const Episode = () => {
  const [episode, setEpisode ] = useState(sample_episode)
  return (
    <div className="episode">
      <h1>{`Ep. ${episode.number} - ${episode.title}`}</h1>
      <h2>{`${episode.date}`}</h2>
      <ol className="list">
        {
          episode.lines.map(l => {
            return (
              <li className="list-item" key={l.time}>
                <Link className="link" to={l.url}> {`[${l.time}]`} &nbsp;</Link>
                <p className="text">{`${l.text}`}</p>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default Episode