import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate(); // Create navigate instance

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      // If no user data in localStorage, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  const handleCourses = () => {
    navigate("/courses"); // Navigate to Courses page
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page after logout
  };

  const handleResetPassword = () => {
    // Placeholder for password reset functionality
    if (newPassword.length >= 6) {
      alert("Password reset successfully!");
      // In a real application, you would send the password to an API for updating.
      setShowResetPassword(false); // Close the modal after reset
    } else {
      alert("Password must be at least 6 characters.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        {/* Greeting */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={user?.avatar || "https://www.w3schools.com/w3images/avatar2.png"} // Default avatar
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-4 border-blue-500 mr-4"
          />
          <h2 className="text-3xl font-semibold text-blue-600">Welcome, {user ? user.name : "Guest"}</h2>
        </div>

        {/* User Details */}
        <div className="mb-6">
          <p className="text-lg text-gray-700">Email: {user?.email}</p>
          <p className="text-lg text-gray-700">Member since: {user?.createdAt || "N/A"}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleCourses}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full shadow-md hover:bg-blue-400 transition duration-300"
          >
            View Courses
          </button>
          <button
            onClick={() => setShowResetPassword(true)} // Show reset password modal
            className="bg-green-500 text-white py-3 px-6 rounded-lg w-full shadow-md hover:bg-green-400 transition duration-300"
          >
            Reset Password
          </button>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white py-3 px-6 rounded-lg w-full shadow-md hover:bg-gray-400 transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetPassword && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Reset Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={handleResetPassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300"
              >
                Reset Password
              </button>
              <button
                onClick={() => setShowResetPassword(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
