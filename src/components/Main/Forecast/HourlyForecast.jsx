import React, { useEffect, useState } from "react";
import "./DForecast.css";
import { IoPaperPlaneOutline } from "react-icons/io5";

const HourlyForecast = ({ data }) => {
  // console.log(data.wind);

  const { date, icon, summary, temperature, wind, precipitation } = data;

  const now = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weatherDate = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };
  const [day, setDay] = useState(weatherDate.day);
  useEffect(() => {
    if (weatherDate.day === now.day && weatherDate.time === now.time) {
      setDay("Today");
    } else if (weatherDate.time === "00:00") {
      setDay(weatherDate.day);
    } else {
      setDay("");
    }
  }, []);
  return (
    <div
      className="main-widget"
      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
    >
      <div className="day">{day}</div>
      <div className="DForecast">
        <div className="time">{weatherDate.time}</div>
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
          <div className="temp">{Math.round(temperature)}°C</div>
        </div>
        <div className="Preci">{Math.round(precipitation.total)} mm/h</div>
        <div className="wind">
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {Math.round(wind.speed)} mph{" "}
            <span style={{ paddingLeft: "5px" }}>
              <IoPaperPlaneOutline
                style={{ transform: `rotate(-${-45 + wind.angle}deg)` }}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
