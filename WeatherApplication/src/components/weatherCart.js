import React, { useState } from "react";
import Weather from "./weatherData";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    if (searchText) {
      fetch("http://localhost:5550/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchText }),
      })
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
    }
  };

  return (
    <>
      <div className="bodyEl">
        <div className="searchContainer">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="searchbox"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="allCart">
          {searchText === "" ? (
            <p>Enter a location above to check the weather.</p>
          ) : weatherData ? (
            <Weather location={searchText} weatherData={weatherData} />
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
