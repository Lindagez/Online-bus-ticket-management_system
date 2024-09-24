import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaBus, FaList, FaMoneyBillWave } from 'react-icons/fa';
import { getBuses } from '../../services/api';

const initialPassengers = [
  { id: 1, name: 'Daniel K.', email: 'daniel@example.com', createdAt: '2024-08-25' },
  { id: 2, name: 'Solomon T.', email: 'solomon@example.com', createdAt: '2024-08-26' },
  { id: 3, name: 'Abel J.', email: 'abel@example.com', createdAt: '2024-08-26' },
  { id: 4, name: 'Sayid A.', email: 'sayid@example.com', createdAt: '2024-08-26' },
];

const initialBusCompanies = [
  { id: 1, managerName: 'Abrham B.', companyName: 'Golden Bus', email: 'golden@company.com', account: '12345', createdAt: '2024-08-20', status: 'Pending' },
  { id: 2, managerName: 'Selam D.', companyName: 'Selam Bus', email: 'selam@company.com', account: '67890', createdAt: '2024-08-21', status: 'Approved' },
];

const initialBookings = [
  { id: 1, busName: 'Selam Bus', fullName: 'Abel J', busNumber: 'E123', journeyDate: '2024-09-01', journeyTime: '10:00', seats: 2 },
  { id: 2, busName: 'Goldean Bus', fullName: 'Solomon T.', busNumber: 'S456', journeyDate: '2024-09-01', journeyTime: '14:00', seats: 1 },
];
const response = await getBuses();
let initialBuses = [];    
if (response.data.success) {
   initialBuses = response.data.bus
}

const initialPayments = [
  { id: 1, passengerName: 'Solomon T.', passengerAccount: '1000471263162', companyName: 'Golden Bus', companyAccount: '12345',amount: '120' },
  { id: 2, passengerName: 'Abel J', passengerAccount: '10004712234112', companyName: 'Selam Bus', companyAccount: '67890',amount: '200' },
];

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('passengers');
  const [passengers, setPassengers] = useState(initialPassengers);
  const [busCompanies, setBusCompanies] = useState(initialBusCompanies);
  const [bookings, setBookings] = useState(initialBookings);
  const [buses, setBuses] = useState(initialBuses);
  const [payments, setPayments] = useState(initialPayments);

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDelete = (id, type) => {
    console.log(`Delete ${type} with id ${id}`);
  };

  const handleUpdate = (id, type) => {
    console.log(`Update ${type} with id ${id}`);
  };

  const handleAdd = (type) => {
    console.log(`Add ${type}`);
  };
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
    <div className="p-6 my-20 mt-[8ch]">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleTabChange('passengers')}
          className={`py-2 px-4 rounded ${activeTab === 'passengers' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-neutral-900/70'}`}
        >
          <FaUser className="inline-block mr-2" /> Passengers
        </button>
        <button
          onClick={() => handleTabChange('busCompanies')}
          className={`py-2 px-4 rounded ${activeTab === 'busCompanies' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-neutral-900/70'}`}
        >
          <FaBus className="inline-block mr-2" /> Bus Companies
        </button>
        <button
          onClick={() => handleTabChange('bookings')}
          className={`py-2 px-4 rounded ${activeTab === 'bookings' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-neutral-900/70'}`}
        >
          <FaList className="inline-block mr-2" /> Bookings
        </button>
        <button
          onClick={() => handleTabChange('buses')}
          className={`py-2 px-4 rounded ${activeTab === 'buses' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-neutral-900/70'}`}
        >
          <FaList className="inline-block mr-2" /> Buses
        </button>
        <button
          onClick={() => handleTabChange('payments')}
          className={`py-2 px-4 rounded ${activeTab === 'payments' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-neutral-900/70'}`}
        >
          <FaMoneyBillWave className="inline-block mr-2" /> Payments
        </button>
      </div>
      <div>
        {activeTab === 'passengers' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Passengers</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50  bg-neutral-200/60 dark:bg-neutral-900/70">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Created At</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-800 text-neutral-700 dark:text-neutral-400  dark:bg-neutral-800/70">
                {passengers.map((passenger) => (
                  <tr key={passenger.id}>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-neutral-700 dark:text-neutral-400">{passenger.name}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-neutral-700 dark:text-neutral-400">{passenger.email}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-neutral-700 dark:text-neutral-400">{passenger.createdAt}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => handleUpdate(passenger.id, 'passenger')} className="bg-blue-500 text-neutral-50 py-2 px-4 border-r-8 dark:border-neutral-700/80 hover:opacity-80 duration-300">Edit</button>
                      <button onClick={() => handleDelete(passenger.id, 'passenger')} className="ml-4 bg-red-500 text-neutral-50 py-2 px-4 border-r-8 dark:border-neutral-700/80 hover:opacity-80 duration-300">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'busCompanies' && (
          
          <div>
        <h2 className="text-xl font-semibold mb-4">Bus Companies</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 bg-neutral-200/60 dark:bg-neutral-900/70">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-700 bg-neutral-200/60 dark:bg-neutral-800/70">
                {busCompanies.map((company) => (
                  <tr key={company.id}>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-neutral-700 dark:text-neutral-400">{company.managerName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{company.companyName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{company.email}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{company.account}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{company.createdAt}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => handleUpdate(bus.id, 'bus')} className="bg-green-500 text-neutral-50 py-2 px-4 border-r-8 dark:border-neutral-700/80 hover:opacity-80 duration-300">Accept</button>
                      <button onClick={() => handleDelete(bus.id, 'bus')} className="ml-4 bg-red-500 text-neutral-50 py-2 px-4 border-r-8 dark:border-neutral-700/80 hover:opacity-80 duration-300">Deny</button>
                      <span
                    className={`px-2 py-1 rounded ${
                      company.status === 'Approved'
                        ? 'bg-green-200 text-green-800'
                        : company.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                    >
                    {company.status}
                    </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Bookings</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 bg-neutral-200/60 dark:bg-neutral-900/70">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Number</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journey Date</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journey Time</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-700 bg-neutral-200/60 dark:bg-neutral-800/70">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-neutral-400">{booking.busName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{booking.fullName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{booking.busNumber}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{booking.journeyDate}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{booking.journeyTime}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{booking.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'buses' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Buses</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 bg-neutral-200/60 dark:bg-neutral-900/70">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-700 bg-neutral-200/60 dark:bg-neutral-800/70">
                {buses.map((bus) => (
                  <tr key={bus.id}>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-neutral-400">{bus.name}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{bus.number}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{bus.from}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{bus.to}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{bus.date}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{bus.price}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'payments' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Transactions</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 bg-neutral-200/60 dark:bg-neutral-900/70">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passenger Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passenger Account</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Account</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-700 bg-neutral-200/60 dark:bg-neutral-800/70">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-neutral-400">{payment.passengerName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{payment.passengerAccount}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{payment.companyName}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{payment.companyAccount}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">{payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
