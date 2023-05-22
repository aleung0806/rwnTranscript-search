import './TextForm.scss'
import { useState } from 'react'


export const TextForm = ({ text, setText, handleSubmit }) => {
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

