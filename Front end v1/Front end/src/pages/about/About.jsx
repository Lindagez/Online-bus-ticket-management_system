import React from 'react';
import { FaEnvelope, FaPhone, FaAddressBook } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn more about our mission, team, and how we’re making bus travel easier for everyone.
        </p>
      </header>

      {/* Project Overview */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Our Project</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to our bus ticketing system, a revolutionary platform designed to simplify and enhance your travel experience. Our mission is to provide an intuitive and efficient way to book bus tickets online, ensuring a hassle-free journey from start to finish.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We offer a wide range of features including real-time bus schedules, seat reservations, and secure payment options. Our platform is user-friendly and accessible from any device, making it easy for you to plan and book your trips with confidence.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Sofonias Kedir</h3>
            <p className="text-gray-600 dark:text-gray-400">Express Back end</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1327592564/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=kqhekIAYrzVkY2hR4GsrsvfLcB_3JnpemBDRYlelof8="
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Lidya Gezahegne</h3>
            <p className="text-gray-600 dark:text-gray-400">Express Back end</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Gebriel Admasu</h3>
            <p className="text-gray-600 dark:text-gray-400">React Front end </p>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Hailegiorgis Wagaye</h3>
            <p className="text-gray-600 dark:text-gray-400">React Front end </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We would love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400"/>
            <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:support@busbooking.com" className="text-blue-500 hover:underline">support@busbooking.com</a></p>
          </div>
          <div className="flex items-center">
            <FaPhone className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400"/>
            <p className="text-gray-700 dark:text-gray-300">Phone: <a href="tel:+251911000000" className="text-blue-500 hover:underline">+251 (911) 000-000</a></p>
          </div>
          <div className="flex items-center">
            <FaAddressBook className="mx-1 mt-0.5 text-neutral-500 dark:text-neutral-400"/>
            <p className="text-gray-700 dark:text-gray-300">Address: EagleLion, 24 Megenagna</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
