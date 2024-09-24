import React, { useState } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import { register } from '../../services/api';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Add state to handle messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the mock register function
      const response = await register({ fullName, email, password });

      // Check the response data
      if (response.data.success) {
        alert(response.data.message);
        navigate('/login');
      }
      setMessage(response.data.message);
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600 hero">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700 dark:text-white">Register</h2>
        <input 
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg outline-none bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-white mb-4"
        />
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
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full transition duration-300"
        >
          Register
        </button>
        {message && <p className="text-green-600 text-sm mt-4">{message}</p>}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account? 
          <Link to="/login" className="text-blue-500 hover:underline ml-1">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
