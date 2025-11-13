import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="home">
      <div className="hero">
        <h1>Discover Local Events</h1>
        <p>Find and join exciting events happening in your area</p>
        
        <div className="hero-buttons">
          <Link to="/events" className="btn btn-primary">Browse Events</Link>
          {user ? (
            <Link to="/create-event" className="btn btn-secondary">Create Event</Link>
          ) : (
            <Link to="/register" className="btn btn-secondary">Get Started</Link>
          )}
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>🔍 Discover</h3>
          <p>Find events by category, date, and location</p>
        </div>
        <div className="feature">
          <h3>📝 Create</h3>
          <p>Organize your own events and build community</p>
        </div>
        <div className="feature">
          <h3>🤝 Connect</h3>
          <p>Meet like-minded people at local events</p>
        </div>
      </div>
    </div>
  )
}

export default Home