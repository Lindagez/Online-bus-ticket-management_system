import React from 'react'

import { Link } from 'react-router-dom'
import BusDetail from "../../assets/logo.png"
import { FaStar } from 'react-icons/fa6'
import Destination from '../../components/destination/Destination'
import DepartTime from '../../components/departtime/DepartTime'
import Seat from '../../components/seat/Seat'

const Detail = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[10ch]'>
        <div className="w-full grid grid-cols-2 gap-16 items-center">
            <div className="col-span-1 space-y-8">
                <img src={BusDetail} alt="detail img" className="w-full aspect-[3/2] rounded-md object-contain" />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                        Selam Bus
                        <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                            (Bus Number Plate)
                        </span>
                    </h1>
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                            (4.9)
                        </p>
                    </div>
                    <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dolorum quo laudantium, delectus beatae numquam sed nostrum iste dolorem error accusantium enim quisquam! Laudantium, praesentium!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dolorum quo laudantium, delectus beatae numquam sed nostrum iste dolorem error accusantium enim 
                    </p>
                </div>
            </div>
            <div className="col-span-1">
                <div className="space-y-6">
                    <Destination />
                    <DepartTime />
                    <Seat />
                </div>
                {/* Seat Selection */}

                
                {/* processed to payment */}
                <div className="flex mt-10">
                    <Link to={"payment"} className='w-fit bg-green-700 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-green-800 ease-in-out duration-300'>
                         Continue to Payment 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail