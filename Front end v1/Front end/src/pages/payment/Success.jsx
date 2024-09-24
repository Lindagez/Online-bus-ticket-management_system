import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4  my-[8ch] h-[100vh] flex items-center justify-center space-y-10 text-center">
      <div>
        <FaCheckCircle className="size-16 text-center w-full m-4 text-green-800"/>
        <h1 className="text-3xl text-green-700 font-semibold">
          Payment Successful!
        </h1>
        <p className="text-lg text-neutral-100/70">
          Your booking has been confirmed. Thank you for your payment!
        </p>
        <Link
          to="/"
          className="mt-10 inline-block px-8 py-4 bg-green-700 text-neutral-50 text-base font-normal rounded-md hover:bg-green-800 duration-500"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
