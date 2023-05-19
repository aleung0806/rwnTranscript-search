import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Directory from './components/Directory'
import Transcript from './components/Transcript'


const Transcripts = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="directory" />}/>    
      <Route path="/directory" element={<Directory/>}/>
      <Route path="/:id" element={<Transcript/>}/>
    </Routes>
  )
}

export default Transcripts