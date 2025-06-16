"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import DiseaseMenus, { CategoryMenu, diseaseData } from "./DiseaseMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Flatten all diseases for search
  const allDiseases = Object.values(diseaseData).flat();
  const filteredDiseases = allDiseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-3"}`}>
      {/* Top: Logo and menu button row */}
      <div className="w-full flex flex-row items-center justify-between py-2 lg:justify-center px-2 md:px-4 lg:px-6">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Manokalp Logo"
            width={240}
            height={48}
            priority
            className="cursor-pointer max-w-[240px] h-auto"
          />
        </Link>
        {/* Search icon: always visible in top row, before hamburger */}
        <div className="flex flex-row items-center justify-between">
        <button
          className=" text-gray-700 hover:text-[#0E7EA1] ml-10 lg:hidden block"
          onClick={() => setSearchOpen((prev) => !prev)}
          aria-label="Search diseases"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
          </svg>
        </button>
        {/* Mobile menu button: show at lg and below */}
        <button
          className="lg:hidden focus:outline-none text-black cursor-pointer ml-2"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        </div>
      </div>
      {/* Search dropdown/modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-start pt-24" onClick={() => setSearchOpen(false)}>
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E7EA1] text-base mb-4"
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              autoFocus
            />
            <div className="max-h-64 overflow-y-auto">
              {filteredDiseases.length > 0 ? (
                filteredDiseases.map(disease => (
                  <Link
                    key={disease.link}
                    href={disease.link}
                    className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                    onClick={() => setSearchOpen(false)}
                  >
                    {disease.name}
                  </Link>
                ))
              ) : (
                <div className="text-gray-400 px-3 py-2">No diseases found.</div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Bottom: Centered Menu Row */}
      <div className="w-full flex justify-center items-center px-2 md:px-4 lg:px-6">
        {/* Desktop navigation: show at lg and above */}
        <div className="hidden lg:flex items-center space-x-4 w-full justify-center">
          <Link
            href="/what-we-do"
            className="text-gray-700 hover:text-[#0E7EA1] font-medium flex items-center text-base"
          >
            <span className="mr-1"><Image src="/icons/about-icon.webp" alt="What We Do" width={20} height={20} /></span> What We Do
          </Link>
          <Link href="/disease" className="text-gray-700 hover:text-[#0E7EA1] font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-all duration-200 flex items-center text-base">
            <span className="mr-1"><Image src="/icons/disease.webp" alt="Search Diseases" width={20} height={20} /></span> Search Diseases
          </Link>
          <DiseaseMenus />
          <Link
            href="/contact"
            className="text-gray-700 hover:text-[#0E7EA1] font-medium flex items-center text-base"
          >
            <span className="mr-1"><Image src="/icons/contact.webp" alt="Contact" width={20} height={20} /></span> Contact
          </Link>
        </div>
        {/* Mobile navigation: show at lg and below */}
        {isMenuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-white shadow-md py-4 px-4 lg:hidden z-20 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-2xl">
            <Link
              href="/what-we-do"
              className="block py-3 text-gray-700 hover:text-[#0E7EA1] font-medium border-b border-gray-100 flex items-center text-base"
              onClick={closeMenu}
            >
              <span className="mr-2"><Image src="/icons/about-icon.webp" alt="What We Do" width={20} height={20} /></span> What We Do
            </Link>
            <Link
              href="/disease"
              className="block py-3 text-gray-700 hover:text-[#0E7EA1] font-medium border-b border-gray-100 flex items-center text-base"
              onClick={closeMenu}
            >
              <span className="mr-2"><Image src="/icons/disease.webp" alt="Search Diseases" width={20} height={20} /></span> Search Diseases
            </Link>
            <div className="py-3 border-b border-gray-100">
              {Object.entries(diseaseData).map(([category, diseases]) => (
                <CategoryMenu key={category} category={category} diseases={diseases} />
              ))}
            </div>
            <Link
              href="/contact"
              className="block py-3 text-gray-700 hover:text-[#0E7EA1] font-medium flex items-center text-base"
              onClick={closeMenu}
            >
              <span className="mr-2"><Image src="/icons/contact.webp" alt="Contact" width={20} height={20} /></span> Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
