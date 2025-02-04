import React from "react";
import "./Forecast.css";
import HourlyForecast from "./Forecast/HourlyForecast";
import DailyForecast from "./Forecast/DailyForecast";
import Scroll from "./Forecast/Scroll";

const Forecast = ({ title, data, type }) => {
  return (
    <div className="Forecast">
      <h4>{title}</h4>
      <Scroll className="hold-weather-widget">
        {data.map((e) => (
          <>
            {type === "hourly" ? (
              <HourlyForecast key={e.date} data={e} />
            ) : (
              <DailyForecast key={e.day} data={e} />
            )}
          </>
        ))}
      </Scroll>
    </div>
  );
};

export default Forecast;
