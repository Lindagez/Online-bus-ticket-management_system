import React from 'react'
import { Link } from 'react-router-dom'
import Bus1 from "../../../assets/bus5.png"
import Bus2 from "../../../assets/bus11.png"
import Bus3 from "../../../assets/bus1.png"
const Category = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
        <div className="w-full items-center flex justify-between">
            <h1 className="text-2xl font-medium mb-6">
                Latest Post
                </h1>
            <Link to={"/bus"} className='text-green-700'>View All</Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
            <Link to={"/bus/bus-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-1000 overflow-hidden'>
                <img src={Bus1} alt="bus img" className="w-full aspect-video object-contain" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-1000">
                    <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                        Selam Bus
                    </h2>
                </div>
            </Link>
            <Link to={"/bus/bus-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-1000 overflow-hidden'>
                <img src={Bus2} alt="bus img" className="w-full aspect-video object-contain" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-1000">
                    <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                        Golden Bus
                    </h2>
                </div>
            </Link>
            <Link to={"/bus/bus-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-1000 overflow-hidden'>
                <img src={Bus3} alt="bus img" className="w-full aspect-video object-contain" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-1000">
                    <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                        Sky Bus
                    </h2>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Category