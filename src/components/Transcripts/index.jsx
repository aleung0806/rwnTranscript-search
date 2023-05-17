import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'



const Directory = () => {
  return (
    <Routes>
    <Route path="/" element={<Search/>}/>    
    <Route path="/transcripts" element={<Transcripts/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  )
}

export default Directory