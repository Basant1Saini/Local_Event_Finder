import { useState, useEffect } from 'react'
import axios from 'axios'

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    date: ''
  })

  useEffect(() => {
    fetchEvents()
  }, [filters])

  const fetchEvents = async () => {
    try {
      const params = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value)
      })
      
      const response = await axios.get(`/api/events?${params}`)
      setEvents(response.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  if (loading) return <div className="loading">Loading events...</div>

  return (
    <div className="events-page">
      <h1>Local Events</h1>
      
      <div className="filters">
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Food">Food</option>
          <option value="Art">Art</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
        
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>

      <div className="events-grid">
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          events.map(event => (
            <div key={event._id} className="event-card">
              <h3>{event.title}</h3>
              <p className="event-date">{new Date(event.date).toLocaleDateString()} at {event.time}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-category">{event.category}</p>
              <p className="event-description">{event.description}</p>
              <p className="event-organizer">By: {event.organizer.name}</p>
              {event.price > 0 && <p className="event-price">${event.price}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Events