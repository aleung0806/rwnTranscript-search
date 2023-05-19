import { useState, useEffect } from 'react'
import { getEpisodeById, getTranscriptById } from '../api'

import { useParams } from 'react-router-dom'

const useTranscript = () => {
  const [transcript, setTranscript] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchTranscript = async () => {
      const transcript = await getTranscriptById(id)
      const episode = await getEpisodeById(id)

      setTranscript({
        episode, 
        transcript
      })
    }

    fetchTranscript().catch(console.error)

  }, []);

  return transcript
}

export default useTranscript