import { useState, useEffect } from 'react'
import { getTranscript } from '../api'
import { useParams } from 'react-router-dom'

const useTranscript = () => {
  const [transcript, setTranscript] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchTranscript = async () => {
      const episodes = await getTranscript(id)
      setTranscript(transcript)
    }

    fetchTranscript().catch(console.error)

  }, []);

  return transcript
}

export default useTranscript