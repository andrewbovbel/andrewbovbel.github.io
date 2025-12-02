import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { studySpots } from '../data/mockData'
import { getFeaturedSpots, getAllStudySpots, isCustomSpot } from '../utils/storage'
import StarRating from '../components/StarRating'
import NewBadge from '../components/NewBadge'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [allSpots, setAllSpots] = useState(() => getAllStudySpots(studySpots))
  const [featuredSpots, setFeaturedSpots] = useState(() => {
    // Get default featured spots (first 3 from mockData)
    const defaultFeatured = studySpots.slice(0, 3)
    
    // Get dynamically featured spots from recent high-rated reviews
    const dynamicFeaturedIds = getFeaturedSpots()
    const dynamicFeatured = dynamicFeaturedIds
      .map(id => studySpots.find(spot => spot.id === id))
      .filter(Boolean)
    
    // Combine: show dynamic featured first, then fill with default if needed
    const combined = [...dynamicFeatured]
    defaultFeatured.forEach(spot => {
      if (!combined.find(s => s.id === spot.id) && combined.length < 6) {
        combined.push(spot)
      }
    })
    
    return combined.slice(0, 6) // Show up to 6 featured spots
  })

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
    const updateFeaturedSpots = () => {
      const defaultFeatured = allSpots.slice(0, 3)
      const dynamicFeaturedIds = getFeaturedSpots()
      const dynamicFeatured = dynamicFeaturedIds
        .map(id => allSpots.find(spot => spot.id === id))
        .filter(Boolean)
      
      const combined = [...dynamicFeatured]
      defaultFeatured.forEach(spot => {
        if (!combined.find(s => s.id === spot.id) && combined.length < 6) {
          combined.push(spot)
        }
      })
      
      setFeaturedSpots(combined.slice(0, 6))
    }

    updateFeaturedSpots()
    window.addEventListener('featuredSpotsUpdated', updateFeaturedSpots)
    
    return () => {
      window.removeEventListener('featuredSpotsUpdated', updateFeaturedSpots)
    }
  }, [allSpots])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    } else {
      navigate('/search')
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-badge">McMaster University</div>
        <h1>Find Your Perfect Study Spot</h1>
        <p className="hero-subtitle">
          Most study spots are secret. 
        </p>
        <p className="hero-subtitle">
        With the Marauder's Map, you can discover the best places to study on campus. Read reviews, check amenities, 
        and find the ideal environment for your learning style.
        </p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for study spots..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="btn-primary search-button">
            Search
          </button>
        </form>
        <button 
          onClick={() => navigate('/search')} 
          className="btn-secondary browse-button"
        >
          Browse All Spots
        </button>
      </section>

      <section className="featured-spots">
        <h2>Featured Study Spots</h2>
        <div className="spots-grid">
          {featuredSpots.map((spot) => {
            const isDynamicFeatured = getFeaturedSpots().includes(spot.id)
            return (
              <Link key={spot.id} to={`/spot/${spot.id}`} className="spot-card">
                {isDynamicFeatured && (
                  <div className="featured-badge">★ Featured</div>
                )}
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
                      <a href={spot.location} target="_blank" rel="noopener noreferrer">
                        Go to Google Maps
                      </a>
                    ) : (
                      'Location not available'
                    )}
                  </p>
                  <div className="spot-meta">
                    <span className="spot-rating">
                      <StarRating rating={spot.rating} showNumber={true} reviewCount={spot.reviewCount} size="small" />
                    </span>
                    <span className="spot-type">{spot.type}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">Search</div>
            <h3>Search & Browse</h3>
            <p>Explore study spots by location, type, or amenities</p>
          </div>
          <div className="step">
            <div className="step-icon">Review</div>
            <h3>Read Reviews</h3>
            <p>See what other students say about each spot</p>
          </div>
          <div className="step">
            <div className="step-icon">Rate</div>
            <h3>Rate & Share</h3>
            <p>Share your experience and help others find great spots</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
