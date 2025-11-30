import { useParams, Link } from 'react-router-dom'
import { studySpots } from '../data/mockData'
import './SpotDetail.css'

function SpotDetail() {
  const { id } = useParams()
  const spot = studySpots.find(s => s.id === id)

  if (!spot) {
    return (
      <div className="spot-detail">
        <h1>Study Spot Not Found</h1>
        <Link to="/search" className="btn-primary">Back to Search</Link>
      </div>
    )
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
  }

  return (
    <div className="spot-detail">
      <Link to="/search" className="back-link">← Back to Search</Link>
      
      <div className="detail-header">
        <div className="detail-image-large">{spot.image}</div>
        <div className="detail-info">
          <h1>{spot.name}</h1>
          <p className="detail-location">{spot.location}</p>
          <div className="detail-rating">
            <span className="rating-stars">{renderStars(spot.rating)}</span>
            <span className="rating-value">{spot.rating}</span>
            <span className="rating-count">({spot.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-main">
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
                <strong>Location:</strong> {spot.location}
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Reviews ({spot.reviews.length})</h2>
            <div className="reviews-list">
              {spot.reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div>
                      <strong>{review.author}</strong>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary write-review-btn">
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
                <span className="info-value">{spot.rating} ⭐</span>
              </div>
              <div className="info-row">
                <span className="info-label">Type:</span>
                <span className="info-value">{spot.type}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Noise:</span>
                <span className="info-value">{spot.noiseLevel}</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar-card">
            <button className="btn-primary full-width">Save to Favorites</button>
            <button className="btn-secondary full-width">Share Spot</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default SpotDetail
