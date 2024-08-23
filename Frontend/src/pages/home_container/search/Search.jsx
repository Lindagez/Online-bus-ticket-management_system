import React from 'react'

const Search = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
        <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
            <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
                <div className="">
                    <label htmlFor="from" className="block md-12 font-semibold">
                        From
                    </label>
                    <select name="from" id="from" className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        <option value="">Select Location</option>
                        <option value="Addis Ababa">Addis Ababa</option>
                        <option value="Nazret">Nazret</option>
                        <option value="Dire Dawa">Dire Dawa</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar<">Bahir Dar</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="to" className="block md-12 font-semibold">
                        To
                    </label>
                    <select name="to" id="to" className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        <option value="">Select Location</option>
                        <option value="Addis Ababa">Addis Ababa</option>
                        <option value="Nazret">Nazret</option>
                        <option value="Dire Dawa">Dire Dawa</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar<">Bahir Dar</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="date" className="block md-12 font-semibold">
                        Choose Date
                    </label>
                    <input name="date" id="date" type='date' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                    </input>
                </div>
                <div className="">
                    <label htmlFor="time" className="block md-12 font-semibold">
                        Choose Time
                    </label>
                    <input name="time" id="time" type='time' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                    </input>
                </div>
                <div className="">
                    <label htmlFor="seat" className="block md-12 font-semibold">
                        Total Seat
                    </label>
                    <input name="seat" id="seat" type='number' placeholder='Enter Seat' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                    </input>
                </div>
                <div className="">
                    <button className="w-full px-4 h-12 bg-green-700 text-neutral-50 text-base font-normal rounded-md hover:bg-green-800 duration-500">
                        Check Availablity
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search