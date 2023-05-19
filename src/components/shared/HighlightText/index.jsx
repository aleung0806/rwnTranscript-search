import './styles.scss'
import { useState } from 'react'
const escapeStringRegexp = require('escape-string-regexp');

const HighlightText = ({context, query}) => {

  const highlight = (text) => {
    const escapedQuery = escapeStringRegexp(query);
    const pattern = new RegExp(`(${escapedQuery})`, 'gi');
    const sections = text.split(pattern)
    const formatted = sections.map((section) => {

      if (section.toLowerCase() === escapedQuery.toLowerCase()){
        
        return (
          <span className="highlight">{section}</span>
        )
      }
      return section
    })
    return formatted
  }
  
  return (
    <p className="text">
      {highlight(context)}
    </p>
  )
}

export default HighlightText