import React from 'react';
import { FaEnvelope, FaPhone, FaAddressBook } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We’d love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
      </header>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You can contact us through the following methods:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400" />
            <p className="text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:support@busbooking.com" className="text-blue-500 dark:text-blue-300 hover:underline">support@busbooking.com</a>
            </p>
          </div>
          <div className="flex items-center">
            <FaPhone className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400" />
            <p className="text-gray-700 dark:text-gray-300">
              Phone: <a href="tel:+251911000000" className="text-blue-500 dark:text-blue-300 hover:underline">+251 (911) 000-000</a>
            </p>
          </div>
          <div className="flex items-center">
            <FaAddressBook className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400" />
            <p className="text-gray-700 dark:text-gray-300">Address: EagleLion, 24 Megenagna</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
