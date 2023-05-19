import './styles.scss'
import { useState } from 'react'


const Text = ({context}) => {
  // const pattern = new RegExp(`(${context.query})`, 'gi');
  // const sections = context.text.split(pattern)
  // console.log(sections)
  // const formatted = sections.map((section) => {
  //   if (section === context.query){
  //     return (
  //       <span className="highlight">{section}</span>
  //     )
  //   }
  //   return section
  // })

  return (
    <p className="text">
      {/* {formatted} */}
    </p>
  )
}

export default Text