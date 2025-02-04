import React, { useEffect, useState } from "react";
import "./DForecast.css";
import { IoPaperPlaneOutline } from "react-icons/io5";

const DailyForecast = ({ data }) => {
  // console.log(data);

  const {
    day,
    icon,
    summary,
    temperature_min,
    temperature_max,
    precipitation,
  } = data;

  const now = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weatherDate = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };
  const [today, setToday] = useState(weatherDate.day);
  useEffect(() => {
    if (weatherDate.day === now.day) {
      setToday("Today");
    } else {
      setToday(weatherDate.day);
    }
  }, []);

  return (
    <div
      className="main-widget"
      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
    >
      <div className="day">{today}</div>
      <div className="DForecast">
        <div
          className="icon-temp"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ height: "60px", width: "60px" }} className="icon">
            <img
              style={{ height: "100%", width: "100%" }}
              src={`dist/weather_icons/set04/big/${icon}.png`}
              alt={summary}
            />
          </div>
          <div className="temp">
            <p>{Math.round(temperature_max)}°C</p>
            <p>{Math.round(temperature_min)}°C</p>
          </div>
        </div>
        <div className="Preci">{Math.round(precipitation.total)} mm/h</div>
      </div>
    </div>
  );
};

export default DailyForecast;
