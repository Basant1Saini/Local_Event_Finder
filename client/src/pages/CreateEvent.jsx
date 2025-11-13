import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    maxAttendees: '',
    price: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await axios.post('/api/events', formData)
      navigate('/events')
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create event')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <h2>Create New Event</h2>
        
        {error && <div className="error">{error}</div>}
        
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Food">Food</option>
            <option value="Art">Art</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <input
            type="number"
            name="maxAttendees"
            placeholder="Max Attendees (optional)"
            value={formData.maxAttendees}
            onChange={handleChange}
            min="1"
          />
        </div>
        
        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Price ($0 for free)"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
        </div>
        
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Creating Event...' : 'Create Event'}
        </button>
      </form>
    </div>
  )
}

export default CreateEvent