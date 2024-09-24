import React, { useState } from 'react';
import { useNavigate, Link,useLocation  } from 'react-router-dom';
import { login } from '../../services/api'; // Ensure this path is correct

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.user.role); // Set user role
        localStorage.setItem('user', response.data.user.email);

        // Get the location state to redirect back to the original route
        const from = location.state?.from?.pathname || '/';

        if (response.data.user.role === 'admin') navigate('/admin');
        else if (response.data.user.role === 'busCompany') navigate('/bus-company');
        else navigate('/passenger'); // Redirect to the path the user was trying to access
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Login error', error);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 hero">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700 dark:text-white">Login</h2>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg outline-none bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-white mb-4"
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg outline-none bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-white mb-4"
        />
        {message && <p className="text-red-600 text-sm mb-4">{message}</p>}
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Don't have an account? 
          <Link to="/register" className="text-blue-500 hover:underline ml-1">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
