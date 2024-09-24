import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const InternationalBus = "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV84X3Bob3RvX29mX3doaXRlX3RvdXJpc3RfYnVzX29uX3RoZV9yb2FkX2hpZ2hfcl8zNThjMmU2MC0yYTU4LTQ2ZjAtODdkMy02ZGY3YWE0YzExZDFfMS5qcGc.jpg";
  const IntercityBus = "https://media.istockphoto.com/id/904380598/photo/white-buses-traveling-on-the-highway-turning-towards-the-horizon-in-an-autumn-landscape-at.jpg?s=612x612&w=0&k=20&c=4iPPncT7lKXu0jTZb6d-N4tiqtJqZHKVOCpxzGO6NRU=";
  const LocalBus = "https://t3.ftcdn.net/jpg/07/74/82/76/360_F_774827649_AkQcLHRHVFa3HEZG76k3PhexukpHi0v8.jpg";
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Bus Categories
        </h1>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Local Travel */}
        <Link
          to="/bus"
          className="group relative block rounded-xl overflow-hidden shadow-lg bg-neutral-200/60 dark:bg-neutral-900/40 hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src={LocalBus}
            alt="Local Travel"
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Local Travel
            </h2>
          </div>
        </Link>

        {/* Intercity Travel */}
        <Link
          to="/bus"
          className="group relative block rounded-xl overflow-hidden shadow-lg bg-neutral-200/60 dark:bg-neutral-900/40 hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src={IntercityBus}
            alt="Intercity Travel"
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Regional Travel
            </h2>
          </div>
        </Link>

        {/* International Travel */}
        <Link
          to="/bus"
          className="group relative block rounded-xl overflow-hidden shadow-lg bg-neutral-200/60 dark:bg-neutral-900/40 hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src={InternationalBus}
            alt="International Travel"
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              International Travel
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
