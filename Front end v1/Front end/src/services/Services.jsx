import React from 'react';
import { FaEnvelope, FaPhone, FaAddressBook } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover the range of services we offer to make your travel experience smooth and enjoyable.
        </p>
      </header>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Service 1 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKuQpIoloTa-7Fp6wm7i_PKZyY7GKsqJ3Lg&s"
            alt="Online Bus Booking"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Online Bus Booking</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Easily book your bus tickets online with our user-friendly platform. Choose your route, select your seats, and make secure payments—all from the comfort of your home.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ukpnD9uqkpOCV-i76mwgEUHlqmqLVSDrJQ&s"
            alt="Real-Time Bus Tracking"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Real-Time Bus Tracking</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Stay updated with real-time tracking of your bus. Our system provides live updates on bus locations, so you can plan your journey better and avoid unnecessary delays.
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/07/30/60/11/360_F_730601108_6C1pUYdNFmoNFO2AS76IQmQmC9lLtNif.jpg"
            alt="Flexible Payment Options"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Flexible Payment Options</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We offer multiple payment options to make your transactions easy and secure. Choose from credit/debit cards, e-wallets, and more to complete your purchase.
            </p>
          </div>
        </div>
        {/* Service 4 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1359876068/vector/customer-service-hotline-operators-consult-customers-with-headsets-on-computers-247-global.jpg?s=612x612&w=0&k=20&c=HcrFsPakslvox6rWnOWllH-jJ32TUNrTKusZ1J0_5oc="
            alt="Customer Support"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Customer Support</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our dedicated support team is available 24/7 to assist you with any queries or issues you may have. Contact us anytime for prompt and helpful responses.
            </p>
          </div>
        </div>
        {/* Service 5 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJAb3XAdUeY6BBjejTXKCetyICf3NOvwg1Q&s"
            alt="Easy Refunds and Cancellations"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Easy Refunds and Cancellations</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Manage your bookings with ease. Our platform allows you to request refunds and cancellations without hassle, ensuring a smooth experience in case your plans change.
            </p>
          </div>
        </div>
        {/* Service 6 */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg"
            alt="Special Offers and Discounts"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Special Offers and Discounts</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Enjoy exclusive offers and discounts on bus tickets. Keep an eye out for special promotions and save on your next journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you have any questions about our services or need assistance, don’t hesitate to reach out to us.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mx-1 mt-0.5 text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:support@busbooking.com" className="text-blue-500 dark:text-blue-400 hover:underline">support@busbooking.com</a></p>
          </div>
          <div className="flex items-center">
            <FaPhone className="mx-1 mt-0.5 text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">Phone: <a href="tel:+251911000000" className="text-blue-500 dark:text-blue-400 hover:underline">+251 (911) 000-000</a></p>
          </div>
          <div className="flex items-center">
            <FaAddressBook className="mx-1 mt-0.5 text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">Address: EagleLion, 24 Megenagna</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
