import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import axios from 'axios'

const Profile = () => {
  const { user } = useAuth()
  const [userEvents, setUserEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchUserEvents()
    }
  }, [user])

  const fetchUserEvents = async () => {
    try {
      const response = await axios.get('/api/events')
      const myEvents = response.data.filter(event => event.organizer._id === user._id)
      setUserEvents(myEvents)
    } catch (error) {
      console.error('Error fetching user events:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/api/events/${eventId}`)
        setUserEvents(userEvents.filter(event => event._id !== eventId))
      } catch (error) {
        console.error('Error deleting event:', error)
      }
    }
  }

  if (!user) {
    return <div className="loading">Please log in to view your profile</div>
  }

  if (loading) {
    return <div className="loading">Loading profile...</div>
  }

  return (
    <div className="events-page">
      <h1>My Profile</h1>
      
      <div className="profile-info">
        <div className="event-card">
          <h3>Profile Information</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <h2>My Events ({userEvents.length})</h2>
      
      <div className="events-grid">
        {userEvents.length === 0 ? (
          <p>You haven't created any events yet.</p>
        ) : (
          userEvents.map(event => (
            <div key={event._id} className="event-card">
              <h3>{event.title}</h3>
              <p className="event-date">{new Date(event.date).toLocaleDateString()} at {event.time}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-category">{event.category}</p>
              <p className="event-description">{event.description}</p>
              {event.price > 0 && <p className="event-price">${event.price}</p>}
              <p className="event-attendees">Attendees: {event.attendees.length}</p>
              
              <div style={{ marginTop: '15px' }}>
                <button 
                  onClick={() => deleteEvent(event._id)}
                  className="btn btn-secondary"
                  style={{ background: '#dc3545', color: 'white', border: 'none' }}
                >
                  Delete Event
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Profile