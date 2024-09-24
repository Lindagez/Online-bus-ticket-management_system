import React, { useState } from 'react';



const hardcodedBookings = [
  {
    id: '1',
    busName: 'Express Bus 101',
    busNumber: 'EB101',
    seats: 2,
    accountNumber: '123456789',
    date: '2024-09-15'
  }
];

const PassengerPanel = () => {
  const [bookings] = useState(hardcodedBookings);



  return (
    <div className="p-6 bg-gray-100 dark:bg-neutral-900/40 min-h-screen mt-[8ch]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Passenger Dashboard</h1>

      <div className="bg-white p-6  dark:bg-neutral-900/70 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Bus Name</th>
              <th className="border p-2">Number</th>
              <th className="border p-2">Seats</th>
              <th className="border p-2">Account Number</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="border p-2">{booking.busName}</td>
                <td className="border p-2">{booking.busNumber}</td>
                <td className="border p-2">{booking.seats}</td>
                <td className="border p-2">{booking.accountNumber}</td>
                <td className="border p-2">{booking.date}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerPanel;
