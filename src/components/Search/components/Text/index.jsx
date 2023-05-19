import './styles.scss'
import { useState } from 'react'
import HighlightText from '../../../shared/HighlightText';
const escapeStringRegexp = require('escape-string-regexp');

const Text = ({context, query}) => {

  const trim = (text) => {
    const escapedQuery = escapeStringRegexp(query);
    const regex = new RegExp(`\\b${escapedQuery}\\b`, 'i');

    const index = text.search(regex)

    const start = index > 100 ? index - 100 : 0
    const end = index + 300 > text.length - 1 ? text.length - 1 : index + 300
    return text.slice(start, end)
  }

  
  return (
    <p className="text">
      {<HighlightText context={trim(context)} query={query}/>}
    </p>
  )
}

export default Text