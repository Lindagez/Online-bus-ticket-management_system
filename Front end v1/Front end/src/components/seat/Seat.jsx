import React, { useState } from 'react';
import { GiBusDoors, GiSteeringWheel } from 'react-icons/gi';
import { MdOutlineChair } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Seat = ({ isSelected, isBlocked, onClick }) => {
  let seatClass = 'text-3xl rotate-90 cursor-pointer';
  if (isBlocked) {
    seatClass += ' text-red-500';
  } else if (isSelected) {
    seatClass += ' text-green-700';
  } else {
    seatClass += ' text-neutral-600';
  }
  
  return (
    <MdOutlineChair className={seatClass} onClick={!isBlocked ? onClick : undefined} />
  );
};

const BusSeatLayout = ({ date, from, to, BSeats }) => {
  const totalSeats = 41;
  const blockedSeats = BSeats; 
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 7) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can only select a maximum of 7 seats.");
      }
    }
  };

  const handleContinueToPayment = () => {
    const token = localStorage.getItem('token');
    if (token == 'passenger') {
      const basePrice = 250;
      const taxRate = 0.15; // 15% tax rate
      const totalAmount = selectedSeats.length * basePrice * (1 + taxRate);

      navigate("/bus/bus-details/payment", {
        state: {
          seats: selectedSeats.length,
          amount: totalAmount,
          from: from,
          to: to,
          date: date
        }
      });
    } else {
      // Handle case when no token is found (e.g., redirect to login or show a message)
      alert("Please log in to proceed with the payment.");
      navigate("/login"); // Assuming you have a login route
    }
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <Seat
          key={i}
          isSelected={selectedSeats.includes(i)}
          isBlocked={blockedSeats.includes(i)}
          onClick={() => handleSeatClick(i)}
        />
      );
    }
    return seats;
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
        Choose a Seat
      </h2>
      {/* Seat Layout */}
      <div className="w-full flex justify-between">
        <div className="flex-1 w-full flex">
          <div className="w-full flex-1 flex items-stretch gap-x-5">
            <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800 grid grid-cols-1 gap-y-16">
              <GiBusDoors className='text-3xl mt-6 text-neutral-500 dark:text-neutral-600' />
              <GiSteeringWheel className='text-3xl mt-6 text-green-700 -rotate-90' />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(0, 10)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(10, 20)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  <div className="col-span-9"></div>
                  {renderSeats().slice(20, 21)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(21, 31)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(31, 41)}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Information */}
        <div className="space-y-3 w-28 ml-10">
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className='text-lg text-neutral-500 -rotate-90' />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Available
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className='text-lg text-red-500 -rotate-90' />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Blocked
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className='text-lg text-green-700 -rotate-90' />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Selected
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <RiMoneyDollarCircleLine className='text-lg text-neutral-500' />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              250 Birr
            </p>
          </div>
        </div>
      </div>
      {/* Selected Seats */}
      {
        selectedSeats.length > 0 &&
        <div className='!mt-10'>
          <h3 className="text-lg font-bold">
            Selected Seats:
          </h3>
          <div className="flex flex-wrap">
            {selectedSeats.map(seat => (
              <div key={seat} className="w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-green-700/30 flex items-center justify-center">
                {seat}
              </div>
            ))}
          </div>
        </div>
      }
      {/* Calculated Seats */}
      {
        selectedSeats.length > 0 &&
        <div className='!mr-5 flex items-center gap-x-4'>
          <h3 className="text-lg font-bold">
            Total Price:
          </h3>
          <p className="text-lg font-medium">
            {selectedSeats.length * 250 + (selectedSeats.length * (250 * 0.15))} Birr
          </p>
          <span className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
            (Including all of the taxes)
          </span>
        </div>
      }
      
      <div className="flex mt-10">
        <button onClick={handleContinueToPayment} className='w-fit bg-green-700 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-green-800 ease-in-out duration-300'>
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default BusSeatLayout;
