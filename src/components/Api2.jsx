import React, { useState, useEffect } from "react";

function Api2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/endpoint1") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">API 2 Data</h1>
      {data ? (
        <pre className="mt-4 p-4 bg-gray-100 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p className="mt-4 text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default Api2;
