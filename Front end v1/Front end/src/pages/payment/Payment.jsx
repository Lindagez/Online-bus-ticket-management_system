import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Pay from "./Pay";

const Payment = () => {
  const location = useLocation();
  const { seats, amount, from, to, date } = location.state || {};
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const tx_ref = `TX-${Date.now()}`;
  const currency = "ETB";
  const public_key = "CHAPUBK_TEST-ejcuE1v2BNiiP6u1VOM6jALwRWV1ZMUi";
  const [first_name, last_name] = fullName.split(" ");
  const title = "Bus Booking Payment";
  const description = `Payment for booking from ${from} to ${to} and phone number is ${phone}`;
  const callback_url = "https://example.com/callbackurl";
  const return_url = "http://localhost:5173/success";



  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] space-y-10">
      <div className="grid grid-cols-5 gap-16 items-start ">
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form
            action="https://api.chapa.co/v1/hosted/pay"
            className="space-y-6"
            method="POST"
          >
            <input type="hidden" name="public_key" value={public_key} />
            <input type="hidden" name="tx_ref" value={tx_ref} />
            <input type="hidden" name="amount" value={amount} />
            <input type="hidden" name="currency" value={currency} />
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="first_name" value={first_name} />
            <input type="hidden" name="last_name" value={last_name} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="description" value={description} />
            <input type="hidden" name="callback_url" value={callback_url} />
            <input type="hidden" name="return_url" value={return_url} />
            <div className="">
              <label htmlFor="fullname" className="block font-semibold">
                Full Name
              </label>
              <input
                name="fullname"
                id="fullname"
                type="text"
                placeholder="e.g. Abrham M."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full text-neutral-800 dark:text-neutral-100 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="">
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="abrham@mail.com"
                value={localStorage.getItem("user")}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-neutral-800 dark:text-neutral-100 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none"
                disabled
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="block font-semibold">
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="+251 900-000-000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-neutral-800 dark:text-neutral-100 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 h-12 bg-green-700 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 hover:bg-green-800 duration-500"
            >
              Submit Information <FaArrowRight />
            </button>
          </form>
        </div>
        <div className="col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-50 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-8 pb-3">
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  Your Destination
                </h6>
                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    From :- <span className="ml-1.5">{from}</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    To :- <span className="ml-1.5">{to}</span>
                  </div>
                </div>
                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    Date :- <span className="ml-1.5">{date}</span>
                  </div>
                </div>
                <div className="space-y-10">
                  <div className="w-full flex items-center justify-between">
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Total No Seats
                    </h6>
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      {seats} <span className="text-xs">(Driver side)</span>
                    </h6>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Total Amount
                    </h6>
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      {amount} Birr
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
