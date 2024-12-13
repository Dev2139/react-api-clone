// import React, { useState } from "react";

// function Api1() {
//   const [search, setSearch] = useState(""); // Store the search query
//   const [meal, setMeal] = useState(null); 
//   const [error, setError] = useState("");

//   // Function to fetch meal details
//   const fetchMeal = async () => {
//     try {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//       );
//       const data = await response.json();
//       if (data.meals) {
//         setMeal(data.meals[0]); 
//         setError("");
//       } else {
//         setMeal(null);
//         setError("No meal found. Please try a different name.");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching meal details.");
//     }
//   };

//   return (
//     <div className="mt-10 text-center">
//       <h1 className="text-2xl font-bold mb-4">Search What do you Want to eat</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Enter meal name..."
//           className="border rounded px-4 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-300"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button
//           onClick={fetchMeal}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </div>

//       {error && <p className="text-red-500">{error}</p>}

//       {meal && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
//           <img
//             src={meal.strMealThumb}
//             alt={meal.strMeal}
//             className="w-64 h-64 object-cover mx-auto my-4 rounded"
//           />
//           <p className="text-gray-700">
//             <strong>Category:</strong> {meal.strCategory}
//           </p>
//           <p className="text-gray-700">
//             <strong>Cuisine:</strong> {meal.strArea}
//           </p>
//           <p className="text-gray-700 mt-4">
//             <strong>Instructions:</strong> {meal.strInstructions}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Api1;


import React, { useState, useEffect } from "react";

function Api1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/endpoint1") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">API 1 Data</h1>
      {data ? (
        <pre className="mt-4 p-4 bg-gray-100 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p className="mt-4 text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default Api1;

