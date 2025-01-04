import React from 'react';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-600 text-white text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to LearnSphere
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto">
            A platform designed to help you learn, grow, and collaborate with top-notch resources and mentors in the tech world.
          </p>
        
          <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all ease-in-out transform hover:scale-105">
            <Link to="/courses" className="w-full h-full text-white block">Get Started</Link>
          </button>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At LearnSphere, we believe in empowering individuals through accessible and effective education. Our mission is to create an interactive learning platform that connects learners with experienced mentors and an engaging community. Whether you're just starting your journey in tech or looking to deepen your skills, LearnSphere is here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Key Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the innovative features that make LearnSphere stand out.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Interactive Learning</h3>
              <p className="mt-4 text-gray-600">
                Engage with interactive tutorials, quizzes, and projects to solidify your knowledge.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Community Collaboration</h3>
              <p className="mt-4 text-gray-600">
                Connect with a community of learners and tech professionals to share ideas and grow together.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Expert Guidance</h3>
              <p className="mt-4 text-gray-600">
                Get personalized mentorship from industry experts to accelerate your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">What Our Users Say</h2>
          <div className="mt-8 flex justify-center space-x-12">
            <div className="w-1/3 bg-teal-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-200">
                "LearnSphere has helped me tremendously in leveling up my coding skills. The interactive tutorials and supportive community are amazing!"
              </p>
              <div className="mt-4 text-lg font-semibold">- Rajesh K.</div>
            </div>
            <div className="w-1/3 bg-teal-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-200">
                "The mentorship I received through LearnSphere was game-changing. I now have the confidence to tackle more complex projects."
              </p>
              <div className="mt-4 text-lg font-semibold">- Priya S.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold">Join Us Today</h2>
          <p className="mt-4 text-lg">Be part of our growing community and start your journey towards mastering the world of technology.</p>
          <button className="mt-8 px-8 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-500 transition-all ease-in-out">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Featured Courses</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our top-rated courses to get started with your learning journey.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Course 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">JavaScript for Beginners</h3>
              <p className="mt-4 text-gray-600">A beginner-friendly course to master JavaScript and build interactive web applications.</p>
            </div>
            {/* Course 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Advanced React</h3>
              <p className="mt-4 text-gray-600">Take your React skills to the next level by learning advanced patterns and state management techniques.</p>
            </div>
            {/* Course 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Python for Data Science</h3>
              <p className="mt-4 text-gray-600">Learn Python and its applications in Data Science to analyze and visualize complex datasets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">Our team of experts is dedicated to providing the best learning experience.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl text-teal-600 mb-4 mx-auto">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Bhargav</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl text-teal-600 mb-4 mx-auto">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Anirudha</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl text-teal-600 mb-4 mx-auto">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Prateik</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-12 text-center">
        <p>&copy; 2025 LearnSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
