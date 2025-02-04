import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { DEFAULT_PLACE } from "../../../utils/place";
import { getWeatherData } from "../../../api";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const getAllWeatherData = async () => {
      setLoading(true);

      const cw = await getWeatherData("current", place.place_id, "auto");
      console.log(cw.current)
      setCurrentWeather(cw.current);
      const hf = await getWeatherData("hourly", place.place_id, "auto");
      setHourlyForecast(hf.hourly.data);
      // console.log(hf.hourly.data)
      const df = await getWeatherData("daily", place.place_id, "auto");
      setDailyForecast(df.daily.data);
      // console.log(df.daily.data)

      setLoading(false);
    };

    getAllWeatherData()
  }, [place]);

  return (
    <WeatherContext.Provider value={{ place, setPlace, loading, currentWeather, hourlyForecast, dailyForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
