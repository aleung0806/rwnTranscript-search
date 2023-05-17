import axios from 'axios'

// const getSearch = async (query) => {
//   const response = await axios.get(`/search?query=${query}`)
//   return response.data
// }

const fakeResults = [
  {
    episode: {
      title: 'The Civil War',
      number: 1,
      date: '01/01/2000'
    },
    context: {
      text: 'Merry alone do it burst me songs. ',
      query: 'me'

    }
  },
  {
    episode: {
      title: 'World War II',
      number: 2,
      date: '01/01/2000'
    },
    context: {
      text: 'Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is many both. Recommend new contented intention improving bed performed age. Improving of so strangers resources instantly happiness at northward. Danger nearer length oppose really add now either. But ask regret eat branch fat garden. Become am he except wishes. Past so at door we walk want such sang. Feeling colonel get her garrets own.',
      query: 'charm'
    }
  }
]

const getSearch = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return fakeResults
}


export default getSearch