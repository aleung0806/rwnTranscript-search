import styled from 'styled-components'
import './Layout.scss'

export const Layout = ({children}) => {
  return (
    <div className="page">
      {children}
    </div>
  )
}

