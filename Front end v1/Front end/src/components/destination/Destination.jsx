import React, { useState } from 'react';

const Destination = ({ initialFrom = '', initialTo = '' }) => {
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  }

  const handleToChange = (e) => {
    setTo(e.target.value);
  }

  const isDestinationSelected = from && to;

  return (
    <div className='w-full space-y-4'>
      {
        !isDestinationSelected ?
          (
            <div className='w-full grid grid-cols-2 gap-10 mb-4'>
              <div className="">
                <label htmlFor="from" className="block mb-2 font-semibold">
                  From
                </label>
              </div>
              <div className="">
                <label htmlFor="to" className="block mb-2 font-semibold">
                  To
                </label>
              </div>
            </div>
          )
          :
          (
            <div className='w-full space-y-4'>
              <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Departure Location: {from}
              </div>
              <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Arrival Location: {to}
              </div>
            </div>
          )
      }
    </div>
  );
}

export default Destination;
