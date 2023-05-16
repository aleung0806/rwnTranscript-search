import styled from 'styled-components'
import './styles.scss'

const Page = ({children}) => {
  return (
    <div className="page">
      {children}
    </div>
  )
}

export default Page