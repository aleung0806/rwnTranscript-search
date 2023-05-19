import axios from 'axios'

const baseUrl = 'http://localhost:3001'
const escapeStringRegexp = require('escape-string-regexp');


const getSearch = async (query) => {
  const response = await axios.get(baseUrl + `/transcripts?q=${query}`)
  console.log('query', response.data)
  const results = []

  for (const t in response.data ) {

    const escapedQuery = escapeStringRegexp(query);
    const regex = new RegExp(`\\b${escapedQuery}\\b`, 'i');

    const index = t.text.search(regex)

    const start = index > 100 ? index - 100 : 0
    const end = index + 100 > t.text.length - 1 ? t.tex.length - 1 : index + 100
    const context = t.text.slice(start, end)
    const episode = await getEpisodeById(t.id)
    
    results.push({
      context, 
      episode
    })
    
    results.push(t.text)
  }
  return results
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