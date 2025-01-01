// src/pages/CourseDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams(); // Get the dynamic course ID
  const navigate = useNavigate(); // For back navigation

  const [progress, setProgress] = useState(0);
  const [topicsStatus, setTopicsStatus] = useState({}); // To track checkbox statuses

  // List of all courses with YouTube links and expanded details
  const courses = {
    1: {
      title: "React for Beginners",
      logo: "https://via.placeholder.com/100",
      subheading: "Master React.js fundamentals",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      description: "Learn the basics of React.js and build dynamic web applications.",
      topics: [
        "Introduction to React: Understand what React is and why it's used.",
        "JSX and Rendering: Learn the syntax and how React renders content.",
        "State and Props: Manage data and communication between components.",
        "Hooks Overview: Explore built-in hooks like useState and useEffect.",
        "React Router Basics: Implement navigation in your applications.",
        "Component Lifecycle: Understand the lifecycle methods in React.",
      ],
    },
    // Add other courses here
  };

  const course = courses[id];

  useEffect(() => {
    if (course) {
      const initialStatus = course.topics.reduce((acc, topic, index) => {
        acc[index] = false; // All topics initially unchecked
        return acc;
      }, {});
      setTopicsStatus(initialStatus);
    }
  }, [id]);

  useEffect(() => {
    if (course) {
      const totalTopics = course.topics.length;
      const completedTopics = Object.values(topicsStatus).filter((status) => status).length;
      setProgress((completedTopics / totalTopics) * 100);
    }
  }, [topicsStatus, course]);

  const handleCheckboxChange = (index) => {
    setTopicsStatus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const markCompleted = () => {
    const allCompleted = course.topics.reduce((acc, topic, index) => {
      acc[index] = true;
      return acc;
    }, {});
    setTopicsStatus(allCompleted);
    setProgress(100);
  };

  return (
    <div className="p-6 bg-gray-50">
      {course ? (
        <>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
          >
            Back
          </button>

          <img src={course.logo} alt={`${course.title} logo`} className="mb-4 w-24 h-24" />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{course.subheading}</h2>

          {/* Video Section */}
          <div className="mb-6">
            <iframe
              width="100%"
              height="315"
              src={course.video}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-lg text-gray-600 mb-6">{course.description}</p>

          {/* Expandable Topics */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Course Topics</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {course.topics.map((topic, index) => (
                <li key={index} className="mb-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={topicsStatus[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                      className="mr-2"
                    />
                    {topic}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress and Mark Completed Button */}
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Progress: {progress.toFixed(2)}%</p>
            <button
              onClick={markCompleted}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Mark Completed
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-500">Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetail;
