import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TicketModal = ({ show, onClose, ticket = null, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (ticket) {
      setName(ticket.name);
      setPrice(ticket.price);
    }
  }, [ticket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ticket) {
      // Update ticket
      await axios.put(`/api/ticket/${ticket._id}`, { name, price });
    } else {
      // Create ticket
      await axios.post('/api/ticket', { name, price });
    }
    onSave();
    onClose();
  };

  return (
    show ? (
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
        <div className='bg-white p-6 rounded shadow-lg'>
          <h3 className='text-lg font-semibold mb-4'>{ticket ? 'Edit Ticket' : 'Add Ticket'}</h3>
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
              <label htmlFor='price' className='block text-sm font-medium mb-1'>Price</label>
              <input
                type='number'
                id='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='flex justify-end'>
              <button type='button' onClick={onClose} className='mr-2 px-4 py-2 bg-gray-300 text-black rounded'>Cancel</button>
              <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded'>{ticket ? 'Update' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default TicketModal;
