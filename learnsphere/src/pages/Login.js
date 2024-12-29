import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for routing

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate();  // useNavigate for routing after successful login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Simulating a login request (You can replace this with actual API call)
    setLoading(true);
    setTimeout(() => {
      // Simulate a successful login (You can replace this with real logic)
      if (email === "user@example.com" && password === "pass") {
        console.log("Logged in with:", email, password);
        setError(""); // Clear error
        setLoading(false);

        // Store user data in localStorage to simulate a logged-in user
        localStorage.setItem("user", JSON.stringify({ email }));

        // Redirect to dashboard or courses page after successful login
        navigate("/courses");  // Navigate to courses page
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    }, 1000); // Simulating network delay
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}
        <button 
          type="submit" 
          className={`py-2 px-4 rounded ${loading ? "bg-gray-500" : "bg-blue-500"}`} 
          disabled={loading} 
        >
          {loading ? "Logging in..." : "Login"} {/* Button text changes during loading */}
        </button>
      </form>
    </div>
  );
};

export default Login;
