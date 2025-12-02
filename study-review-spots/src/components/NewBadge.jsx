import { useState } from 'react'
import './NewBadge.css'

function NewBadge() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div 
      className="new-badge-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="new-badge">
        NEW
      </div>
      {showTooltip && (
        <div className="new-badge-tooltip">
          <div className="tooltip-content">
            <strong>New Spot</strong>
            <p>This spot has been added via our moderation. Please upvote/downvote accordingly.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewBadge

