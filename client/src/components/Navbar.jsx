import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Local Event Finder
        </Link>
        
        <div className="nav-links">
          <Link to="/events" className="nav-link">Events</Link>
          
          {user ? (
            <>
              <Link to="/create-event" className="nav-link">Create Event</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={logout} className="nav-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-button">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar