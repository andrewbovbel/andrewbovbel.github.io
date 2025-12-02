import { useEffect, useState } from 'react'
import './Notification.css'

function Notification({ message, type = 'success', onClose, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(), 300) // Wait for fade out animation
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(), 300)
  }

  if (!isVisible) return null

  return (
    <div className={`notification notification-${type} ${isVisible ? 'show' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">
          {type === 'success' ? '★' : 'ℹ️'}
        </div>
        <div className="notification-message">{message}</div>
        <button className="notification-close" onClick={handleClose}>×</button>
      </div>
    </div>
  )
}

export default Notification

