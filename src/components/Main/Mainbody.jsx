import React, { useContext } from "react";
import "./MainBody.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherContext from "./context/WeatherContext";

const Mainbody = ({ dark }) => {
  const { currentWeather, hourlyForecast, dailyForecast } =
    useContext(WeatherContext);
  return (
    <div
      style={{ background: `${dark ? "#c4c9c9" : "#151414"}` }}
      className="Mainbody"
    >
      <div className="mainBodyWrapper">
        <CurrentWeather data={currentWeather} />
        <Forecast
          title="HOURLY FORECAST"
          type="hourly"
          data={hourlyForecast}
        />
        <Forecast
          title="21 DAYS FORECAST"
          type="daily"
          data={dailyForecast}
        />
      </div>
    </div>
  );
};

export default Mainbody;
