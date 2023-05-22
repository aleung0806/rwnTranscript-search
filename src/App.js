import { 
  BrowserRouter,
  Routes, 
  Route,
  Navigate,
 } from 'react-router-dom'

import Providers from './Providers'


import { Search }from './components/Search'
import { Transcripts }from './components/Transcripts'
import { About } from './components/About'
import { Layout } from './components/Layout'
import { NavBar } from './components/NavBar'
import './styles/main.scss'


const App = () => {
  return (

    <Providers>
    <Layout>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>    
          <Route path="/home" element={<Search/>}/>
          <Route path="/transcripts/*" element={<Transcripts/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Layout>
    </Providers>

  )
}

export default App;
