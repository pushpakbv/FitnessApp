import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutHistory from "./components/WorkoutHistory";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import WorkoutProgressChart from "./components/WorkoutProgressChart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
  <div className="container mx-auto p-8">
    <header className="mb-8">
      <h1 className="text-3xl font-bold">Fitness Tracking App</h1>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
        {/* Left side of the navbar */}
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        {/* Right side of the navbar (Logout button) */}
        {isAuthenticated && (
          <div className="text-white">
            <Logout /> {/* Show logout if authenticated */}
          </div>
        )}
      </nav>
    </header>

    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* Private Routes */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <PrivateRoute>
              <div>
                <div className="grid grid-cols-2 gap-8">
                  <WorkoutForm />
                  <WorkoutHistory />
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <GoalForm />
                  <GoalList />
                </div>
                <div className="mt-8">
                  <WorkoutProgressChart />
                </div>
              </div>
            </PrivateRoute>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Add a placeholder About Us page */}
      <Route
        path="/about"
        element={
          <div className="mt-8">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="mt-4">
              This is the Fitness Tracking App that helps users monitor and track their workout goals.
            </p>
          </div>
        }
      />
    </Routes>
  </div>
</Router>

  );
};

export default App;
