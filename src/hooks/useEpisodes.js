import { useState, useEffect } from 'react'
import { getEpisodes } from '../api'

const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await getEpisodes()
      setEpisodes(episodes)
    }

    fetchEpisodes().catch(console.error)

  }, []);

  return episodes
}

export default useEpisodes