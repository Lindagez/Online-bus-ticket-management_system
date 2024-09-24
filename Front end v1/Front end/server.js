import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mock data
const mockUsers = [
  { _id: '1', email: 'user1@example.com', password: 'password1' }, // Example password
  { _id: '2', email: 'user2@example.com', password: 'password2' }  // Example password
];

const mockBuses = [
  { _id: '1', name: 'Bus 1', from: 'City A', to: 'City B', date: '2024-08-30', availableSeats: 20 },
  { _id: '2', name: 'Bus 2', from: 'City C', to: 'City D', date: '2024-08-31', availableSeats: 15 }
];

const mockTickets = [
  { _id: '1', busId: '1', seatNumber: 'A1', bookedBy: 'user1@example.com' },
  { _id: '2', busId: '2', seatNumber: 'B1', bookedBy: 'user2@example.com' }
];

// Mock admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin' // In real applications, never store passwords in plain text.
};

// Admin login route
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// User registration route
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if the user already exists
  const userExists = mockUsers.some(user => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Add new user to mock data
  const newUser = {
    _id: String(mockUsers.length + 1), // Simple ID generation for demo
    email,
    password
  };
  mockUsers.push(newUser);

  res.status(201).json({ message: 'Registration successful', user: newUser });
});

// User login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user in the mock data
  const user = mockUsers.find(user => user.email === email && user.password === password);

  if (user) {
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Mock data routes
app.get('/user', (req, res) => {
  res.json(mockUsers);
});

app.get('/bus', (req, res) => {
  res.json(mockBuses);
});

app.get('/ticket', (req, res) => {
  res.json(mockTickets);
});

app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const index = mockUsers.findIndex(user => user._id === id);
  if (index > -1) {
    mockUsers.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/bus/:id', (req, res) => {
  const { id } = req.params;
  const index = mockBuses.findIndex(bus => bus._id === id);
  if (index > -1) {
    mockBuses.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Bus not found' });
  }
});

app.delete('/ticket/:id', (req, res) => {
  const { id } = req.params;
  const index = mockTickets.findIndex(ticket => ticket._id === id);
  if (index > -1) {
    mockTickets.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Ticket not found' });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
