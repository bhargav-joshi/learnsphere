import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in (by checking localStorage)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!userData); // Update login status
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setIsLoggedIn(false); // Update login status
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">LearnSphere</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/courses" className="text-white hover:text-blue-200">Courses</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="bg-maroon-500 text-white py-2 px-4 rounded"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-200">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
