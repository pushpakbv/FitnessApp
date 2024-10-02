import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user)); // Store user in Redux
      navigate("/"); // Redirect to home after login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto">
    <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">Welcome Back</h2>
    <div className="mb-4">
      <label className="block text-sm text-gray-600">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm text-gray-600">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
      Login
    </button>
    <p className="mt-4 text-sm text-center">
      Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
    </p>
  </form>
  

  
  );
};

export default Login;
