import React, { useState } from 'react'

const DepartTime = () => {

    const [departBus, setDepartBus] = useState('');

    const handelDepartBusChange = (e) => {
        setDepartBus(e.target.value);

    }
  return (
    <div className='w-full space-y-4'>
    {
        !departBus ? 
        (
            <div className='w-full grid grid-cols-2 gap-10 mb-4'>
                <div className="">
                    <label htmlFor="departbus" className="block mb-2 font-semibold">
                        Depart Time
                    </label>
                    <select 
                        name="departbus" 
                        id="departbus" 
                        value={departBus} 
                        onChange={handelDepartBusChange} 
                        className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        <option value="">Select a Time</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="05:30 AM">05:30 PM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="05:30 AM">05:30 PM</option>
                    </select>
                </div>
            </div>

        ) : 
        (
            <div className='space-y-5'>
                <div className="w-full flex items-center gap-x-3">
                    <div className="w-fit text-base font-semibold">
                        Bus Depart at: - <span className='ml-1.5 font-medium'>{departBus}</span>
                    </div>
                </div>
            </div>
        )
    }
    
</div>
  )
}

export default DepartTime