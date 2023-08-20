import React from "react";

const Weather = ({ location, weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      <div className="cart">
        <p className="location">
          <span>Location:</span> {location}
        </p>
        {weatherData ? (
          <>
            <p className="weatherCondn">
              <span>Weather Condition:</span>{" "}
              {weatherData.weather[0]?.description || "N/A"}
            </p>
            <p className="temp">
              <span>Temp:</span>{" "}
              {weatherData.main?.temp
                ? `${Number((weatherData.main.temp - 273.15).toFixed(2))} °C`
                : "N/A"}
            </p>
            <p className="humidity">
              <span>Humidity:</span> {weatherData.main?.humidity || "N/A"}%
            </p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
