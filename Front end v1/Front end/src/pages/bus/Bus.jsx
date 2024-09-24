import React, { useState, useEffect } from "react";
import { FaCalendarDay } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Bus = () => {
  const location = useLocation();
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({
    busType: "",
    from: "",
    to: "",
    date: "",
    availableSeats: "",
  });
  const ethiopianBuses = [
    {
      id: 1,
      name: "Selam Bus",
      busNumber: "SB001",
      rating: 4,
      description:
        "Selam Bus is known for offering one of the most comfortable and reliable long-distance travel experiences in Ethiopia...",
      from: "Addis Ababa",
      to: "Bahir Dar",
      date: "2024-09-01",
      availableSeats: 12,
      blocked: [3, 5, 10, 11, 17, 18],
      image:
        "https://static.vecteezy.com/system/resources/previews/046/603/373/non_2x/green-energy-bus-powered-by-biofuel-in-a-lush-cityscape-emphasizing-eco-friendly-urban-mobility-suitable-for-sustainable-transport-and-eco-initiatives-sustainable-carbon-reduction-photo.jpeg",
    },
    {
      id: 2,
      name: "Sky Bus",
      busNumber: "SK456",
      rating: 3.5,
      description:
        "Sky Bus is a luxury travel option for those seeking a higher standard of service and comfort on their journeys across Ethiopia...",
      from: "Addis Ababa",
      to: "Mekelle",
      date: "2024-09-01",
      availableSeats: 20,
      blocked: [3, 5, 10, 33, 14, 19, 20],
      image:
        "https://www.shutterstock.com/image-photo/bus-driving-moving-high-motion-260nw-2353562455.jpg",
    },
    {
      id: 3,
      name: "Golden Bus",
      busNumber: "GB789",
      rating: 1.7,
      description:
        "Golden Bus stands out as an affordable yet comfortable travel option for those looking to explore Ethiopia on a budget...",
      from: "Gondar",
      to: "Addis Ababa",
      date: "2024-09-02",
      availableSeats: 8,
      blocked: [13, 5, 12, 16, 17, 23, 24, 27, 40, 39],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokzSu_p4PEf01gls4Pd_CL2O-bSGtGMR7nQ&s",
    },
    {
      id: 4,
      name: "Ethio Bus",
      busNumber: "EB321",
      rating: 4.6,
      description:
        "Ethio Bus is a reliable and trusted transport service that connects the major cities of Ethiopia with ease...",
      from: "Adama",
      to: "Hawassa",
      date: "2024-09-03",
      availableSeats: 18,
      blocked: [3, 37, 18],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5bDovbTDwZQ_9JW9g_JPzLdsnXLWIKJgAA&s",
    },
    {
      id: 5,
      name: "Limalimo Bus",
      busNumber: "LL123",
      rating: 2.9,
      description:
        "Limalimo Bus is synonymous with premium travel in Ethiopia, offering a luxurious ride for passengers who prioritize comfort and elegance...",
      from: "Addis Ababa",
      to: "Dire Dawa",
      date: "2024-09-04",
      availableSeats: 16,
      blocked: [3, 5, 10, 33, 1, 34, 6, 38, 11, 17, 18],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP2-bnhZBS9Fn_L28x1C9iAnPzlegtQ8Klg&s",
    },
    {
      id: 6,
      name: "Abay Bus",
      busNumber: "AB456",
      rating: 4.3,
      description:
        "Abay Bus is a fast and efficient intercity travel service that provides a balance of affordability and comfort...",
      from: "Addis Ababa",
      to: "Jimma",
      date: "2024-09-05",
      availableSeats: 10,
      blocked: [1, 26, 38, 8, 32, 18, 19],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O6ZPzrsysLmsLhwCGM69j3DN6NKgcAg358bb4Mh_zGv9ylTQ3PzbyejFyEy7L6yxcLQ&usqp=CAU",
    },
    {
      id: 7,
      name: "Harmony Bus",
      busNumber: "HB789",
      rating: 3.8,
      description:
        "Harmony Bus offers a balanced travel experience with comfortable seating and onboard amenities for a pleasant journey...",
      from: "Addis Ababa",
      to: "Gondar",
      date: "2024-09-06",
      availableSeats: 14,
      blocked: [2, 7, 12, 19, 22, 25],
      image:
        "https://static.vecteezy.com/system/resources/previews/046/603/373/non_2x/green-energy-bus-powered-by-biofuel-in-a-lush-cityscape-emphasizing-eco-friendly-urban-mobility-suitable-for-sustainable-transport-and-eco-initiatives-sustainable-carbon-reduction-photo.jpeg",
    },
    {
      id: 8,
      name: "Eagle Bus",
      busNumber: "EB234",
      rating: 4.0,
      description:
        "Eagle Bus provides an efficient and comfortable travel experience with spacious seating and excellent customer service...",
      from: "Bahir Dar",
      to: "Mekelle",
      date: "2024-09-07",
      availableSeats: 22,
      blocked: [4, 6, 9, 14, 21],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O6ZPzrsysLmsLhwCGM69j3DN6NKgcAg358bb4Mh_zGv9ylTQ3PzbyejFyEy7L6yxcLQ&usqp=CAU",
      },
    {
      id: 9,
      name: "Zebra Bus",
      busNumber: "ZB567",
      rating: 2.5,
      description:
        "Zebra Bus offers affordable travel options with basic amenities and comfortable seating for budget-conscious travelers...",
      from: "Mekelle",
      to: "Hawassa",
      date: "2024-09-08",
      availableSeats: 15,
      blocked: [8, 11, 15, 19, 21, 30],
      image:
      "https://www.shutterstock.com/image-photo/bus-driving-moving-high-motion-260nw-2353562455.jpg",
   },
    {
      id: 10,
      name: "Atlas Bus",
      busNumber: "AB987",
      rating: 3.1,
      description:
        "Atlas Bus provides premium travel experiences with high-end amenities and exceptional service on its intercity routes...",
      from: "Addis Ababa",
      to: "Gondar",
      date: "2024-09-09",
      availableSeats: 12,
      blocked: [3, 9, 12, 18, 24],
      image:
        "https://static.vecteezy.com/system/resources/previews/046/603/373/non_2x/green-energy-bus-powered-by-biofuel-in-a-lush-cityscape-emphasizing-eco-friendly-urban-mobility-suitable-for-sustainable-transport-and-eco-initiatives-sustainable-carbon-reduction-photo.jpeg",
    },
    {
      id: 11,
      name: "Blue Sky Bus",
      busNumber: "BS654",
      rating: 3.9,
      description:
        "Blue Sky Bus is known for its reliability and comfort, offering a smooth travel experience across Ethiopia’s major routes...",
      from: "Hawassa",
      to: "Jimma",
      date: "2024-09-10",
      availableSeats: 17,
      blocked: [7, 13, 16, 22, 26],
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP2-bnhZBS9Fn_L28x1C9iAnPzlegtQ8Klg&s",
   },
    {
      id: 12,
      name: "Dawn Bus",
      busNumber: "DB345",
      rating: 2.4,
      description:
        "Dawn Bus ensures a comfortable and timely travel experience with premium features and attentive service...",
      from: "Addis Ababa",
      to: "Dire Dawa",
      date: "2024-09-11",
      availableSeats: 14,
      blocked: [4, 15, 20,41,40, 10, 21, 28],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5bDovbTDwZQ_9JW9g_JPzLdsnXLWIKJgAA&s",
    },
    {
      id: 13,
      name: "Ethiopia Express",
      busNumber: "EE678",
      rating: 3.6,
      description:
        "Ethiopia Express provides fast and efficient travel with a focus on punctuality and comfort for travelers...",
      from: "Addis Ababa",
      to: "Mekelle",
      date: "2024-09-12",
      availableSeats: 20,
      blocked: [5, 7, 10, 13, 20, 25, 20,41,40,3],
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokzSu_p4PEf01gls4Pd_CL2O-bSGtGMR7nQ&s",
  },
    {
      id: 14,
      name: "Pride Bus",
      busNumber: "PB012",
      rating: 2.8,
      description:
        "Pride Bus offers budget-friendly travel options with basic amenities for those looking for economical solutions...",
      from: "Gondar",
      to: "Hawassa",
      date: "2024-09-13",
      availableSeats: 13,
      blocked: [2, 8, 15, 20,41,40,3, 12, 16, 20],
      image:
      "https://www.shutterstock.com/image-photo/bus-driving-moving-high-motion-260nw-2353562455.jpg",
  },
    {
      id: 15,
      name: "Victory Bus",
      busNumber: "VB345",
      rating: 5.0,
      description:
        "Victory Bus is dedicated to providing a superior travel experience with top-notch amenities and service...",
      from: "Addis Ababa",
      to: "Jimma",
      date: "2024-09-14",
      availableSeats: 19,
      blocked: [3, 9, 12, 15, 20,41,40,38,35,34,37],
      image:
      "https://static.vecteezy.com/system/resources/previews/046/603/373/non_2x/green-energy-bus-powered-by-biofuel-in-a-lush-cityscape-emphasizing-eco-friendly-urban-mobility-suitable-for-sustainable-transport-and-eco-initiatives-sustainable-carbon-reduction-photo.jpeg",
   },
  ];

  useEffect(() => {
    // Set hardcoded data
    setBuses(ethiopianBuses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredBuses = buses.filter((bus) => {
    return (
      (filters.busType === "" || bus.name === filters.busType) &&
      (filters.from === "" || bus.from === filters.from) &&
      (filters.to === "" || bus.to === filters.to) &&
      (filters.availableSeats === "" ||
        bus.availableSeats >= filters.availableSeats) &&
      (filters.date === "" || bus.date === filters.date)
    );
  });

  const { from, to } = location.state || {};
  useEffect(() => {
    if (from && to) {
      // Set filters.from and filters.to only once when the component mounts
      setFilters((prevFilters) => ({
        ...prevFilters,
        from: prevFilters.from || from, // Only set if not already set
        to: prevFilters.to || to, // Only set if not already set
      }));
    }
  }, [from, to]); // Only run when from or to values change

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

          <div className="col-span-2 lg:col-span-2 md:col-span-1">
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
              placeholder="Total Seat"
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
              <Link
                key={bus.id}
                to={`bus-details/${bus.id}`}
                state={{
                  busName: bus.name,
                  busNumber: bus.busNumber,
                  rating: bus.rating,
                  description: bus.description,
                  busImage: bus.image,
                  from: bus.from,
                  date: bus.date,
                  blocked: bus.blocked,
                  to: bus.to,
                }}
              >
                <div className="w-full bg-neutral-200/70 dark:bg-neutral-900/50 rounded-lg shadow-md overflow-hidden">
                  {/* Bus Image */}
                  <div className="relative">
                    <img
                      src={bus.image}
                      alt={bus.name}
                      className="w-full h-48 object-cover object-center"
                    />
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {41 - bus.blocked.length} Available Seats
                    </span>
                  </div>

                  {/* Bus Information */}
                  <div className="p-4">
                    {/* Bus Name */}
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {bus.name}
                    </h2>

                    {/* Route Information */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
                        <FaLocationDot className="text-green-600" />
                        <p className="text-sm">{bus.from}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
                        <FaLocationDot className="text-red-600" />
                        <p className="text-sm">{bus.to}</p>
                      </div>
                    </div>

                    {/* Journey Date */}
                    <div className="flex items-center text-neutral-800 dark:text-neutral-300 bg-green-600/20 px-3 py-2 rounded-md">
                      <FaCalendarDay className="text-green-600 mr-2" />
                      <p className="text-sm">{bus.date}</p>
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
