import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Your privacy is important to us. Please review our privacy policy to understand how we handle your information.
        </p>
      </header>

      {/* Privacy Policy Content */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Privacy Policy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This Privacy Policy describes how we handle and protect your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">1. Information We Collect</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We collect various types of information to provide and improve our services. This includes personal information such as your name, email address, and payment details.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">2. How We Use Your Information</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use your information to process transactions, provide customer support, and improve our services. We may also use your information to send you updates and promotional offers.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">3. Data Security</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We implement various security measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">4. Your Rights</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">5. Changes to This Policy</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">6. Contact Us</h3>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@busbooking.com" className="text-blue-500 dark:text-blue-300 hover:underline">support@busbooking.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
