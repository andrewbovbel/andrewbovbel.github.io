import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFavorites } from '../utils/storage'
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [favoritesCount, setFavoritesCount] = useState(0)

  useEffect(() => {
    const updateFavoritesCount = () => {
      const favorites = getFavorites()
      setFavoritesCount(favorites.length)
    }

    updateFavoritesCount()

    // Listen for custom event when favorites change in same tab
    window.addEventListener('favoritesChanged', updateFavoritesCount)
    
    // Listen for storage events (when favorites change in another tab)
    window.addEventListener('storage', updateFavoritesCount)

    return () => {
      window.removeEventListener('favoritesChanged', updateFavoritesCount)
      window.removeEventListener('storage', updateFavoritesCount)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo />
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
          <Link 
            to="/favorites" 
            className={location.pathname === '/favorites' ? 'navbar-link active' : 'navbar-link'}
          >
            Favorites
            {favoritesCount > 0 && (
              <span className="favorites-badge">{favoritesCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
