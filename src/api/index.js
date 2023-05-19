import axios from 'axios'

const baseUrl = 'http://localhost:3001'


const getSearch = async (query) => {
  const response = await axios.get(baseUrl + `/transcripts?q=${query}`)
  response.data.forEach(t => {
    
  })
  return response.data
}

const getEpisodes = async () => {
  const response = await axios.get(baseUrl + `/episodes`)
  return response.data
}

const getEpisodeById = async (id) => {
  const response = await axios.get(baseUrl + `/episodes/${id}`)
  return response.data
}

const getTranscriptById = async (id) => {
  const response = await axios.get(baseUrl + `/transcripts/${id}`)
  return response.data
}


export {
  getSearch, 
  getEpisodes,
  getEpisodeById,
  getTranscriptById
}