import React, { useState } from 'react';

const BusCompanyPanel = () => {
  // Hard-coded data for buses and transactions
  const initialBuses = [
    {
      id: 1,
      name: 'Golden Bus',
      number: '34675',
      capacity: 50,
      from: 'City A',
      to: 'City B',
      date: '2024-09-01',
      departure: '09:00',
      arrival: '12:00',
      price: 300,
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Golden Bus',
      number: '66258',
      capacity: 40,
      from: 'City B',
      to: 'City C',
      date: '2024-09-02',
      departure: '10:00',
      arrival: '13:00',
      price: 500,
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Golden Bus',
      number: '25668',
      capacity: 60,
      from: 'City A',
      to: 'City C',
      date: '2024-09-02',
      departure: '05:00',
      arrival: '08:00',
      price: 350,
      status: 'Denied',
    },
  ];

  const initialTransactions = [
    {
      id: 1,
      passengerName: 'Abel T.',
      passengerAccount: '123456789',
      busCompanyName: 'Golden Bus Co.',
      busCompanyAccount: '987654321',
      amount: 30,
      date: '2024-09-01',
    },
    {
      id: 2,
      passengerName: 'Solomon K.',
      passengerAccount: '987654321',
      busCompanyName: 'Golden Bus Co.',
      busCompanyAccount: '987654321',
      amount: 35,
      date: '2024-09-02',
    },
  ];

  const [buses] = useState(initialBuses);
  const [transactions] = useState(initialTransactions);
  const [showAddBus, setShowAddBus] = useState(false);
  const [busForm, setBusForm] = useState({
    name: '',
    number: '',
    capacity: '',
    from: '',
    to: '',
    date: '',
    departure: '',
    arrival: '',
    price: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-neutral-900/40 min-h-screen mt-[8ch]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Bus Company Dashboard</h1>

      <div className="mb-4">
        <button
          className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => setShowAddBus(!showAddBus)}
        >
          {showAddBus ? 'Cancel' : 'Add New Bus'}
        </button>
      </div>

      {showAddBus && (
        <div className="bg-white dark:bg-neutral-900/70 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Add New Bus</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={busForm.name}
                onChange={handleInputChange}
                placeholder="Bus Name"
                className="p-2 bborder border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="text"
                name="number"
                value={busForm.number}
                onChange={handleInputChange}
                placeholder="Bus Number"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="number"
                name="capacity"
                value={busForm.capacity}
                onChange={handleInputChange}
                placeholder="Capacity"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="text"
                name="from"
                value={busForm.from}
                onChange={handleInputChange}
                placeholder="From"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="text"
                name="to"
                value={busForm.to}
                onChange={handleInputChange}
                placeholder="To"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="date"
                name="date"
                value={busForm.date}
                onChange={handleInputChange}
                placeholder="Journey Date"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="time"
                name="departure"
                value={busForm.departure}
                onChange={handleInputChange}
                placeholder="Departure Time"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="time"
                name="arrival"
                value={busForm.arrival}
                onChange={handleInputChange}
                placeholder="Arrival Time"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <input
                type="number"
                name="price"
                value={busForm.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              />
              <select
                name="status"
                value={busForm.status}
                onChange={handleInputChange}
                className="p-2 border border-none rounded outline-none bg-neutral-50 dark:bg-neutral-900/70"
                required
              >
                <option value="">Select Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Denied">Denied</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Add Bus
            </button>
          </form>
        </div>
      )}

      <div className="bg-white dark:bg-neutral-900/70 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Buses</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Bus Name</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Number</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Capacity</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">From</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">To</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Date</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Departure</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Arrival</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Price</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td className="border dark:border-neutral-800 p-2">{bus.name}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.number}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.capacity}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.from}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.to}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.date}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.departure}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.arrival}</td>
                <td className="border dark:border-neutral-800 p-2">{bus.price} Birr</td>
                <td className="border dark:border-neutral-800 p-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      bus.status === 'Approved'
                        ? 'bg-green-200 text-green-800'
                        : bus.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {bus.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white dark:bg-neutral-900/70 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Passenger Name</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Passenger Account</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Bus Company Name</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Bus Company Account</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Amount</th>
              <th className="bg-neutral-100 dark:bg-neutral-800 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border dark:border-neutral-800 p-2">{transaction.passengerName}</td>
                <td className="border dark:border-neutral-800 p-2">{transaction.passengerAccount}</td>
                <td className="border dark:border-neutral-800 p-2">{transaction.busCompanyName}</td>
                <td className="border dark:border-neutral-800 p-2">{transaction.busCompanyAccount}</td>
                <td className="border dark:border-neutral-800 p-2">{transaction.amount} Birr</td>
                <td className="border dark:border-neutral-800 p-2">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusCompanyPanel;
