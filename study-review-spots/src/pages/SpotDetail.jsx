import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { studySpots } from '../data/mockData'
import { getAllStudySpots, isCustomSpot } from '../utils/storage'
import StarRating from '../components/StarRating'
import ReviewModal from '../components/ReviewModal'
import NewBadge from '../components/NewBadge'
import { 
  isFavorite, 
  addFavorite, 
  removeFavorite,
  isVisited,
  addVisited,
  getAllSpotReviews,
  addReview,
  getFeaturedSpots
} from '../utils/storage'
import './SpotDetail.css'

function SpotDetail() {
  const { id } = useParams()
  const [allSpots, setAllSpots] = useState(() => getAllStudySpots(studySpots))
  const spot = allSpots.find(s => s.id === id)

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
  const [favorite, setFavorite] = useState(false)
  const [visited, setVisited] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    if (spot) {
      // Check if spot is favorite
      setFavorite(isFavorite(spot.id))
      // Check if spot is visited
      setVisited(isVisited(spot.id))
      // Mark as visited when viewing
      if (!isVisited(spot.id)) {
        addVisited(spot.id)
        setVisited(true)
      }
      // Load all reviews (mockData + user reviews)
      const reviews = getAllSpotReviews(spot.id, spot.reviews || [])
      setAllReviews(reviews)
    }
  }, [spot])

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(spot.id)
      setFavorite(false)
    } else {
      addFavorite(spot.id)
      setFavorite(true)
    }
  }

  const handleReviewSubmit = (reviewData) => {
    const result = addReview(spot.id, reviewData)
    // Reload reviews
    const reviews = getAllSpotReviews(spot.id, spot.reviews || [])
    setAllReviews(reviews)
    
    // Check if we should show notification and trigger featured spots update
    if (result.shouldFeature) {
      const featuredSpots = getFeaturedSpots()
      window.dispatchEvent(new CustomEvent('reviewFeatured', {
        detail: { spotIds: featuredSpots }
      }))
      // Also trigger update for Home page
      window.dispatchEvent(new CustomEvent('featuredSpotsUpdated'))
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: spot.name,
        text: `Check out ${spot.name} - a great study spot at McMaster!`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err))
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!')
      }).catch(err => {
        console.log('Error copying:', err)
      })
    }
  }

  if (!spot) {
    return (
      <div className="spot-detail">
        <h1>Study Spot Not Found</h1>
        <Link to="/search" className="btn-primary">Back to Search</Link>
      </div>
    )
  }

  return (
    <div className="spot-detail">
      <Link to="/search" className="back-link">← Back to Search</Link>
      
      <div className="detail-header">
        <div className="detail-image-large">
          {spot.image ? (
            <img src={spot.image} alt={spot.name} />
          ) : (
            <div className="image-placeholder">Image</div>
          )}
        </div>
        <div className="detail-info">
          <div className="detail-title-row">
            <h1>{spot.name}</h1>
            {isCustomSpot(spot.id) && <NewBadge />}
          </div>
          <p className="detail-location">
            {spot.location ? (
              <a href={spot.location} target="_blank" rel="noopener noreferrer">
                Go to Google Maps
              </a>
            ) : (
              'Location not available'
            )}
          </p>
          <div className="detail-rating">
            <StarRating rating={spot.rating} showNumber={true} reviewCount={spot.reviewCount} size="large" />
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-main">
          {isCustomSpot(spot.id) && (
            <section className="detail-section moderation-notice">
              <div className="notice-content">
                <div className="notice-icon">ℹ️</div>
                <div>
                  <strong>Newly Added Spot</strong>
                  <p>This study spot has been added via our moderation system. Please help improve our community by leaving reviews and rating accordingly.</p>
                </div>
              </div>
            </section>
          )}

          <section className="detail-section">
            <h2>Description</h2>
            <p>{spot.description}</p>
          </section>

          <section className="detail-section">
            <h2>Hours</h2>
            <p>{spot.hours}</p>
          </section>

          <section className="detail-section">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              {spot.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item">
                  <span className="amenity-icon">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Spot Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <strong>Type:</strong> {spot.type}
              </div>
              <div className="detail-item">
                <strong>Noise Level:</strong> {spot.noiseLevel}
              </div>
              <div className="detail-item">
                <strong>Location:</strong>{' '}
                {spot.location ? (
                  <a href={spot.location} target="_blank" rel="noopener noreferrer">
                    Go to Google Maps
                  </a>
                ) : (
                  'Not available'
                )}
              </div>
              <div className="detail-item">
                <strong>Booking Required:</strong> {spot.bookingRequired ? 'Yes' : 'No'}
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Reviews ({allReviews.length})</h2>
            <div className="reviews-list">
              {allReviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div>
                      <strong>{review.author}</strong>
                      <div className="review-rating">
                        <StarRating rating={review.rating} size="small" />
                      </div>
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
            <button 
              className="btn-primary write-review-btn"
              onClick={() => setShowReviewModal(true)}
            >
              Write a Review
            </button>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Quick Info</h3>
            <div className="quick-info">
              <div className="info-row">
                <span className="info-label">Rating:</span>
                <span className="info-value">
                  <StarRating rating={spot.rating} showNumber={true} size="small" />
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Type:</span>
                <span className="info-value">{spot.type}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Noise:</span>
                <span className="info-value">{spot.noiseLevel}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Booking:</span>
                <span className="info-value">{spot.bookingRequired ? 'Required' : 'Not Required'}</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar-card">
            {spot.bookingRequired && (
              <button className="btn-primary full-width">Book This Spot</button>
            )}
            <button 
              className={`btn-secondary full-width ${favorite ? 'favorited' : ''}`}
              onClick={handleToggleFavorite}
            >
              {favorite ? '★ Saved to Favorites' : 'Save to Favorites'}
            </button>
            <button 
              className="btn-secondary full-width"
              onClick={handleShare}
            >
              Share Spot
            </button>
            {visited && (
              <div className="visited-badge">
                ✓ Visited
              </div>
            )}
          </div>
        </aside>
      </div>
      
      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onSubmit={handleReviewSubmit}
        spotName={spot.name}
      />
    </div>
  )
}

export default SpotDetail
