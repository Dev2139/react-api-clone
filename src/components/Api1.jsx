import React, { useState, useEffect } from "react";

function Api1() {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState("");
  const [randomMeal, setRandomMeal] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryMeals, setCategoryMeals] = useState([]);

  const fetchMeal = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeal(data.meals[0]);
        setError("");
      } else {
        setMeal(null);
        setError("No meal found. Please try a different name.");
      }
    } catch (err) {
      setError("An error occurred while fetching meal details.");
    }
  };

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setRandomMeal(data.meals[0]);
    } catch (err) {
      setError("An error occurred while fetching a random meal.");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setCategories(data.categories);
    } catch (err) {
      setError("An error occurred while fetching categories.");
    }
  };

  const fetchCategoryMeals = async (category) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setCategoryMeals(data.meals);
    } catch (err) {
      setError("An error occurred while fetching meals by category.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryMeals(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar for Categories */}
      <div className="w-1/4 bg-blue-100 p-6 shadow-md">
        <h2 className="text-xl font-bold text-blue-700 mb-6">Meal Categories</h2>
        <div>
          {categories.map((category) => (
            <div key={category.idCategory} className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category.strCategory}
                  className="mr-3 h-5 w-5 text-blue-600"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <span className="text-gray-800 font-medium">{category.strCategory}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8">Find Your Favorite Meal</h1>

        {/* Search Meal */}
        <div className="mb-6 flex items-center">
          <input
            type="text"
            placeholder="Search for a meal..."
            className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={fetchMeal}
            className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Display Meal Details */}
        {meal && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{meal.strMeal}</h2>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-64 h-64 object-cover rounded my-4 mx-auto"
            />
            <p className="text-gray-700">
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p className="text-gray-700">
              <strong>Cuisine:</strong> {meal.strArea}
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Instructions:</strong> {meal.strInstructions}
            </p>
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        )}

        {/* Error Messages */}
        {error && <p className="text-red-600 font-semibold mt-4">{error}</p>}

        {/* Random Meal Generator */}
        <div className="mt-10">
          <button
            onClick={fetchRandomMeal}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600"
          >
            Get Random Meal
          </button>
          {randomMeal && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800">{randomMeal.strMeal}</h2>
              <img
                src={randomMeal.strMealThumb}
                alt={randomMeal.strMeal}
                className="w-64 h-64 object-cover rounded my-4 mx-auto"
              />
              {randomMeal.strYoutube && (
                <a
                  href={randomMeal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700"
                >
                  Watch on YouTube
                </a>
              )}
            </div>
          )}
        </div>

       
        <div className="mt-10">
          
          <div className="grid grid-cols-2 gap-6">
            {categoryMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="p-4 bg-white rounded-lg shadow flex flex-col items-center"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-40 h-40 object-cover rounded"
                />
                <p className="mt-2 text-gray-800 font-medium text-center">
                  {meal.strMeal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api1;
