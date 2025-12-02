// Utility functions for managing user data in localStorage

const FAVORITES_KEY = 'studySpots_favorites'
const VISITED_KEY = 'studySpots_visited'
const REVIEWS_KEY = 'studySpots_reviews'
const FEATURED_SPOTS_KEY = 'studySpots_featured'
const CUSTOM_SPOTS_KEY = 'studySpots_custom'
const SHORT_SPAN_MINUTES = 30 // Time window for "short span"

// Favorites management
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.error('Error reading favorites:', error)
    return []
  }
}

// Dispatch custom event when favorites change
const dispatchFavoritesChange = () => {
  window.dispatchEvent(new CustomEvent('favoritesChanged'))
}

export const addFavorite = (spotId) => {
  try {
    const favorites = getFavorites()
    if (!favorites.includes(spotId)) {
      favorites.push(spotId)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
      dispatchFavoritesChange()
    }
    return favorites
  } catch (error) {
    console.error('Error adding favorite:', error)
    return getFavorites()
  }
}

export const removeFavorite = (spotId) => {
  try {
    const favorites = getFavorites()
    const updated = favorites.filter(id => id !== spotId)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
    dispatchFavoritesChange()
    return updated
  } catch (error) {
    console.error('Error removing favorite:', error)
    return getFavorites()
  }
}

export const isFavorite = (spotId) => {
  const favorites = getFavorites()
  return favorites.includes(spotId)
}

// Visited places management
export const getVisited = () => {
  try {
    const visited = localStorage.getItem(VISITED_KEY)
    return visited ? JSON.parse(visited) : []
  } catch (error) {
    console.error('Error reading visited:', error)
    return []
  }
}

export const addVisited = (spotId) => {
  try {
    const visited = getVisited()
    if (!visited.includes(spotId)) {
      visited.push(spotId)
      localStorage.setItem(VISITED_KEY, JSON.stringify(visited))
    }
    return visited
  } catch (error) {
    console.error('Error adding visited:', error)
    return getVisited()
  }
}

export const isVisited = (spotId) => {
  const visited = getVisited()
  return visited.includes(spotId)
}

// Reviews management
export const getReviews = () => {
  try {
    const reviews = localStorage.getItem(REVIEWS_KEY)
    return reviews ? JSON.parse(reviews) : {}
  } catch (error) {
    console.error('Error reading reviews:', error)
    return {}
  }
}

export const addReview = (spotId, review) => {
  try {
    const reviews = getReviews()
    if (!reviews[spotId]) {
      reviews[spotId] = []
    }
    
    const now = Date.now()
    const newReview = {
      id: `user_${now}`,
      author: review.author || 'Anonymous',
      rating: review.rating,
      date: new Date().toISOString().split('T')[0],
      timestamp: now,
      comment: review.comment
    }
    
    reviews[spotId].push(newReview)
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews))
    
    // Check if we should trigger notification and feature this spot
    const shouldFeature = checkRecentHighRatedReviews(spotId, review.rating, now)
    
    return { reviews, shouldFeature, spotId }
  } catch (error) {
    console.error('Error adding review:', error)
    return { reviews: getReviews(), shouldFeature: false, spotId: null }
  }
}

// Check if 5 reviews of 4+ stars have been added recently
const checkRecentHighRatedReviews = (spotId, newRating, currentTime) => {
  const reviews = getReviews()
  const timeWindow = SHORT_SPAN_MINUTES * 60 * 1000 // Convert to milliseconds
  const cutoffTime = currentTime - timeWindow
  
  // Count all reviews with 4+ stars in the time window across all spots
  let highRatedCount = 0
  const highRatedSpots = new Set()
  
  Object.keys(reviews).forEach(id => {
    const spotReviews = reviews[id] || []
    spotReviews.forEach(r => {
      if (r.timestamp && r.timestamp >= cutoffTime && r.rating >= 4) {
        highRatedCount++
        highRatedSpots.add(id)
      }
    })
  })
  
  // If we've reached 5 high-rated reviews, feature all spots that have them
  if (highRatedCount >= 5) {
    const featuredSpots = Array.from(highRatedSpots)
    localStorage.setItem(FEATURED_SPOTS_KEY, JSON.stringify(featuredSpots))
    return true
  }
  
  return false
}

// Get featured spots (from recent high-rated reviews)
export const getFeaturedSpots = () => {
  try {
    const featured = localStorage.getItem(FEATURED_SPOTS_KEY)
    return featured ? JSON.parse(featured) : []
  } catch (error) {
    console.error('Error reading featured spots:', error)
    return []
  }
}

export const getSpotReviews = (spotId) => {
  const reviews = getReviews()
  return reviews[spotId] || []
}

// Get all reviews for a spot (combining mockData reviews with user reviews)
export const getAllSpotReviews = (spotId, mockReviews = []) => {
  const userReviews = getSpotReviews(spotId)
  return [...mockReviews, ...userReviews]
}

// Custom study spots management
export const getCustomSpots = () => {
  try {
    const customSpots = localStorage.getItem(CUSTOM_SPOTS_KEY)
    return customSpots ? JSON.parse(customSpots) : []
  } catch (error) {
    console.error('Error reading custom spots:', error)
    return []
  }
}

export const addCustomSpot = (spotData) => {
  try {
    const customSpots = getCustomSpots()
    const newSpot = {
      ...spotData,
      id: `custom_${Date.now()}`,
      rating: 0,
      reviewCount: 0,
      reviews: [],
      image: spotData.image || '/images/study-spots/placeholder.jpg'
    }
    
    customSpots.push(newSpot)
    localStorage.setItem(CUSTOM_SPOTS_KEY, JSON.stringify(customSpots))
    
    // Dispatch event to update spots list
    window.dispatchEvent(new CustomEvent('customSpotsChanged'))
    
    return newSpot
  } catch (error) {
    console.error('Error adding custom spot:', error)
    throw error
  }
}

// Get all study spots (mockData + custom spots)
export const getAllStudySpots = (mockSpots) => {
  const customSpots = getCustomSpots()
  return [...mockSpots, ...customSpots]
}

// Check if a spot is a custom spot (added via moderation)
export const isCustomSpot = (spotId) => {
  return spotId && spotId.startsWith('custom_')
}
