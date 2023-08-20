import React from "react";
import Weather from "./weatherData";

const Cart = ({ location, weatherData }) => (
  <div className="cart">
    <Weather location={location} weatherData={weatherData} />
  </div>
);

export default Cart;
