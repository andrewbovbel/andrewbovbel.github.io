import { useState } from 'react'
import { filters } from '../data/mockData'
import './AddSpotModal.css'

function AddSpotModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: 'Library',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: [],
    description: '',
    hours: ''
  })
  const [errors, setErrors] = useState({})

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    if (!formData.hours.trim()) {
      newErrors.hours = 'Hours are required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    onSubmit(formData)
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      type: 'Library',
      noiseLevel: 'Quiet',
      bookingRequired: false,
      amenities: [],
      description: '',
      hours: ''
    })
    setErrors({})
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content add-spot-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Study Spot</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="add-spot-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="spot-name">Name *</label>
              <input
                id="spot-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Thode Library"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="spot-location">Google Maps Link *</label>
              <input
                id="spot-location"
                type="url"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="https://maps.app.goo.gl/..."
                className={errors.location ? 'error' : ''}
              />
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="spot-type">Type *</label>
              <select
                id="spot-type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                {filters.types.filter(t => t !== 'All').map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="spot-noise">Noise Level *</label>
              <select
                id="spot-noise"
                name="noiseLevel"
                value={formData.noiseLevel}
                onChange={handleInputChange}
              >
                {filters.noiseLevels.filter(l => l !== 'All').map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="spot-description">Description *</label>
            <textarea
              id="spot-description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe this study spot..."
              rows="4"
              className={errors.description ? 'error' : ''}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="spot-hours">Hours *</label>
            <input
              id="spot-hours"
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
              placeholder="e.g., Mon-Thu: 8am-11pm, Fri: 8am-8pm"
              className={errors.hours ? 'error' : ''}
            />
            {errors.hours && <span className="error-message">{errors.hours}</span>}
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="bookingRequired"
                checked={formData.bookingRequired}
                onChange={handleInputChange}
              />
              Requires Booking
            </label>
          </div>

          <div className="form-group">
            <label>Amenities</label>
            <div className="amenities-grid">
              {filters.amenities.map(amenity => (
                <label key={amenity} className="amenity-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Study Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSpotModal

