import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusModal = ({ show, onClose, bus = null, onSave }) => {
  const [name, setName] = useState('');
  const [seats, setSeats] = useState('');

  useEffect(() => {
    if (bus) {
      setName(bus.name);
      setSeats(bus.seats);
    }
  }, [bus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bus) {
      // Update bus
      await axios.put(`/api/bus/${bus._id}`, { name, seats });
    } else {
      // Create bus
      await axios.post('/api/bus', { name, seats });
    }
    onSave();
    onClose();
  };

  return (
    show ? (
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
        <div className='bg-white p-6 rounded shadow-lg'>
          <h3 className='text-lg font-semibold mb-4'>{bus ? 'Edit Bus' : 'Add Bus'}</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium mb-1'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='seats' className='block text-sm font-medium mb-1'>Seats</label>
              <input
                type='number'
                id='seats'
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='flex justify-end'>
              <button type='button' onClick={onClose} className='mr-2 px-4 py-2 bg-gray-300 text-black rounded'>Cancel</button>
              <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded'>{bus ? 'Update' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default BusModal;
