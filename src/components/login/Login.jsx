import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginService from "../../services/authServices/loginService";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "../../context/userContext.jsx";
import { useAuthContext } from "../../context/authContect.jsx";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUserEmail} = useUserContext();
  const { setAuthDetails } = useAuthContext();
  const formSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("form data", { email, password });
      const formData = { email, password };
      const serviceResponse = await loginService(formData);
      console.log("service responseeeeeeeeeeeeeeee", serviceResponse);
      console.log("TOken", serviceResponse?.data?.response?.token);
      if (serviceResponse?.data?.msg === "Login successful") {
        localStorage.setItem("token", serviceResponse?.data?.response?.token);
        setAuthDetails(serviceResponse?.data?.response);
        setUserEmail(email);
        navigate("/");
        window.dispatchEvent(new Event('storage'));
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex justify-center items-center mt-16 bg-rgb(229, 228, 226)">
      <form
        onSubmit={formSubmit}
        className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Log In
        </h2>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 w-full"
            placeholder="Enter Your email"
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
        <button
          type="submit"
          className="bg-amber-800 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-all duration-300 w-full"
        >
          Submit
        </button>
        <div className="text-center text-gray-700">
          <p>Don't Have an Account?</p>
          <NavLink to="/signUp" className="text-amber-800 hover:underline">
            SIGN UP
          </NavLink>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
