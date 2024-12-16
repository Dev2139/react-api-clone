import React, { useState, useEffect } from "react";

function Api2() {
  const [search, setSearch] = useState("");
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState("");
  const [randomDrink, setRandomDrink] = useState(null);

  const fetchDrink = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      if (data.drinks) {
        setDrink(data.drinks[0]);
        setError("");
      } else {
        setDrink(null);
        setError("No such Drink available here. Please do try another search.");
      }
    } catch (err) {
      setError("An error occurred while fetching drink details.");
    }
  };

  const fetchRandomDrink = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setRandomDrink(data.drinks[0])
    } catch (err) {
      setError("An error occurred while fetching a random drink.");
    }
  };

  return (
    <div className="w-3/4 p-8 flex flex-col bg-blue-400 rounded-lg justify-self-center">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-8">Find Your Drink Here.</h1>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search for a Drink..."
          className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={fetchDrink}
          className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {drink && (
        <div className="mt-6 p-6 bg-blue-200 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800">{drink.strDrink}</h2>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="w-64 h-64 object-cover rounded my-4 mx-auto"
          />
          <p className="text-gray-700">
            <strong>Category:</strong> {drink.strCategory}
          </p>
          <p className="text-gray-700">
            <strong>Glass Type:</strong> {drink.strGlass}
          </p>
          <p className="text-gray-700">
            <strong>Drink id:</strong> {drink.idDrink}
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Instructions:</strong> {drink.strInstructions}
          </p>
          
        </div>
      )}

      {error && <p className="text-red-600 font-bold mt-4 text-[24px]">{error}</p>}

      <div className="mt-10">
        <button
          onClick={fetchRandomDrink}
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600"
        >
          Get Random Drink
        </button>
        {randomDrink && (
          <div className="mt-6 p-6 bg-blue-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{randomDrink.strDrink}</h2>
            <img
              src={randomDrink.strDrinkThumb}
              alt={randomDrink.strDrink}
              className="w-64 h-64 object-cover rounded my-4 mx-auto"
            />
            <p className="text-gray-700 mt-4">
              <strong>Category:</strong> {randomDrink.strCategory}
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Drink id:</strong> {randomDrink.idDrink}
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Instructions:</strong> {randomDrink.strInstructions}
            </p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Api2;
