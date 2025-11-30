import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📖 Study Review Spots
        </Link>
        <div className="navbar-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'navbar-link active' : 'navbar-link'}
          >
            Home
          </Link>
          <Link 
            to="/search" 
            className={location.pathname === '/search' ? 'navbar-link active' : 'navbar-link'}
          >
            Browse Spots
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
