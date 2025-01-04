// src/pages/CourseDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams(); // Get the dynamic course ID
  const [progress, setProgress] = useState(0);
  const [topicsStatus, setTopicsStatus] = useState({}); // To track checkbox statuses

  // List of all courses with YouTube links and expanded details
  const courses = {
    1: {
      title: "React for Beginners",
      iconClass: "fab fa-react", // FontAwesome icon class for React
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
    2: {
      title: "Advanced JavaScript",
      iconClass: "fab fa-js-square", // FontAwesome icon class for JavaScript
      subheading: "Master advanced JavaScript concepts",
      video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      description: "Master advanced JavaScript concepts including closures and promises.",
      topics: [
        "Closures: Understand the closure concept and its use cases.",
        "Promises: Learn how to handle asynchronous operations using promises.",
        "Async/Await: Improve readability of asynchronous code with async/await.",
        "JavaScript Design Patterns: Learn various design patterns for JavaScript.",
        "Event Loop: Understand the event loop mechanism in JavaScript.",
      ],
    },
    3: {
      title: "Vue.js Crash Course",
      iconClass: "fab fa-vuejs", // FontAwesome icon class for Vue.js
      subheading: "Learn Vue.js from scratch",
      video: "https://www.youtube.com/embed/FXpIoQ_rT7s",
      description: "Learn Vue.js from scratch and build interactive front-end applications.",
      topics: [
        "Introduction to Vue.js: Understand what Vue.js is and its core concepts.",
        "Vue Components: Learn how to create reusable components in Vue.",
        "Vue Directives: Explore directives like v-bind, v-for, and v-if.",
        "Vue Router: Learn how to handle navigation within Vue applications.",
        "Vuex for State Management: Understand state management in Vue.js with Vuex.",
      ],
    },
    4: {
      title: "Node.js Essentials",
      iconClass: "fab fa-node", // FontAwesome icon class for Node.js
      subheading: "Get started with server-side JavaScript",
      video: "https://www.youtube.com/embed/fBNz5xF6b5Y",
      description: "Get started with server-side JavaScript using Node.js.",
      topics: [
        "Introduction to Node.js: Understand the basics of Node.js and its environment.",
        "Express.js Framework: Learn how to build web applications with Express.",
        "Asynchronous Programming: Understand async/await and callbacks in Node.js.",
        "REST APIs: Learn how to build and consume RESTful APIs in Node.js.",
        "Node.js with Databases: Integrate Node.js with MongoDB and SQL databases.",
      ],
    },
    5: {
      title: "TypeScript Basics",
      iconClass: "fab fa-github", // FontAwesome icon class for GitHub (placeholder)
      subheading: "Learn TypeScript and enhance JavaScript development",
      video: "https://www.youtube.com/embed/BwuLxPH8IDs",
      description: "Learn TypeScript and how it improves JavaScript development.",
      topics: [
        "Introduction to TypeScript: Understand the basics and advantages of TypeScript.",
        "TypeScript Types: Learn about primitive and complex types in TypeScript.",
        "Interfaces and Classes: Understand object-oriented programming with TypeScript.",
        "Generics: Learn how to create reusable code using generics in TypeScript.",
        "TypeScript with React: Integrate TypeScript with React for better development.",
      ],
    },
    6: {
      title: "Introduction to Angular",
      iconClass: "fab fa-angular", // FontAwesome icon class for Angular
      subheading: "Learn the basics of Angular framework",
      video: "https://www.youtube.com/embed/htPYk6QxacQ",
      description: "Dive into Angular and build scalable front-end applications.",
      topics: [
        "Getting Started with Angular: Set up your development environment for Angular.",
        "Angular Components: Learn how to create and use Angular components.",
        "Directives and Pipes: Understand how to use Angular directives and pipes.",
        "Services and Dependency Injection: Learn how Angular handles services.",
        "Routing and Navigation: Implement navigation within Angular applications.",
      ],
    },
    7: {
      title: "Python for Data Science",
      iconClass: "fab fa-python", // FontAwesome icon class for Python
      subheading: "Learn Python for data analysis and machine learning",
      video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      description: "Learn Python for data analysis and machine learning applications.",
      topics: [
        "Introduction to Python: Set up your environment and understand Python basics.",
        "Data Structures in Python: Learn about lists, tuples, and dictionaries.",
        "Pandas for Data Analysis: Explore data manipulation using Pandas.",
        "NumPy for Numerical Computations: Use NumPy for array operations and linear algebra.",
        "Introduction to Machine Learning: Learn how to build simple models in Python.",
      ],
    },
    8: {
      title: "Web Development with Django",
      iconClass: "fab fa-django", // FontAwesome icon class for Django
      subheading: "Learn Django for building web applications",
      video: "https://www.youtube.com/embed/F5mRW0jo-U4",
      description: "Build powerful web applications using the Django framework.",
      topics: [
        "Getting Started with Django: Set up a Django project and understand its architecture.",
        "Django Models and Views: Learn about models, views, and templates in Django.",
        "Django Forms and Validation: Handle forms and validation in Django.",
        "Django Authentication: Implement authentication and authorization in Django.",
        "Deploying Django Applications: Learn how to deploy Django apps to production.",
      ],
    },
    9: {
      title: "Introduction to SQL",
      iconClass: "fas fa-database", // FontAwesome icon class for SQL
      subheading: "Learn SQL for database management",
      video: "https://www.youtube.com/embed/HXV3zeQKqGY",
      description: "Master SQL and understand relational database concepts.",
      topics: [
        "Introduction to SQL: Learn the basics of SQL and relational databases.",
        "SELECT Statements: Understand how to retrieve data using SELECT queries.",
        "JOIN Operations: Learn how to combine data from multiple tables with JOINs.",
        "Subqueries and Aggregation: Master subqueries and aggregation functions in SQL.",
        "SQL Database Design: Understand normalization and how to design efficient databases.",
      ],
    },
    10: {
      title: "Machine Learning with Python",
      iconClass: "fas fa-brain", // FontAwesome icon class for Machine Learning
      subheading: "Understand the fundamentals of machine learning",
      video: "https://www.youtube.com/embed/7eh4d6sabA0",
      description: "Learn the fundamentals of machine learning using Python.",
      topics: [
        "Introduction to Machine Learning: Understand the basics of machine learning algorithms.",
        "Supervised Learning: Learn about regression and classification algorithms.",
        "Unsupervised Learning: Understand clustering and dimensionality reduction.",
        "Model Evaluation: Learn how to evaluate machine learning models.",
        "Deep Learning: Dive into neural networks and deep learning algorithms.",
      ],
    },
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

          {/* Course Icon */}
          <i className={`${course.iconClass} text-4xl mb-4`} />

          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <h2 className="text-xl text-gray-700 mb-2">{course.subheading}</h2>
          <iframe
            title="Course Video"
            width="100%"
            height="400"
            src={course.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-lg mt-4">{course.description}</p>

          {/* Course Topics */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Topics</h3>
            <ul className="list-disc pl-6">
              {course.topics.map((topic, index) => (
                <li key={index} className="mb-2">
                  <input
                    type="checkbox"
                    checked={topicsStatus[index]}
                    onChange={() => handleCheckboxChange(index)}
                    className="mr-2"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2">{progress}% completed</p>
          </div>

          {/* Mark as Completed Button */}
          <div className="mt-6">
            <button
              onClick={markCompleted}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Mark All as Completed
            </button>
          </div>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};

export default CourseDetail;
