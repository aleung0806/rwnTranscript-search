import { Link } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
  const handleClick = () => {
  }
  return (
    <div className="navbar" direction='row'>
      <a className="link" href='/home'>Search</a>
      <Link className="link" to="/transcripts" onClick={handleClick}> Transcripts </Link>
      <Link className="link" to="/about" onClick={handleClick}> About </Link>
    </div >
  )
}
