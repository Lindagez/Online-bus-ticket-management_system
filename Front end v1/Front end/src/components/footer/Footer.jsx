import React from 'react'
import { FaMapPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-8 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-5 gap-5">
        <div className="space-y-5 col-span-2">
          <Link to="/" className='text-xl text-neutral-800 dark:text-neutral-200 font-bold'>
            <img src={Logo} alt="logo" className="w-44 h-auto object-contain" />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-500 text-base font-normal pr-10">
          Welcome to our bus ticketing system, a revolutionary platform designed to simplify and enhance your travel experience. Our mission is to provide an intuitive and efficient way to book bus tickets online, ensuring a hassle-free journey from start to finish.</p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="/about" className='hover:text-green-700 ease-in-out duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:text-green-700 ease-in-out duration-300'>Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className='hover:text-green-700 ease-in-out duration-300'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/tac" className='hover:text-green-700 ease-in-out duration-300'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="/faq" className='hover:text-green-700 ease-in-out duration-300'>FAQ & Support</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-4">
            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  003, Main Street, Anytown, Addis Ababa
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  024, Chad Street, Mexico, Addis Ababa
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  123, Main Street, Anytown, Debere Zeyte
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer