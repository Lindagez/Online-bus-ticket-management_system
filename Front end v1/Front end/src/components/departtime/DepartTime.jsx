import React, { useState } from 'react';

const DepartTime = ({ initialDepartureTime = '' }) => {
  const [departureTime, setDepartureTime] = useState(initialDepartureTime);

  const handleTimeChange = (e) => {
    setDepartureTime(e.target.value);
  }

  return (
    <div className='w-full'>
      <label htmlFor="departureTime" className="block mb-2 font-semibold">
        Departure Time
      </label>
      <select
        name="departureTime"
        id="departureTime"
        value={departureTime}
        onChange={handleTimeChange}
        className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-green-700"
      >
        <option value="" disabled>Select Departure Time</option>
        <option value="08:00 AM">08:00 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="02:00 PM">02:00 PM</option>
        <option value="04:00 PM">04:00 PM</option>
      </select>
    </div>
  );
}

export default DepartTime;
