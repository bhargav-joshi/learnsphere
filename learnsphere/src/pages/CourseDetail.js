// src/pages/CourseDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Placeholder for course data
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course data based on courseId (this can come from an API or be hardcoded)
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const selectedCourse = courses.find(course => course.id === parseInt(courseId));
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      navigate("/courses");  // Redirect to courses if no course is found
    }
  }, [courseId, navigate]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {course ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{course.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{course.description}</p>
          <h3 className="text-xl font-semibold mb-2">Course Structure:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {course.structure.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/courses")}
            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg w-full shadow-md hover:bg-blue-400"
          >
            Back to Courses
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CourseDetail;
