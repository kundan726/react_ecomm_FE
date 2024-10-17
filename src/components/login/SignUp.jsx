import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signUpServices from "../../services/authServices/signUpService";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username,setUserName] = useState('');
  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("value", { mobile,username, password, role, email });
    const formData = { mobile,username, password, role, email }
    try {
      const response = await signUpServices(formData);
      console.log("response", response);
      if (response?.status === 201) {
        navigate('/login'); // Redirect upon successful response
      }
    } catch (error) {
      console.error("Error during sign-up", error);
    }
    // setEmail('');
    // setMobile('');
    // setPassword('');
    // setRole('')
  };

  return (
    <div className="flex justify-center items-center mt-16 bg-rgb(229, 228, 226)">
      <form
        onSubmit={submitForm}
        className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Sign Up
        </h2>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 w-full"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 w-full"
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 w-full"
            placeholder="Enter Your name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 w-full"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm">Role:</label>
          {/* <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border border-gray-300 rounded"> */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded  mb-4"
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-amber-800 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-all duration-300 w-full"
        >
          Submit
        </button>
        <div className="text-center text-gray-700">
          <p>Already Have an Account?</p>
          <NavLink to="/login" className="text-amber-800 hover:underline">
            Log In
          </NavLink>
        </div>
      </form>
    </div>
  );
}
