import './Logo.css'

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#7A0019" />
          <text x="50" y="65" fontFamily="Poppins, sans-serif" fontSize="50" fill="#FDB913" textAnchor="middle" fontWeight="bold">M</text>
        </svg>
      </div>
      <span className="logo-text">The Marauder's Map of Study Spots</span>
    </div>
  )
}

export default Logo

