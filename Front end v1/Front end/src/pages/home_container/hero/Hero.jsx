import React from 'react'


import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
const Hero = () => {

  return (
    <div className='w-full h-[calc(100vh-8ch)]  lg:ps-28 md:ps-16 sm:ps-7 ps-4  flex items-center justify-center flex-col hero relative'>
      <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10 mt-[8ch]">
        
        <motion.dev className="w-full h-auto rounded-md flex items-center justify-center flex-col space-y-14"
        initial={{opacity:0.2, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5,ease: "linear", delay:0.2}}
        >
          <motion.dev className="space-y-5 w-[50%] text-center"
            initial={{opacity:0.2, y:-10}}
            animate={{opacity:1, y:0}}
            transition={{duration:1,ease: "linear", delay:0.2}}
            >
              <motion.h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-neutral-50 leading-[1.15]"
            initial={{opacity:0.2, y:-10}}
            animate={{opacity:1, y:0}}
            transition={{duration:2,ease: "linear", delay:0.2}}
            >
              Reserve Your Bus
              <span className="text-green-600 tracking-wider">Tickets</span>
              Now
            </motion.h1>
            <motion.h1 className="text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis"
            initial={{opacity:0.2, y:-10}}
            animate={{opacity:1, y:0}}
            transition={{duration:2,ease: "linear", delay:0.6}}
            >
              Find and book your bus tickets with just a few clicks. We offer a wide range of buus routes and schedules to suits your needs.
            </motion.h1>
          </motion.dev>
          <Link to={"/bus"}>
            <motion.button className="w-fit bg-green-800 hover:bg-green-900 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300">
              Reserve Book Now
            </motion.button>
          </Link>
        </motion.dev>
        <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 right-48">
        </div>
      </div>
  
    </div>
  )
}

export default Hero