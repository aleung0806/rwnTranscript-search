import { 
  BrowserRouter,
  Routes, 
  Route,
  Navigate,
 } from 'react-router-dom'

import Search from './components/Search'
import Transcripts from './components/Transcripts'
import About from './components/About'

import Page from './components/Page'
import NavBar from './components/NavBar'

import './styles/main.scss'


const App = () => {
  return (
    <BrowserRouter>
    <Page>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Search/>}/>    
          <Route path="/search" element={<Search/>}/>
          <Route path="/transcripts/*" element={<Transcripts/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Page>
    </BrowserRouter> 
  )
}

export default App;
