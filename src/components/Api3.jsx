import React, { useState, useEffect } from "react";

function Api3() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (category) => {
    try {
      let url = "";
      if (category === "Characters") url = "https://potterapi-fedeperin.vercel.app/en/characters";
      else if (category === "Books") url = "https://potterapi-fedeperin.vercel.app/en/books";
      else if (category === "Spells") url = "https://potterapi-fedeperin.vercel.app/en/spells";
      else if (category === "Houses") url = "https://potterapi-fedeperin.vercel.app/en/houses";

      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
      setError("");
    } catch (err) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white font-sans">
      <div className="max-w-4xl w-full bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-all duration-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-white tracking-wider">
          ⚡ Harry Potter API Data
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {["Characters", "Books", "Spells", "Houses"].map((category) => (
            <button
              key={category}
              className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading && (
          <p className="text-center mt-6 text-white animate-pulse">
            🔄 Fetching data...
          </p>
        )}

        {error && (
          <p className="text-center mt-6 text-red-400 font-semibold">{error}</p>
        )}

        {selectedCategory && (
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">
            Showing Data for {selectedCategory}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-md"
              >
                {selectedCategory === "Characters" && (
                  <div className="text-white font-semibold text-center">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-40 object-cover rounded-lg mx-auto mb-4"
                      />
                    )}
                    <p>{item.name}</p>
                    <p>FullName: {item.fullName}</p>
                    <p>NickName: {item.nickname}</p>
                    <p>House: {item.hogwartsHouse}</p>
                    <p>Original Name: {item.interpretedBy}</p>
                    <p>D.O.B: {item.birthdate}</p>
                  </div>
                )}

                {selectedCategory === "Books" && (
                  <div className="text-white font-semibold text-center">
                    {item.cover ? (
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-40 h-40 object-cover rounded mx-auto mb-4"
                      />
                    ) : (
                      <p>No cover available</p>
                    )}
                    <p>{item.title}</p>
                    <p>Author: {item.author}</p>
                    <p>Release Year: {item.releaseDate}</p>
                  </div>
                )}

                {selectedCategory === "Spells" && (
                  <div className="text-white font-bold text-center">
                    <p>Spell: {item.spell}</p>
                    <p>Usage: {item.use}</p>
                  </div>
                )}

                {selectedCategory === "Houses" && (
                  <div className="text-white font-bold text-center">
                    <p>House: {item.house}</p>
                    <p>Emoji: {item.emoji}</p>
                    <p>Founder: {item.founder}</p>
                    <p>Colors: {item.colors && item.colors.join(", ")}</p>
                    <p>Animal: {item.animal}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-white text-center">No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Api3;
