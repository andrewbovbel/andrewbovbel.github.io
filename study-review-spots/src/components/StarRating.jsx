import './StarRating.css'

function StarRating({ rating, showNumber = false, reviewCount = null, size = 'medium' }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className={`star-rating star-rating-${size}`}>
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star star-full">★</span>
        ))}
        {hasHalfStar && <span className="star star-half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="star star-empty">☆</span>
        ))}
      </div>
      {showNumber && (
        <span className="rating-number">
          {rating.toFixed(1)}
          {reviewCount !== null && ` (${reviewCount} reviews)`}
        </span>
      )}
    </div>
  )
}

export default StarRating



