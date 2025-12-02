import { useState } from 'react'
import StarRating from './StarRating'
import './ReviewModal.css'

function ReviewModal({ isOpen, onClose, onSubmit, spotName }) {
  const [author, setAuthor] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState({})

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!author.trim()) {
      newErrors.author = 'Please enter your name'
    }
    if (rating === 0) {
      newErrors.rating = 'Please select a rating'
    }
    if (!comment.trim()) {
      newErrors.comment = 'Please write a review comment'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit({
      author: author.trim(),
      rating,
      comment: comment.trim()
    })

    // Reset form
    setAuthor('')
    setRating(0)
    setComment('')
    setErrors({})
    onClose()
  }

  const handleStarClick = (value) => {
    setRating(value)
    setErrors({ ...errors, rating: null })
  }

  const handleStarHover = (value) => {
    setHoverRating(value)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Write a Review</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="review-author">Your Name *</label>
            <input
              id="review-author"
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value)
                setErrors({ ...errors, author: null })
              }}
              placeholder="Enter your name"
              className={errors.author ? 'error' : ''}
            />
            {errors.author && <span className="error-message">{errors.author}</span>}
          </div>

          <div className="form-group">
            <label>Rating *</label>
            <div className="rating-input">
              <div 
                className="star-rating-select"
                onMouseLeave={handleStarLeave}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star ${value <= (hoverRating || rating) ? 'filled' : ''}`}
                    onClick={() => handleStarClick(value)}
                    onMouseEnter={() => handleStarHover(value)}
                  >
                    ★
                  </span>
                ))}
              </div>
              {(hoverRating || rating) > 0 && (
                <span className="rating-label">
                  {hoverRating || rating} out of 5 stars
                </span>
              )}
            </div>
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="review-comment">Your Review *</label>
            <textarea
              id="review-comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
                setErrors({ ...errors, comment: null })
              }}
              placeholder="Share your experience at this study spot..."
              rows="5"
              className={errors.comment ? 'error' : ''}
            />
            {errors.comment && <span className="error-message">{errors.comment}</span>}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewModal

