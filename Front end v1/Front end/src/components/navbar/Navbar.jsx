import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaBus, FaUser } from 'react-icons/fa6';
import Theme from '../theme/Theme';
import Modal from '../navbar/Modal'; // Adjust the import path if necessary

const Navbar = ({ isLoggedIn, onLogout, user }) => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation(); // Get the current route
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/bus", label: "Bus" },
        { href: "/services", label: "Services" },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleLogoutConfirm = () => {
        setIsModalOpen(false);
        onLogout();
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`w-full h-[8ch] fixed top-0 z-50 flex items-center justify-between sm:flex-row lg:px-28 md:px-16 sm:px-7 py-3 px-4 transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md dark:bg-neutral-900' : 'bg-neutral-100/40 dark:bg-neutral-900/40 backdrop-blur-sm'}`}
            >
                {/* Logo section */}
                <Link to={"/"} className='mr-16'>
                    <img src={Logo} alt="logo" className="w-28 h-auto object-contain" />
                </Link>

                {/* Toggle button */}
                <button onClick={handleClick} className="md:hidden text-neutral-600 dark:text-neutral-300 flex items-center justify-end transition-transform duration-300">
                    {
                        open ?
                            <LiaTimesSolid className='text-xl' />
                            :
                            <FaBars className='text-xl' />
                    }
                </button>

                {/* Navigation links */}
                <div className={`${open ? 'flex absolute top-14 left-0 w-full md:w-auto h-auto md:h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center items-center md:bg-transparent md:shadow-none sm:bg-neutral-50 md:dark:bg-transparent sm:dark:bg-neutral-900 shadow-md rounded-md p-4 md:p-0 justify-between mt-4`}>
                    <ul className="list-none flex md:items-center items-start gap-x-5 gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-neutral-500 font-medium">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.href}
                                    onClick={handleClose}
                                    className={`hover:text-green-700 transition-colors ${isScrolled ? '' : 'dark:text-neutral-100'} duration-300 px-3 py-2 rounded-lg ${location.pathname === link.href ? 'bg-neutral-200/70 dark:bg-neutral-800/70 text-green-700' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800 relative">
                        {isLoggedIn ? (
                            <div className="relative">
                                <button onClick={toggleDropdown} className="relative bg-green-700 rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-green-800 transition-colors duration-300 shadow-md flex items-center">
                                    <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-10 h-10 rounded-full bg-green-800 border-4 dark:border-none flex items-center justify-center shadow-lg">
                                        <FaUser className='text-neutral-50 text-lg' />
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-xs font-normal text-neutral-50 tracking-wide">{user}</p>
                                    </div>
                                </button>

                                {/* Dropdown menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 shadow-lg rounded-md py-1">
                                        <Link
                                            to={"/" + localStorage.getItem("token")}
                                            className="block px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-gray-200 dark:hover:bg-neutral-700"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Settings
                                        </Link>
                                        <button
                                            onClick={handleLogoutClick}
                                            className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to={"/login"}>
                                <div className="relative bg-green-700 rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-green-800 transition-colors duration-300 shadow-md flex items-center">
                                    <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-10 h-10 rounded-md border-none bg-neutral-100 border-4  flex items-center justify-center shadow-lg">
                                        <FaBus className='text-green-800 text-lg' />
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-xs font-normal text-neutral-50 tracking-wide">Sign In</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                        {/* Theme */}
                        <Theme />
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onConfirm={handleLogoutConfirm}
            />
        </>
    );
};

export default Navbar;
