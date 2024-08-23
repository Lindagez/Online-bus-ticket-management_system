import React, { useState } from 'react';
import { FaCalendarDay, FaSearch } from 'react-icons/fa';
import Bus1 from "../../assets/bus1.png";
import Bus2 from "../../assets/bus11.png";
import Bus3 from "../../assets/bus5.png";
import Bus4 from "../../assets/bus4.png";
import Bus5 from "../../assets/bus7.png";
import Bus6 from "../../assets/bus6.png";
import { Link } from 'react-router-dom';
import { FaLocationDot, FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';

const buses = [
  { id: 1, name: "Selam Bus", from: "Addis Ababa", to: "Nazret", date: "2024-08-22", avilableSeats: 20, image: Bus1 },
  { id: 2, name: "Golden Bus", from: "Nazret", to: "Dire Dawa", date: "2024-08-23", avilableSeats: 15, image: Bus2 },
  { id: 3, name: "Air Bus", from: "Dire Dawa", to: "Hawassa", date: "2024-08-24", avilableSeats: 50, image: Bus3 },
  { id: 4, name: "Sky Bus", from: "Hawassa", to: "Bahir Dar", date: "2024-08-25", avilableSeats: 43, image: Bus4 },
  { id: 5, name: "Abaye Bus", from: "Bahir Dar", to: "Addis Ababa", date: "2024-08-26", avilableSeats: 60, image: Bus5 },
  { id: 6, name: "Bishofu Bus", from: "Addis Ababa", to: "Dire Dawa", date: "2024-08-27", avilableSeats: 5, image: Bus6 },
];

const Bus = () => {
  const [filters, setFilters] = useState({ busType: "", from: "", to: "", date: "",avilableSeats: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredBuses = buses.filter((bus) => {
    return (
      (filters.busType === "" || bus.name === filters.busType) &&
      (filters.from === "" || bus.from === filters.from) &&
      (filters.to === "" || bus.to === filters.to) &&
      (filters.avilableSeats === "" || bus.avilableSeats >= filters.avilableSeats) &&
      (filters.date === "" || bus.date === filters.date)
    );
  });

  return (
    <div className="w-full">
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] grid grid-cols-1 lg:grid-cols-3 gap-x-8 space-y-10">
        <div className="w-full h-[650px] grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 lg:h-[650px] md:h-[250px] col-span-1 gap-14 bg-neutral-200/60 dark:bg-neutral-900/70 rounded-md px-6 py-5">
          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="from" className="block text-md font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              value={filters.from}
              onChange={handleChange}
              className="w-full text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Nazret">Nazret</option>
              <option value="Dire Dawa">Dire Dawa</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Bahir Dar">Bahir Dar</option>
            </select>
          </div>
          <div className="col-span-2 lg:col-span-2 md:col-span-1 ">
            <label htmlFor="to" className="block text-md font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              value={filters.to}
              onChange={handleChange}
              className="w-full text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Nazret">Nazret</option>
              <option value="Dire Dawa">Dire Dawa</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Bahir Dar">Bahir Dar</option>
            </select>
          </div>
          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="date" className="block text-md font-semibold">
              Choose Date
            </label>
            <input
              name="date"
              id="date"
              type="date"
              value={filters.date}
              onChange={handleChange}
              className="w-full text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none  focus:bg-neutral-100 dark:focus:bg-neutral-900"
            />
          </div>
          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="seat" className="block text-md font-semibold">
              Total Seats
            </label>
            <input
              name="seat"
              id="seat"
              type="number"
              placeholder='Total Seat'
              value={filters.avilableSeats}
              onChange={handleChange}
              className="w-full text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none  focus:bg-neutral-100 dark:focus:bg-neutral-900"
            />
          </div>
          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="busType" className="block text-md font-semibold">
              Bus Type
            </label>
            <select
              name="busType"
              id="busType"
              value={filters.busType}
              onChange={handleChange}
              className="w-full text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">All Buses</option>
              <option value="Selam Bus">Selam Bus</option>
              <option value="Golden Bus">Golden Bus</option>
              <option value="Air Bus">Air Bus</option>
              <option value="Sky Bus">Sky Bus</option>
              <option value="Abaye Bus">Abaye Bus</option>
              <option value="Bishofu Bus">Bishofu Bus</option>
            </select>
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 col-span-2 gap-10">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
                <Link to={"bus-details"}>
              <div key={bus.id} className="w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-xl p-4">
                <img src={bus.image} alt={bus.name} className="w-full aspect-video object-contain object-center" />
                <div className="px-3 py-4 space-y-2">
                  <div className="grid grid-cols-1 col-span-2 items-center justify-between">
                    <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50 col-span-1">
                      {bus.name}
                    </h1>
                    <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50 col-span-1">
                      {bus.avilableSeats} Avilable Seats
                    </p>
                    <div className="grid grid-cols-2 col-span-2 items-center w-full  justify-between">
                      
                    <p className="w-fit text-sm font-normal float-left flex py-1 text-neutral-800 dark:text-neutral-50 col-span-1">
                        <FaLocationDot /> {bus.from} 
                    </p>                    
                    <p className="w-fit text-sm font-normal float-right flex  py-1 text-neutral-800 dark:text-neutral-50 col-span-1">
                    <FaLocationDot /> {bus.to} 
                    </p>
                    </div>
                    <p className="w-fit text-sm font-normal flex bg-green-700/30 px-2 py-1 text-neutral-50 dark:text-neutral-50 col-span-2">
                      <FaCalendarDay className='mx-1 mt-0.5' /> {bus.date} 
                    </p>

                  </div>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <div className="w-full text-center col-span-2 text-xl font-semibold text-neutral-500 dark:text-neutral-500">
              No buses found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bus;
