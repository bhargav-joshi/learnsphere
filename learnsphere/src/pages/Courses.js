// src/pages/Courses.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  // List of all courses with the same details as in CourseDetail.js
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React.js and build dynamic web applications.",
      iconClass: "fab fa-react", // FontAwesome icon class for React
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts including closures and promises.",
      iconClass: "fab fa-js-square", // FontAwesome icon class for JavaScript
    },
    {
      id: 3,
      title: "Vue.js Crash Course",
      description: "Learn Vue.js from scratch and build interactive front-end applications.",
      iconClass: "fab fa-vuejs", // FontAwesome icon class for Vue.js
    },
    {
      id: 4,
      title: "Node.js Essentials",
      description: "Get started with server-side JavaScript using Node.js.",
      iconClass: "fab fa-node", // FontAwesome icon class for Node.js
    },
    {
      id: 5,
      title: "TypeScript Basics",
      description: "Learn TypeScript and how it improves JavaScript development.",
      iconClass: "fab fa-github", // FontAwesome icon class for GitHub (placeholder)
    },
    {
      id: 6,
      title: "Introduction to Angular",
      description: "Dive into Angular and build scalable front-end applications.",
      iconClass: "fab fa-angular", // FontAwesome icon class for Angular
    },
    {
      id: 7,
      title: "Python for Data Science",
      description: "Learn Python programming and how it's used in data science.",
      iconClass: "fab fa-python", // FontAwesome icon class for Python
    },
    {
      id: 8,
      title: "Machine Learning Fundamentals",
      description: "Understand the basics of machine learning and how to apply them.",
      iconClass: "fas fa-cogs", // FontAwesome icon class for Machine Learning
    },
    {
      id: 9,
      title: "Docker and Containers",
      description: "Master Docker to create isolated environments for your applications.",
      iconClass: "fab fa-docker", // FontAwesome icon class for Docker
    },
    {
      id: 10,
      title: "Introduction to SQL",
      description: "Learn the fundamentals of SQL for managing databases.",
      iconClass: "fas fa-database", // FontAwesome icon class for SQL
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50">
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

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Course Icon */}
            <i className={`${course.iconClass} text-3xl mb-4`} />

            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{course.description}</p>

            <Link
              to={`/courses/${course.id}`}
              className="block text-blue-600 hover:text-blue-800 mt-4"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
