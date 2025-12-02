import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import SpotDetail from './pages/SpotDetail'
import Favorites from './pages/Favorites'
import Notification from './components/Notification'
import MaraudersSeal from './components/MaraudersSeal'
import './App.css'

function App() {
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    const handleReviewNotification = (event) => {
      const { spotIds } = event.detail
      if (spotIds && spotIds.length > 0) {
        setNotification({
          message: `Great news! ${spotIds.length} study spot${spotIds.length > 1 ? 's have' : ' has'} been featured due to recent high ratings!`,
          type: 'success'
        })
      }
    }

    window.addEventListener('reviewFeatured', handleReviewNotification)

    return () => {
      window.removeEventListener('reviewFeatured', handleReviewNotification)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/spot/:id" element={<SpotDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  )
}

export default App
