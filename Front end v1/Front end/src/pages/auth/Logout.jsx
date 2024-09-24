// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (onLogout) {
      onLogout();
      navigate('/'); // Redirect to home page after logout
    }
  }, [onLogout, navigate]);

  return null; // This component does not render anything
};

export default Logout;
