import React from 'react';

const Tac = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Terms and Conditions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Please read these terms and conditions carefully before using our service.
        </p>
      </header>

      {/* Terms and Conditions Content */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Terms and Conditions</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our service.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">1. Use of Service</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You agree to use the service in compliance with applicable laws and regulations. You may not use the service for any illegal or unauthorized purpose.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">2. User Accounts</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When creating an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password used to access the service.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">3. Intellectual Property</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All content, including text, images, and trademarks, are owned by or licensed to the company and are protected by intellectual property laws.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">4. Termination</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may terminate or suspend your access to the service at any time, without prior notice or liability, for any reason, including breach of these Terms.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">5. Limitation of Liability</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In no event shall we be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the service.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">6. Changes to Terms</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We reserve the right to modify or replace these Terms at any time. Continued use of the service after any changes constitutes acceptance of the new Terms.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">7. Contact Us</h3>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:support@busbooking.com" className="text-blue-500 dark:text-blue-300 hover:underline">
            support@busbooking.com
          </a>.
        </p>
      </section>
    </div>
  );
};

export default Tac;
