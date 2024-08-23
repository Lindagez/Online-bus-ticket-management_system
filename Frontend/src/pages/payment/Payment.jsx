import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Payment = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] space-y-10'>
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Passanger Information
                </h2>
                <form action="post" className="space-y-6">
                    <div className="">
                        <label htmlFor="fullname" className="block md-12 font-semibold">
                            Full Name
                        </label>
                        <input name="fullname" id="fullname" type='text' placeholder='e.g. Abrham M.' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        </input>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block md-12 font-semibold">
                            Email
                        </label>
                        <input name="email" id="email" type='email' placeholder='abrham@mail.com' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        </input>
                        <small className="block mt-1 text-xs text-green-500 dark:text-green-600 font-normal">
                            You will receive your tickets via this email address.
                        </small>
                    </div>
                    <div className="">
                        <label htmlFor="phone" className="block md-12 font-semibold">
                            Phone Number
                        </label>
                        <input name="phone" id="phone" type='number' placeholder='+251 900-000-000' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        </input>
                    </div>
                    <div className="">
                        <label htmlFor="altphone" className="block md-12 font-semibold">
                            Alt Phone Number
                        </label>
                        <input name="altphone" id="altphone" type='number' placeholder='+251 911-000-000' className="w-full apperarance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-none dark:bottom-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        </input>
                    </div>
                </form>
            </div>
            <div className="col-span-2 space-y-8">
                <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
                    <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-50 dark:border-neutral-800/40 pb-3 mb-4">
                        Your Booking Satus                         
                    </h2>
                    <div className="space-y-8 pb-3">
                        <div className="space-y-4">
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                Your Destination
                            </h6>
                            <div className="w-full flex items-center gap-x-3">
                                <div className="w-fit text-base font-medium">
                                    From :- <span className='ml-1.5'>Addis Ababa</span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80">
                                    </div>
                                </div>
                                <div className="w-fit text-base font-medium">
                                    To :- <span className='ml-1.5'>Bahir Dar</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-x-3">
                                <div className="w-fit text-base font-medium">
                                    Arrive at :- <span className='ml-1.5'>05:00 AM</span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80">
                                    </div>
                                </div>
                                <div className="w-fit text-base font-medium">
                                    Depart at :- <span className='ml-1.5'>07:30 AM</span>
                                </div>
                            </div>     
                            <div className="space-y-10">
                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total No Seats
                                    </h6>
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        10 <span className='text-xs'>(Driver side)</span>
                                    </h6>
                                </div> 
                                
                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total Amount
                                    </h6>
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        2875 Birr
                                    </h6>
                                </div> 
                            </div>  
                        </div>
                    </div>

                </div>
                <button className="w-full px-8 h-12 bg-green-700 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 hover:bg-green-800 duration-500">
                        Processed to Pay <FaArrowRight />
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Payment