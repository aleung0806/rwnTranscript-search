import { Link } from 'react-router-dom'
import './styles.scss'

const NavBar = () => {
  return (
    <div className="navbar" direction='row'>
      <Link className="link" to="/"> Search </Link>
      <Link className="link" to="/transcripts"> Transcripts </Link>
      <Link className="link" to="/about"> About </Link>
    </div >
  )
}

export default NavBar