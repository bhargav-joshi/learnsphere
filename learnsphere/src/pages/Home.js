import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to LearnSphere</h1>
          <p className="mt-4 text-lg">A platform to learn, grow, and collaborate in the world of technology</p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Interactive Learning</h3>
              <p className="mt-4">Learn through engaging and interactive tutorials and resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Community Collaboration</h3>
              <p className="mt-4">Join a community of like-minded learners and professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="mt-4">Get expert advice and mentorship from industry leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LearnSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
