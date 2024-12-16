import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-blue-400 text-gray-800 dark:text-gray-200">
      {/* Header Section with Parallax */}
      <header
        className="relative text-center py-16 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1600x900?technology,code')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to Dev Patel's API Hub
        </h1>
        <p className="relative text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Discover a variety of APIs ranging from meals, cocktails, banking info,
          and magical world data at your fingertips!
        </p>
      </header>

      {/* About Us Section */}
      <section className="px-6 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We provide robust APIs that cover a wide range of topics. Whether
            you're looking for recipes, Bank data, refreshing cocktails, or
            diving into the magical world of Harry Potter, we've got you covered.
            Integrate these APIs seamlessly into your applications and enhance
            your user experience.
          </p>
        </div>
      </section>

      {/* API Cards Section */}
      <section className="px-6 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Meals API Card */}
          <Link
            to="/api1" // Add the route you want to navigate to
            className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Meals API</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore a variety of meals with recipes, ingredients, and cooking
              instructions.
            </p>
          </Link>

          {/* Banks API Card */}
          <Link
            to="/api2" // Add the route you want to navigate to
            className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-4">Banks API</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get detailed information about various banks and financial
              services.
            </p>
          </Link>

          {/* Cocktails API Card */}
          <Link
            to="/api3" // Add the route you want to navigate to
            className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Cocktails API</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Find delicious cocktail recipes and drink instructions for every
              occasion.
            </p>
          </Link>

          {/* Harry Potter API Card */}
          <Link
            to="/api4" // Add the route you want to navigate to
            className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Harry Potter API</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore Harry Potter characters, spells, houses, and magical data
              from the wizarding world.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-6 bg-gray-800 text-gray-200">
        <p>
          &copy; {new Date().getFullYear()} Dev Patel's API Hub | Created with ❤️
          & react 😅
        </p>
      </footer>
    </div>
  );
}

export default AboutUs;
