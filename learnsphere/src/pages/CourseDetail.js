import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams(); // Get the dynamic course ID
  const [progress, setProgress] = useState(0);
  const [topicsStatus, setTopicsStatus] = useState({}); // To track checkbox statuses
  const [rating, setRating] = useState(0); // For rating feature
  const [comment, setComment] = useState(""); // For adding comments
  const [comments, setComments] = useState([]); // Store the list of comments

  // List of all courses with YouTube links and expanded details
  const courses = {
    1: {
      title: "React for Beginners",
      iconClass: "fab fa-react",
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
      instructor: {
        name: "John Doe",
        bio: "John is a senior front-end developer with over 10 years of experience in building web applications.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-01",
    },
    2: {
      title: "Advanced JavaScript",
      iconClass: "fab fa-js-square",
      subheading: "Master advanced JavaScript concepts",
      video: "https://www.youtube.com/embed/hdI2bqOjy3c",
      description: "Dive into advanced JavaScript topics such as closures, promises, async/await, and ES6 features.",
      topics: [
        "Understanding Closures: Learn how closures work in JavaScript.",
        "Promises and Async/Await: Handle asynchronous code effectively.",
        "Destructuring and Spread Operator: Use ES6 features to simplify code.",
        "Object-Oriented JavaScript: Implement OOP principles in JavaScript.",
        "Event Loop: Explore JavaScript's event-driven architecture.",
        "Modules in JavaScript: Understand ES6 modules and import/export.",
      ],
      instructor: {
        name: "Alice Johnson",
        bio: "Alice is a full-stack developer specializing in modern JavaScript frameworks and tools.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-03",
    },
    3: {
      title: "Vue.js Crash Course",
      iconClass: "fab fa-vuejs",
      subheading: "Get started with Vue.js",
      video: "https://www.youtube.com/embed/9zO2eIhQXPw",
      description: "Learn the core concepts of Vue.js to build interactive user interfaces.",
      topics: [
        "Introduction to Vue.js: Understand what Vue.js is and why it's popular.",
        "Vue.js Directives: Explore v-for, v-if, v-bind, and more.",
        "Components in Vue.js: Build reusable UI components.",
        "Handling State with Vuex: Manage state in larger applications.",
        "Event Handling and Forms: Learn about form validation and event handling.",
        "Vue Router: Implement routing in Vue.js applications.",
      ],
      instructor: {
        name: "Mark Lee",
        bio: "Mark is a front-end developer with expertise in Vue.js and web performance optimization.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-04",
    },
    4: {
      title: "Node.js Essentials",
      iconClass: "fab fa-node-js",
      subheading: "Master server-side development with Node.js",
      video: "https://www.youtube.com/embed/0zJ2D1H9rLw",
      description: "Learn how to build scalable and efficient server-side applications using Node.js.",
      topics: [
        "Introduction to Node.js: Understand the basics of Node.js.",
        "Working with Modules: Learn about Node.js modules and packages.",
        "Building REST APIs: Create RESTful APIs with Express.js.",
        "Middleware and Authentication: Secure your Node.js apps.",
        "Using Databases: Connect to MongoDB and handle data operations.",
        "Error Handling: Handle errors gracefully in Node.js applications.",
      ],
      instructor: {
        name: "Sarah Brown",
        bio: "Sarah is a back-end developer with years of experience in Node.js and server-side frameworks.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-05",
    },
    5: {
      title: "TypeScript Basics",
      iconClass: "fab fa-typescript",
      subheading: "Learn the fundamentals of TypeScript",
      video: "https://www.youtube.com/embed/0zJ2D1H9rLw",
      description: "Discover how TypeScript enhances JavaScript with static types and compile-time checks.",
      topics: [
        "Introduction to TypeScript: Learn why TypeScript is valuable.",
        "Types and Type Inference: Understand types and type safety.",
        "Classes and Interfaces: Build reusable object-oriented components.",
        "TypeScript Generics: Create reusable and flexible components.",
        "Working with DOM and Events: Integrate TypeScript with the DOM.",
        "Compiling and Running TypeScript: Understand the build process.",
      ],
      instructor: {
        name: "Emily Davis",
        bio: "Emily is a software engineer with a focus on TypeScript and Type-based development.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-06",
    },
    6: {
      title: "Master in Angular",
      iconClass: "fab fa-angular",
      subheading: "Become proficient in Angular development",
      video: "https://www.youtube.com/embed/0zJ2D1H9rLw",
      description: "Learn how to build dynamic and reactive web applications using Angular.",
      topics: [
        "Angular Basics: Get started with Angular and understand components.",
        "Data Binding: Explore two-way data binding and event binding.",
        "Directives and Pipes: Learn about structural directives and pipes.",
        "Services and Dependency Injection: Use services and dependency injection.",
        "Routing in Angular: Implement navigation and routes.",
        "Reactive Forms: Build forms with reactive programming in Angular.",
      ],
      instructor: {
        name: "David Wilson",
        bio: "David is an Angular expert with experience in building large-scale applications.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-07",
    },
    7: {
      title: "Python for Data Science",
      iconClass: "fab fa-python",
      subheading: "Learn Python for data analysis and machine learning",
      video: "https://www.youtube.com/embed/rfscVS0vtbw",
      description: "Understand Python's role in data science and machine learning.",
      topics: [
        "Introduction to Python: Learn syntax, variables, and data types.",
        "NumPy and Pandas: Work with arrays and data structures.",
        "Data Visualization: Create charts and graphs with Matplotlib and Seaborn.",
        "Machine Learning: Get started with machine learning models.",
        "Statistics with Python: Learn about data analysis and statistical tests.",
        "Working with APIs: Interact with APIs and web services.",
      ],
      instructor: {
        name: "Laura Martin",
        bio: "Laura is a data scientist specializing in Python and machine learning.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-08",
    },
    8: {
      title: "Machine Learning Fundamentals",
      iconClass: "fas fa-robot",
      subheading: "Understand the fundamentals of machine learning",
      video: "https://www.youtube.com/embed/TNz4gxV1QzE",
      description: "Learn about algorithms, models, and data preparation for machine learning.",
      topics: [
        "Introduction to Machine Learning: Learn the basics and types of ML.",
        "Supervised vs. Unsupervised Learning: Explore classification, regression, clustering.",
        "Model Training and Evaluation: Understand bias, variance, and cross-validation.",
        "Overfitting and Underfitting: Learn how to prevent model overfitting.",
        "K-Nearest Neighbors (KNN): Understand KNN algorithm and its applications.",
        "Decision Trees and Random Forests: Build decision trees and ensemble methods.",
      ],
      instructor: {
        name: "James Scott",
        bio: "James is a machine learning engineer with expertise in AI and algorithm design.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-09",
    },
    9: {
      title: "Docker and Containers",
      iconClass: "fab fa-docker",
      subheading: "Master containerization with Docker",
      video: "https://www.youtube.com/embed/TNz4gxV1QzE",
      description: "Learn Docker fundamentals and how to build containers.",
      topics: [
        "Docker Basics: Learn the fundamentals of Docker containers.",
        "Building Docker Images: Create custom Docker images.",
        "Docker Networking: Understand how networking works in Docker.",
        "Managing Containers: Learn how to manage and deploy containers.",
        "Docker Compose: Use Docker Compose to manage multi-container applications.",
        "Docker Best Practices: Follow best practices for creating production-ready containers.",
      ],
      instructor: {
        name: "Lucas Green",
        bio: "Lucas is a DevOps engineer with deep experience in containerization and automation.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-10",
    },
    10: {
      title: "Introduction to SQL",
      iconClass: "fas fa-database",
      subheading: "Learn SQL for database management",
      video: "https://www.youtube.com/embed/TNz4gxV1QzE",
      description: "Understand SQL basics and how to interact with relational databases.",
      topics: [
        "SQL Overview: Learn the basic structure and syntax of SQL.",
        "CRUD Operations: Perform Create, Read, Update, and Delete operations.",
        "Joins and Subqueries: Master joins, inner/outer queries, and subqueries.",
        "Aggregation: Use aggregate functions to summarize data.",
        "Indexes and Performance: Learn how to optimize queries with indexes.",
        "Database Normalization: Understand the importance of data normalization.",
      ],
      instructor: {
        name: "John Doe",
        bio: "John is a database expert with years of experience working with SQL databases.",
        profilePic: "https://via.placeholder.com/150",
      },
      lastUpdated: "2024-01-11",
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

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentSubmit = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment(""); // Clear comment input after submission
    }
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

          {/* Instructor Information */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Instructor</h3>
            <div className="flex items-center">
              <img
                src={course.instructor.profilePic}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{course.instructor.name}</h4>
                <p className="text-gray-700">{course.instructor.bio}</p>
              </div>
            </div>
          </div>

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

          {/* Rating Feature */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Rate this Course</h3>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mt-2">Your rating: {rating}</p>
          </div>

          {/* Comment Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Leave a Comment</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Add a comment..."
            ></textarea>
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Comment
            </button>
            <div className="mt-4">
              <h4 className="font-semibold">Comments</h4>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index} className="mb-2">{comment}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Share this Course</h3>
            <div>
              <button className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Facebook</button>
              <button className="mr-2 p-2 bg-blue-400 text-white rounded hover:bg-blue-500">Twitter</button>
              <button className="mr-2 p-2 bg-gray-700 text-white rounded hover:bg-gray-800">LinkedIn</button>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-6 text-gray-500">
            <p>Last Updated: {course.lastUpdated}</p>
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
