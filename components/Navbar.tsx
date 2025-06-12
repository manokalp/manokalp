'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll event listener to detect when the page is scrolled
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8'>
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo.webp"
                        alt="Manokalp Logo"
                        width={150}
                        height={50}
                        priority
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden focus:outline-none text-black cursor-pointer"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Desktop navigation */}
   
            <div className="hidden md:flex items-center space-x-6 ">
                <Link href="/what-we-do" className="text-gray-700 hover:text-[#0E7EA1] font-medium">What We Do</Link>
                <Link href="/disease" className="text-gray-700 hover:text-[#0E7EA1] font-medium">Disease</Link>
                <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#0E7EA1]">Contact</Link>
                {/* <div className="relative group">
                    <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center">
                        Pages
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className="absolute left-0 mt-[-2] w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">

                    </div>
                </div> */}
            </div>
      

            {/* Mobile navigation */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-2 px-4 md:hidden z-20">
                    <Link href="/what-we-do" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">What We Do</Link>
                    <Link href="/disease" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Disease</Link>
                    <Link href="/contact" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Contact</Link>
                    {/* <div className="py-2">
                        <button
                            className="flex items-center text-gray-700 hover:text-teal-600 font-medium w-full text-left"
                            onClick={() => document.getElementById('mobilePages')?.classList.toggle('hidden')}
                        >
                            Pages
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="mobilePages" className="hidden pl-4 mt-1">


                        </div>
                    </div> */}
                </div>
            )}
            </div>
        </nav>
    );
};

export default Navbar;