import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { studySpots } from '../data/mockData'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const featuredSpots = studySpots.slice(0, 3)

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
        <h1>Find Your Perfect Study Spot</h1>
        <p className="hero-subtitle">
          Discover the best places to study on campus. Read reviews, check amenities, 
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
          {featuredSpots.map((spot) => (
            <Link key={spot.id} to={`/spot/${spot.id}`} className="spot-card">
              <div className="spot-image">{spot.image}</div>
              <div className="spot-info">
                <h3>{spot.name}</h3>
                <p className="spot-location">{spot.location}</p>
                <div className="spot-meta">
                  <span className="spot-rating">
                    ⭐ {spot.rating} ({spot.reviewCount} reviews)
                  </span>
                  <span className="spot-type">{spot.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">🔍</div>
            <h3>Search & Browse</h3>
            <p>Explore study spots by location, type, or amenities</p>
          </div>
          <div className="step">
            <div className="step-icon">📝</div>
            <h3>Read Reviews</h3>
            <p>See what other students say about each spot</p>
          </div>
          <div className="step">
            <div className="step-icon">⭐</div>
            <h3>Rate & Share</h3>
            <p>Share your experience and help others find great spots</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
