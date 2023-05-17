import './styles.scss'
import { useState } from 'react'

const sample_results = [
  {
    episode: {
      date: '01/01/2000',
      number: 1,
      title: 'The Iraq War',
    },
    context: {
      text: "Pot bong hit transplant hit transplant that's that's by the way bong it transplant is the is the punchline to a joke Go find it. You'll really enjoy it when you figure it out. It will make a lot of sense It really should be the punchline to every joke Yeah, what you get a bomb hit transplant It's like he's he's like pretending like he knows what weed is but also pretending like he knows what Yes But yeah, Tom's a great guy though good guy Yeah, I do like him personally yeah, Tom I mean ..."
    }
  },

]

const Results = () => {
  const [results, setResults] = useState(sample_results)

  return (
    <ol className='results'>
      {
        results.map(r => {
        <li className='result'>
          <p>{`Ep. ${r.episode.number} - ${r.episode.title}`}</p>
          <p>{`${r.episode.date}`}</p>
        </li>
        })
}
    </ol>

  )
}

export default Results