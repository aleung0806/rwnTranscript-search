import './styles.scss'
import { useState } from 'react'


const TextForm = () => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className="text-form">
      <input className="input" type="text" onChange={handleChange} placeholder="sergent york" />
      <button className="button" type="submit">Search</button>
    </div>
  )
}

export default TextForm