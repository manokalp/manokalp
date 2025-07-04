"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import playfair from "../../fonts/playfair.module.css";
import { toast } from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaLink,
  // FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
// import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    sessionMode: [] as string[],
    reasonForVisit: "",
    preferredDaysTiming: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing again
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        sessionMode: [...formData.sessionMode, value],
      });
    } else {
      setFormData({
        ...formData,
        sessionMode: formData.sessionMode.filter((mode) => mode !== value),
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Thank you! Your booking request has been sent successfully. Our team will contact you within 24 hours."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          sessionMode: [],
          reasonForVisit: "",
          preferredDaysTiming: "",
        });
      } else {
        const errorMsg =
          data.message ||
          "Unable to send your booking request. Please check your information and try again.";
        toast.error(errorMsg);
        setErrorMessage(errorMsg);
      }
    } catch {
      const errorMsg =
        "Connection issue detected. Please check your internet connection and try again.";
      toast.error(errorMsg);
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto h-full flex justify-center flex-col">
        <div className="text-center mb-16">
          <h1
            className={`text-[#0E7EA0] lg:text-[6vw] text-[8vw] font-bold ${playfair.className} mb-6`}
          >
            Book Now
          </h1>
          <p className="text-black lg:text-[1.25vw] text-[3.5vw] max-w-3xl mx-auto mb-8">
            Please fill in the form below and our team will contact you as soon
            as possible to confirm your session.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="bg-[#0E7EA0] text-white p-8 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-6 ${playfair.className}`}
                  >
                    Get In Touch
                  </h3>
                  <p className="mb-8">
                    We&apos;re here to help with any questions about mental
                    health services, appointments, or support resources.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 text-[#FFD700]">
                        <FaMapMarkerAlt className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#FFD700] mb-3">
                          Our Locations
                        </h4>

                        <div className="mb-4">
                          <div className="font-semibold mb-1 flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Dr. Sankalp
                            Jain, M.D.
                          </div>
                          <p className="ml-6 mb-2">
                            Associate Consultant Institute of Psychiatry &
                            Behavioural Sciences, Sir Gangaram Hospital, New
                            Delhi-60
                          </p>
                          <div className="ml-6 flex items-center">
                            <FaPhoneAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>+91 75999 75000</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="font-semibold mb-1 flex items-center">
                            <IoLocationSharp className="mr-2" /> Sir Ganga Ram
                            Hospital OPD
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaCalendarAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>Mon, Wed, Fri: 6-8 PM (Room No.F36)</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaCalendarAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>Tue, Thu, Sat: 8-10 AM (Room No.F55)</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaPhoneAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>011-35125600 / 42254000</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaLink className="mr-2 text-[#FFD700] text-sm" />
                            <a
                              href="https://tinyurl.com/DrSankalpJain"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Book Appointment
                            </a>
                          </div>
                          {/* <div className="ml-6 mb-1 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-[#FFD700] text-sm" />
                            <a
                              href="https://maps.app.goo.gl/hrR4N5ff2wtBZcyTA"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              View Location
                            </a>
                          </div> */}
                        </div>

                        <div className="mb-4">
                          <div className="font-semibold mb-1 flex items-center">
                            <IoLocationSharp className="mr-2" /> Personal
                            Clinic: New Delhi
                          </div>
                          <p className="ml-6 mb-1">
                            Sparsh/Manokalp Clinic, 22 Khan Market, Middle Lane,
                            New Delhi
                          </p>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaClock className="mr-2 text-[#FFD700] text-sm" />
                            <span>2-6 PM (By Appointment only)</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaPhoneAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>Ms. Neha: +91 98710 57657</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaWhatsapp className="mr-2 text-[#FFD700] text-sm" />
                            <span>+91 75999 75000</span>
                          </div>
                          {/* <div className="ml-6 mb-1 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-[#FFD700] text-sm" />
                            <a
                              href="https://maps.app.goo.gl/yDyeJk1Nm7TUS2zH6"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              View Location
                            </a>
                          </div> */}
                        </div>

                        <div className="mb-2">
                          <div className="font-semibold mb-1 flex items-center">
                            <IoLocationSharp className="mr-2" /> Personal
                            Clinic: Gurgaon
                          </div>
                          <p className="ml-6 mb-1">
                            A-28/19, A Block, DLF Phase 1, Gurugram, HR 122002
                          </p>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaClock className="mr-2 text-[#FFD700] text-sm" />
                            <span>By Appointment only</span>
                          </div>
                          <div className="ml-6 mb-1 flex items-center">
                            <FaPhoneAlt className="mr-2 text-[#FFD700] text-sm" />
                            <span>+91 93114 34425</span>
                          </div>
                          {/* <div className="ml-6 mb-1 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-[#FFD700] text-sm" />
                            <a
                              href="https://maps.app.goo.gl/gULixSXK8pFEcLQU8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              View Location
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                      placeholder="City/Country"
                    />
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Mode of Session
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="inPerson"
                        name="sessionMode"
                        value="In-person"
                        checked={formData.sessionMode.includes("In-person")}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-[#0E7EA0] focus:ring-[#0E7EA0] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="inPerson"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        In-person
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="online"
                        name="sessionMode"
                        value="Online (Video)"
                        checked={formData.sessionMode.includes(
                          "Online (Video)"
                        )}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-[#0E7EA0] focus:ring-[#0E7EA0] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="online"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Online (Video)
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reasonForVisit"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Reason for Visit (Brief Description)
                  </label>
                  <textarea
                    id="reasonForVisit"
                    name="reasonForVisit"
                    value={formData.reasonForVisit}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                    placeholder="Please briefly describe the reason for your visit..."
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="preferredDaysTiming"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Days/Timings
                  </label>
                  <textarea
                    id="preferredDaysTiming"
                    name="preferredDaysTiming"
                    value={formData.preferredDaysTiming}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E7EA0] focus:border-[#0E7EA0]"
                    placeholder="Please let us know your preferred days and times for the session..."
                  ></textarea>
                </div>

                <div className="text-right">
                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-left">
                      <p className="text-sm font-medium">{errorMessage}</p>
                      <p className="text-xs mt-1">
                        If issues persist, please email us directly at
                        Sankalp.jain@sgrh.com
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0E7EA0] hover:bg-[#0c6d8a] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Our care coordinator will respond shortly.
                  </p>
                </div>
                <div className="flex  justify-between items-center mt-10">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#0F7EA0]">
                      <MdEmail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F7EA0]">Email Us</h4>
                      <p>Sankalp.jain@sgrh.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-[#0F7EA0]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F7EA0]">Call Us</h4>
                      <p>+91 75999 75000</p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-10">
                  <h4 className="font-semibold mb-3 text-[#0F7EA0]">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/manokalp/?igsh=NmJmbWo4eWFzM3ly"
                      className="text-[#0F7EA0] hover:text-[#0c6d8a]"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </Link>
                    <Link
                      href=" https://www.linkedin.com/in/dr-sankalp-jain-65747117a/"
                      className="text-[#0F7EA0] hover:text-[#0c6d8a]"
                      aria-label="Twitter"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </Link>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
