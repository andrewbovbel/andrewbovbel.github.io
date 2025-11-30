import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { studySpots, filters } from '../data/mockData'
import './Search.css'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [selectedType, setSelectedType] = useState('All')
  const [selectedNoiseLevel, setSelectedNoiseLevel] = useState('All')
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [filteredSpots, setFilteredSpots] = useState(studySpots)

  useEffect(() => {
    let filtered = studySpots

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(spot =>
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Type filter
    if (selectedType !== 'All') {
      filtered = filtered.filter(spot => spot.type === selectedType)
    }

    // Noise level filter
    if (selectedNoiseLevel !== 'All') {
      filtered = filtered.filter(spot => spot.noiseLevel === selectedNoiseLevel)
    }

    // Amenities filter
    if (selectedAmenities.length > 0) {
      filtered = filtered.filter(spot =>
        selectedAmenities.every(amenity => spot.amenities.includes(amenity))
      )
    }

    setFilteredSpots(filtered)
  }, [searchQuery, selectedType, selectedNoiseLevel, selectedAmenities])

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchParams({ q: searchQuery })
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedType('All')
    setSelectedNoiseLevel('All')
    setSelectedAmenities([])
    setSearchParams({})
  }

  return (
    <div className="search-page">
      <h1>Browse Study Spots</h1>
      
      <div className="search-layout">
        <aside className="filters-panel">
          <h2>Filters</h2>
          
          <div className="filter-group">
            <label>Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              {filters.types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Noise Level</label>
            <select 
              value={selectedNoiseLevel} 
              onChange={(e) => setSelectedNoiseLevel(e.target.value)}
              className="filter-select"
            >
              {filters.noiseLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Amenities</label>
            <div className="amenities-list">
              {filters.amenities.map(amenity => (
                <label key={amenity} className="amenity-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <button onClick={clearFilters} className="btn-secondary clear-filters">
            Clear All Filters
          </button>
        </aside>

        <main className="search-results">
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search by name, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-large"
            />
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>

          <div className="results-header">
            <p>Found {filteredSpots.length} study spot{filteredSpots.length !== 1 ? 's' : ''}</p>
          </div>

          <div className="spots-list">
            {filteredSpots.length > 0 ? (
              filteredSpots.map(spot => (
                <Link key={spot.id} to={`/spot/${spot.id}`} className="spot-card-large">
                  <div className="spot-image-large">{spot.image}</div>
                  <div className="spot-details">
                    <h3>{spot.name}</h3>
                    <p className="spot-location">{spot.location}</p>
                    <p className="spot-description">{spot.description}</p>
                    <div className="spot-tags">
                      <span className="tag">{spot.type}</span>
                      <span className="tag">{spot.noiseLevel}</span>
                    </div>
                    <div className="spot-meta">
                      <span className="spot-rating">
                        ⭐ {spot.rating} ({spot.reviewCount} reviews)
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
              ))
            ) : (
              <div className="no-results">
                <p>No study spots found matching your criteria.</p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Search
