import Image from "next/image"
import Link from "next/link"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCreditCard, FaCalendarAlt, FaClock, FaLink, FaHospital, FaUserMd } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-white z-20 relative">
            {/* Newsletter */}
            <div className="bg-[#0E7EA0] text-white py-40 rounded-t-full z-20 ">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold mb-4">BOOK AN APPOINTMENT</h2>
                        <p className="text-lg md:text-xl mb-8">Book your slot to attend career counselling sessions from industry practitioners</p>
                        <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold mb-4">#Dopaminds</h2>
                        <div className="flex justify-center">
                            <Link href="/contact" className="bg-[#FFD700] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#e6c200] transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="bg-[#b4ced6] text-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col justify-between items-center gap-8">
                        {/* Logo */}
                        <div className="w-full">
                            <div className="flex justify-center mb-8">
                                <Link href="/">
                                    <Image
                                        src="/logo.webp"
                                        alt="Manokalp Logo"
                                        width={250}
                                        height={50}
                                        priority
                                    />
                                </Link>
                            </div>
                            
                            {/* Doctor Info */}
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                {/* Doctor Profile */}
                                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaUserMd className="text-[#0E7EA0] text-xl" />
                                        <h3 className="font-bold text-[#0E7EA0]">Dr. Sankalp Jain, M.D.</h3>
                                    </div>
                                    <p className="text-sm mb-2">Associate Consultant</p>
                                    <p className="text-sm mb-2">Institute of Psychiatry & Behavioural Sciences,</p>
                                    <p className="text-sm mb-2">Sir Gangaram Hospital, New Delhi-60</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <FaPhoneAlt className="text-[#0E7EA0] text-sm" />
                                        <a href="tel:+917599975000" className="text-black hover:text-[#0E7EA0] transition-colors">
                                            +91 75999 75000
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaEnvelope className="text-[#0E7EA0] text-sm" />
                                        <a href="mailto:Sankalp.jain@sgrh.com" className="text-black hover:text-[#0E7EA0] transition-colors">
                                            Sankalp.jain@sgrh.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaCreditCard className="text-[#0E7EA0] text-sm" />
                                        <a href="#" className="text-black hover:text-[#0E7EA0] transition-colors">
                                            Lifecoach@kotak (Payment)
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Hospital */}
                                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaHospital className="text-[#0E7EA0] text-xl" />
                                        <h3 className="font-bold text-[#0E7EA0]">Sir Ganga Ram Hospital OPD</h3>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaCalendarAlt className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">Mon, Wed, Fri: 6-8 PM (Room No.F36)</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaCalendarAlt className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">Tue, Thu, Sat: 8-10 AM (Room No.F55)</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaPhoneAlt className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">011-35125600 / 42254000</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaLink className="text-[#0E7EA0] text-sm" />
                                        <a href="https://tinyurl.com/DrSankalpJain" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            Book Appointment
                                        </a>
                                    </div>
                                    {/* <div className="flex items-center gap-2 mt-2">
                                        <FaMapMarkerAlt className="text-[#0E7EA0] text-sm" />
                                        <a href="https://maps.app.goo.gl/hrR4N5ff2wtBZcyTA" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            View Location
                                        </a>
                                    </div> */}
                                </div>
                                
                                {/* Personal Clinic: New Delhi */}
                                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaHospital className="text-[#0E7EA0] text-xl" />
                                        <h3 className="font-bold text-[#0E7EA0]">Personal Clinic: New Delhi</h3>
                                    </div>
                                    <p className="text-sm mb-2">Sparsh/Manokalp Clinic,</p>
                                    <p className="text-sm mb-2">22 Khan Market, Middle Lane, New Delhi</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaClock className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">2-6 PM (By Appointment only)</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaPhoneAlt className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">Ms. Neha: +91 98710 57657</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaWhatsapp className="text-[#0E7EA0] text-sm" />
                                        <a href="https://wa.me/917599975000" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            +91 75999 75000
                                        </a>
                                    </div>
                                    {/* <div className="flex items-center gap-2 mt-2">
                                        <FaMapMarkerAlt className="text-[#0E7EA0] text-sm" />
                                        <a href="https://maps.app.goo.gl/yDyeJk1Nm7TUS2zH6" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            View Location
                                        </a>
                                    </div> */}
                                </div>
                                
                                {/* Personal Clinic: Gurgaon */}
                                <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaHospital className="text-[#0E7EA0] text-xl" />
                                        <h3 className="font-bold text-[#0E7EA0]">Personal Clinic: Gurgaon</h3>
                                    </div>
                                    <p className="text-sm mb-2">A-28/19, A Block, DLF Phase 1,</p>
                                    <p className="text-sm mb-2">Gurugram, HR 122002</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaClock className="text-[#0E7EA0] text-sm" />
                                        <p className="text-sm">By Appointment only</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaPhoneAlt className="text-[#0E7EA0] text-sm" />
                                        <a href="tel:+919311434425" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            +91 93114 34425
                                        </a>
                                    </div>
                                    {/* <div className="flex items-center gap-2 mt-2">
                                        <FaMapMarkerAlt className="text-[#0E7EA0] text-sm" />
                                        <a href="https://maps.app.goo.gl/gULixSXK8pFEcLQU8" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#0E7EA0] transition-colors text-sm">
                                            View Location
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-8">
                            <Link href="https://facebook.com" className="text-black hover:text-[#0E7EA0]" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </Link>
                            <Link href="https://www.instagram.com/manokalp/?igsh=NmJmbWo4eWFzM3ly" className="text-black hover:text-[#0E7EA0]" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </Link>
                            <Link href="https://twitter.com" className="text-black hover:text-[#0E7EA0]" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </Link>
                            <Link href="https://youtube.com" className="text-black hover:text-[#0E7EA0]" aria-label="YouTube">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </Link>
                        </div>
                        
                        <div className="text-center mt-4">
                            <p className="text-sm">© {new Date().getFullYear()} Manokalp. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </footer >
    )
}

export default Footer