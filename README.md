# Local Event Finder

A full-stack web application for discovering and managing local events in your area. Users can browse events, create profiles, and manage event listings with a modern, responsive interface.

## Features

- 🔍 **Event Discovery** - Browse and search local events by category, date, and location
- 👤 **User Profiles** - Create and manage user accounts with personalized preferences
- 📝 **Event Management** - Create, edit, and delete event listings
- 🎯 **Smart Filtering** - Advanced search and filtering capabilities
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🔐 **Secure Authentication** - JWT-based user authentication and authorization

## Tech Stack

- **MongoDB** - NoSQL database for storing user profiles, events, and application data
- **Express.js** - Backend framework for building RESTful APIs and server-side logic
- **React** - Frontend library for building interactive user interfaces
- **Vite** - Modern build tool for fast development and optimized production builds
- **Node.js** - JavaScript runtime environment for server-side development

*Note: This project uses modern versions of React, Express, and Mongoose, avoiding deprecated libraries and outdated methods for enhanced stability and security.*

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5.0 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/local-event-finder.git
   cd local-event-finder
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   ```
   
   Configure your environment variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/local-event-finder
   JWT_SECRET=your-jwt-secret-key
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Start backend server
   npm run server
   
   # Start frontend (in new terminal)
   npm run client
   
   # Or start both concurrently
   npm run dev
   ```

## Usage

1. **Access the application** at `http://localhost:3000`
2. **Register** a new account or login with existing credentials
3. **Browse events** on the homepage or use search filters
4. **Create events** by clicking the "Add Event" button
5. **Manage your profile** and view your created events

## Project Structure

```
local-event-finder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # CSS/styling files
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── controllers/      # Route controllers
│   └── utils/            # Server utilities
├── .env.example          # Environment variables template
└── package.json          # Project dependencies
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get event by ID
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.