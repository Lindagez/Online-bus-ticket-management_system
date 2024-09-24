import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserModal = ({ show, onClose, user = null, onSave }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      // Update user
      await axios.put(`/api/user/${user._id}`, { email });
    } else {
      // Create user
      await axios.post('/api/user', { email });
    }
    onSave();
    onClose();
  };

  return (
    show ? (
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
        <div className='bg-white p-6 rounded shadow-lg'>
          <h3 className='text-lg font-semibold mb-4'>{user ? 'Edit User' : 'Add User'}</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='flex justify-end'>
              <button type='button' onClick={onClose} className='mr-2 px-4 py-2 bg-gray-300 text-black rounded'>Cancel</button>
              <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded'>{user ? 'Update' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default UserModal;
