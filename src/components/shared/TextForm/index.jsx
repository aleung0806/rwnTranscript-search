import './styles.scss'
import { useState } from 'react'


const TextForm = ({ text, setText, handleSubmit }) => {
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <form className="text-form" onSubmit={handleSubmit} >
      <input className="input" type="text" value={text} onChange={handleChange} placeholder="sergent york" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default TextForm