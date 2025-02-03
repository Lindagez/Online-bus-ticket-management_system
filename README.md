
# Bus Management System

## Overview
The Bus Management System is a web application developed during a 3-month internship program at **Eagleline System Technology**. It allows users to manage bus routes, schedules, reservations, and bus information. The system is built using **React.js** for the frontend and **Node.js** with the **Express.js** framework for the backend. Users can book bus tickets, view available routes, and admins can manage bus details and schedules.

## Technologies Used
- **Frontend**: React.js, HTML5, CSS3, Bootstrap/TailwindCSS (for styling)
- **Backend**: Node.js, Express.js, MongoDB (for database)
- **Authentication**: JWT (JSON Web Tokens) for securing user access
- **Other Tools**: Axios (for API calls), Nodemon (for development), bcrypt (for password hashing)

## Features
### For Users:
- View available bus routes and schedules
- Book bus tickets for selected routes
- View booking history and ticket details
- User authentication with JWT

### For Admins:
- Add, update, or delete bus routes
- Manage bus schedules
- View and manage user bookings

## Installation

### Prerequisites:
- Node.js and npm installed on your machine
- MongoDB installed locally or use a cloud service like MongoDB Atlas

### Steps to set up the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/bus-management-system.git
   ```

2. **Install dependencies for the backend:**

   Navigate to the `backend` folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend:**

   Navigate to the `frontend` folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables:**

   In the `backend` folder, create a `.env` file and set the following environment variables:

   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

   Ensure you replace `<your-mongodb-connection-string>` and `<your-jwt-secret-key>` with appropriate values.

5. **Start the backend server:**

   Navigate to the `backend` folder and run the following command to start the server:

   ```bash
   npm run dev
   ```

   This will start the Express server, and the API will be running on `http://localhost:5000`.

6. **Start the frontend server:**

   Navigate to the `frontend` folder and run the following command:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`.

## Folder Structure

```
/bus-management-system
  /backend
    /models       # Contains database models (Bus, Schedule, User)
    /routes       # API routes for handling requests (user, bus, etc.)
    /controllers  # Handles business logic for routes
    /middleware   # JWT authentication, error handling middleware
    /config       # Configuration for database and environment variables
    /server.js    # Express app setup and server configuration
  /frontend
    /public       # Static files (index.html, favicon.ico)
    /src
      /components # React components (BusList, BookTicket, AdminDashboard, etc.)
      /pages       # Page-level components (HomePage, LoginPage, AdminPage, etc.)
      /utils       # Utility functions (API calls using Axios, form validation, etc.)
      App.js       # Main React app setup
      index.js     # Entry point of the React app
```

## API Endpoints

### User Endpoints:
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login and get JWT token
- **GET /api/users/bookings**: Get user's booking history
- **POST /api/users/book**: Book a bus ticket

### Admin Endpoints:
- **POST /api/buses**: Add a new bus route (admin only)
- **PUT /api/buses/:id**: Update bus route (admin only)
- **DELETE /api/buses/:id**: Delete bus route (admin only)
- **GET /api/buses**: Get all bus routes
- **GET /api/bookings**: Get all user bookings (admin only)

## Authentication
Authentication is handled using JWT (JSON Web Tokens). After logging in, users receive a JWT token, which is required to access protected routes. The token must be included in the request header as `Authorization: Bearer <token>`.

## Development

To contribute to the project:

1. Fork the repository
2. Create a new branch for your feature
3. Implement your changes
4. Submit a pull request with a description of the changes
