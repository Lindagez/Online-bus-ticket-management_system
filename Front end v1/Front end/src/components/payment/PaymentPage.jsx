import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('chapa'); // Default to Chapa
  const [fullName, setFullName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      if (paymentMethod === 'chapa') {
        // Handle Chapa payment
        const response = await axios.post('/api/payment/chapa', { amount });
        if (response.data.status === 'success') {
          setPaymentStatus('success');
          alert('Payment through Chapa was successful!');
        } else {
          setPaymentStatus('error');
          alert('Payment through Chapa failed. Please try again.');
        }
      } else {
        // Handle manual bank payment
        const response = await axios.post('/api/payment/manual', { fullName, accountNumber, amount });
        if (response.data.status === 'success') {
          setPaymentStatus('success');
          alert('Manual bank payment recorded successfully!');
        } else {
          setPaymentStatus('error');
          alert('Manual bank payment failed. Please try again.');
        }
      }
    } catch (error) {
      setPaymentStatus('error');
      console.error('Payment error', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Payment</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Complete Your Payment</h2>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <div className="flex space-x-4">
            <button
              className={`p-2 rounded border ${paymentMethod === 'chapa' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
              onClick={() => setPaymentMethod('chapa')}
            >
              Pay with Chapa
            </button>
            <button
              className={`p-2 rounded border ${paymentMethod === 'manual' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
              onClick={() => setPaymentMethod('manual')}
            >
              Manual Bank Payment
            </button>
          </div>
        </div>

        {/* Chapa Payment Form */}
        {paymentMethod === 'chapa' && (
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Submit with Chapa
            </button>
          </form>
        )}

        {/* Manual Bank Payment Form */}
        {paymentMethod === 'manual' && (
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Account Number</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Submit with Bank acc
            </button>
          </form>
        )}

        {paymentStatus && (
          <div className={`mt-4 p-4 text-white rounded ${
            paymentStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {paymentStatus === 'success' ? 'Payment was successful!' : 'Payment failed. Please try again.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
