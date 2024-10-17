import React, { useState } from "react";
import shop from "../../assets/shop.jpg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = (e) => {
    try {
      e.preventDefault();
      console.log({ name, email, mobileNo });
      setEmail(""), setMobileNo(""), setName("");
    } catch (error) {}
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-3">
      {/* Contact Form */}
      <div className="bg-[#efeeec] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl max-w-lg text-amber-800 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <form onSubmit={submitForm}>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
              className="border border-gray-700 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-500 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
              className="border border-gray-700 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-500 transition-all duration-300"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e?.target?.value)}
              className="border border-gray-700 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-500 transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <div className="mb-4">
              <textarea
                placeholder="Enter Your Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-700 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-amber-800 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="max-w-lg mt-6 md:mt-0 md:ml-6">
        <img
          src={shop}
          alt="Shop"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
