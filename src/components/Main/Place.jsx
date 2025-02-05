import React, { useContext } from "react";
import "./MainHeader.css";
import { GoLocation } from "react-icons/go";
import WeatherContext from "./context/WeatherContext";

const Place = ({ dark }) => {
  const { place } = useContext(WeatherContext);
  console.log(place);
  return (
    <div className="Place">
      <GoLocation size={22} />
      <p>
        <span style={{ fontWeight: "700" }}>{place.name}</span>, {place.country}
      </p>
    </div>
  );
};

export default Place;
