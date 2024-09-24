import React from 'react';

const Question = () => {
  const faqs = [
    {
      question: 'What is the Bus Booking platform?',
      answer: 'The Bus Booking platform allows users to book bus tickets online, view schedules, and manage reservations easily from anywhere.'
    },
    {
      question: 'How do I create an account?',
      answer: 'To create an account, simply click on the "Sign Up" button on the homepage, fill in your details, and follow the instructions sent to your email.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking by navigating to the "My Bookings" section and selecting the booking you want to cancel. Please note that cancellation policies may apply.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team via email at support@busbooking.com or call our hotline at +123-456-7890 for immediate assistance.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use secure encryption technology to ensure that all transactions and personal information are protected.'
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen py-12 px-6">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find answers to some of the most common questions below.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Question;
