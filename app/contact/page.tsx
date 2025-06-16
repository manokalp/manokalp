"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import playfair from "../../fonts/playfair.module.css";
import { toast } from "react-hot-toast";

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
            Please fill in the form below and our team will contact you as soon as possible to confirm your session.
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#FFD700]">
                          Our Address
                        </h4>
                        <p>1234 N Spring St, Los Angeles, CA 90012</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 text-[#FFD700]">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#FFD700]">
                          Email Us
                        </h4>
                        <p>support@manokalp.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 text-[#FFD700]">
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
                        <h4 className="font-semibold text-[#FFD700]">
                          Call Us
                        </h4>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-semibold mb-3 text-[#FFD700]">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-[#FFD700]">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-[#FFD700]">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-[#FFD700]">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
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
                        support@manokalp.com
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
