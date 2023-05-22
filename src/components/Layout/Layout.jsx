import styled from 'styled-components'
import './styles.scss'

export const Layout = ({children}) => {
  return (
    <div className="page">
      {children}
    </div>
  )
}

