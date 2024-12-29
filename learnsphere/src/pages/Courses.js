// src/pages/Courses.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link to create links to course details

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React.js and how to build dynamic web applications.",
      structure: ["Introduction", "JSX", "State Management", "Props", "React Router", "Hooks"],
      completed: false,
      progress: 30,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts including closures, promises, and async/await.",
      structure: ["Closures", "Promises", "Async/Await", "Event Loop", "ES6+", "Design Patterns"],
      completed: false,
      progress: 50,
    },
    {
      id: 3,
      title: "Vue.js Crash Course",
      description: "Learn Vue.js from scratch and build interactive front-end applications.",
      structure: ["Vue Basics", "Directives", "Components", "Vue Router", "State Management (Vuex)", "Vue CLI"],
      completed: false,
      progress: 10,
    },
    {
      id: 4,
      title: "Node.js for Beginners",
      description: "A comprehensive introduction to Node.js, covering back-end development basics.",
      structure: ["Introduction to Node", "Modules", "Express.js", "Working with Databases", "API Development"],
      completed: false,
      progress: 20,
    },
    {
      id: 5,
      title: "Python for Data Science",
      description: "Learn how to use Python for data science, from data analysis to machine learning.",
      structure: ["Introduction to Python", "Data Analysis with Pandas", "Visualization with Matplotlib", "Machine Learning with Scikit-Learn"],
      completed: false,
      progress: 15,
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      description: "Build full-stack applications using React, Node.js, and MongoDB.",
      structure: ["Frontend (React)", "Backend (Node.js)", "Database (MongoDB)", "API Integration", "Authentication and Authorization"],
      completed: false,
      progress: 40,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const navigate = useNavigate();

  // Check if user is logged in, otherwise redirect to login page
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  const toggleCompletion = (id) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === id) {
        course.completed = !course.completed;
      }
      return course;
    });

    // Save updated courses to localStorage
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    // Update state with new courses
    setCourses(updatedCourses);
  };

  // Handle search functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Courses</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Courses..."
          className="w-full p-3 border rounded-lg shadow-md focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className={`bg-white p-4 rounded-lg shadow-lg ${course.completed ? "bg-green-100" : ""}`}
          >
            <h3 className="text-xl font-semibold">{course.title}</h3>

            <div className="my-2">
              <p className="text-sm text-gray-500">Progress: {course.progress}%</p>
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 text-xs leading-none py-1 text-center text-white"
                  style={{ width: `${course.progress}%` }}
                >
                  {course.progress}%
                </div>
              </div>
            </div>

            <Link
              to={`/courses/${course.id}`}
              className="block text-blue-600 hover:text-blue-800 mt-4"
            >
              View Details
            </Link>

            <button
              onClick={() => toggleCompletion(course.id)}
              className={`mt-4 py-2 px-6 rounded-lg w-full text-white ${course.completed ? "bg-green-500" : "bg-blue-500"}`}
            >
              {course.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Courses;
