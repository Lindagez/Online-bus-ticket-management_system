import React from 'react';
import { FaStar } from 'react-icons/fa';
import Seat from '../../components/seat/Seat';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { busName, busNumber, rating, description, busImage, from, date, to, blocked } = location.state || {};

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[10ch]'>
      <div className="w-full grid grid-cols-2 gap-16 items-center">
      <div className="col-span-1 space-y-8 bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md">
      {/* Bus Image */}
      <img
        src={busImage}
        alt={`${busName} detail`}
        className="w-full h-64 rounded-md object-cover object-center"
      />

      {/* Bus Info */}
      <div className="space-y-4">
        {/* Bus Name and Number */}
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          {busName}
          <span className="text-base font-normal text-neutral-500 dark:text-neutral-400 ml-2">
            ({busNumber})
          </span>
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1 text-sm text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? '' : 'text-neutral-400 dark:text-neutral-500'} />
            ))}
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-normal">
            {rating} / 5
          </p>
        </div>

        {/* Description */}
        <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
        <div className="col-span-1">
          <div className="space-y-6">
            <div className='w-full space-y-4'>
              <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Departure Location: {from}
              </div>
              <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Arrival Location: {to}
              </div>
              <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Date: {date}
              </div>
            </div>
            <br />
            <Seat from={from} to={to} date={date} BSeats={blocked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
