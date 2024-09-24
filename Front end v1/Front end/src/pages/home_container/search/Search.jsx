import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  // States for From and To locations
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Function to handle form submission
  const handleCheckAvailability = () => {
    // Navigate to the Bus page with state
    if (from && to) {
      navigate("/bus", { state: { from, to } });
    } else {
      alert("Please select both From and To locations.");
    }
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
          <div>
            <label htmlFor="from" className="block md-12 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)} // Update state on change
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Nazret">Nazret</option>
              <option value="Dire Dawa">Dire Dawa</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Bahir Dar">Bahir Dar</option>
              <option value="Gondar">Gondar</option>
              <option value="Mekelle">Mekelle</option>
              <option value="Jimma">Jimma</option>
              <option value="Harar">Harar</option>
              <option value="Dessie">Dessie</option>
              <option value="Shashamane">Shashamane</option>
              <option value="Arba Minch">Arba Minch</option>
              <option value="Debre Berhan">Debre Berhan</option>
              <option value="Asosa">Asosa</option>
              <option value="Adama">Adama</option>
              <option value="Jijiga">Jijiga</option>
            </select>
          </div>
          <div>
            <label htmlFor="to" className="block md-12 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)} // Update state on change
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Nazret">Nazret</option>
              <option value="Dire Dawa">Dire Dawa</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Bahir Dar">Bahir Dar</option>
              <option value="Gondar">Gondar</option>
              <option value="Mekelle">Mekelle</option>
              <option value="Jimma">Jimma</option>
              <option value="Harar">Harar</option>
              <option value="Dessie">Dessie</option>
              <option value="Shashamane">Shashamane</option>
              <option value="Arba Minch">Arba Minch</option>
              <option value="Debre Berhan">Debre Berhan</option>
              <option value="Asosa">Asosa</option>
              <option value="Adama">Adama</option>
              <option value="Jijiga">Jijiga</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleCheckAvailability} // Call function on click
              className="w-full px-4 h-12 bg-green-700 text-neutral-50 text-base font-normal rounded-md hover:bg-green-800 duration-500"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
