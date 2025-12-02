import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { studySpots } from '../data/mockData'
import { getFavorites, getAllStudySpots, isCustomSpot } from '../utils/storage'
import StarRating from '../components/StarRating'
import NewBadge from '../components/NewBadge'
import './Favorites.css'

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState([])
  const [favoriteSpots, setFavoriteSpots] = useState([])
  const [allSpots, setAllSpots] = useState(() => getAllStudySpots(studySpots))

  useEffect(() => {
    const updatedSpots = getAllStudySpots(studySpots)
    setAllSpots(updatedSpots)
  }, [])

  useEffect(() => {
    const handleCustomSpotsChange = () => {
      const updatedSpots = getAllStudySpots(studySpots)
      setAllSpots(updatedSpots)
    }

    window.addEventListener('customSpotsChanged', handleCustomSpotsChange)
    
    return () => {
      window.removeEventListener('customSpotsChanged', handleCustomSpotsChange)
    }
  }, [])

  useEffect(() => {
    // Load favorites from localStorage
    const favorites = getFavorites()
    setFavoriteIds(favorites)
    
    // Filter study spots to get only favorited ones
    const spots = allSpots.filter(spot => favorites.includes(spot.id))
    setFavoriteSpots(spots)
  }, [allSpots])

  // Update when favorites change
  useEffect(() => {
    const handleFavoritesChange = () => {
      const favorites = getFavorites()
      setFavoriteIds(favorites)
      const spots = allSpots.filter(spot => favorites.includes(spot.id))
      setFavoriteSpots(spots)
    }

    // Listen for custom event when favorites change in same tab
    window.addEventListener('favoritesChanged', handleFavoritesChange)
    
    // Listen for storage events (when favorites change in another tab)
    window.addEventListener('storage', handleFavoritesChange)
    
    // Check on focus in case favorites changed in another tab
    window.addEventListener('focus', handleFavoritesChange)

    return () => {
      window.removeEventListener('favoritesChanged', handleFavoritesChange)
      window.removeEventListener('storage', handleFavoritesChange)
      window.removeEventListener('focus', handleFavoritesChange)
    }
  }, [])

  if (favoriteSpots.length === 0) {
    return (
      <div className="favorites-page">
        <h1>My Favorite Study Spots</h1>
        <div className="empty-favorites">
          <div className="empty-icon">★</div>
          <h2>No favorites yet</h2>
          <p>Start exploring study spots and save your favorites to see them here!</p>
          <Link to="/search" className="btn-primary">
            Browse Study Spots
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-page">
      <h1>My Favorite Study Spots</h1>
      <p className="favorites-count">{favoriteSpots.length} favorite{favoriteSpots.length !== 1 ? 's' : ''}</p>
      
      <div className="favorites-grid">
        {favoriteSpots.map((spot) => (
          <Link key={spot.id} to={`/spot/${spot.id}`} className="favorite-card">
            {isCustomSpot(spot.id) && (
              <div className="new-badge-wrapper">
                <NewBadge />
              </div>
            )}
            <div className="spot-image">
              {spot.image ? (
                <img src={spot.image} alt={spot.name} />
              ) : (
                <div className="image-placeholder">Image</div>
              )}
            </div>
            <div className="spot-info">
              <h3>{spot.name}</h3>
              <p className="spot-location">
                {spot.location ? (
                  <a 
                    href={spot.location} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Go to Google Maps
                  </a>
                ) : (
                  'Location not available'
                )}
              </p>
              <p className="spot-description">{spot.description}</p>
              <div className="spot-tags">
                <span className="tag">{spot.type}</span>
                <span className="tag">{spot.noiseLevel}</span>
                {spot.bookingRequired && (
                  <span className="tag booking-tag">Requires Booking</span>
                )}
              </div>
              <div className="spot-meta">
                <span className="spot-rating">
                  <StarRating 
                    rating={spot.rating} 
                    showNumber={true} 
                    reviewCount={spot.reviewCount} 
                    size="small" 
                  />
                </span>
                <div className="amenities-preview">
                  {spot.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="amenity-badge">{amenity}</span>
                  ))}
                  {spot.amenities.length > 3 && (
                    <span className="amenity-badge">+{spot.amenities.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Favorites

