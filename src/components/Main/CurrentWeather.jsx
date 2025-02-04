import React from "react";
import "./currentWeather.css";
import { icon } from "leaflet";
import { BsCloudsFill, BsDropletHalf, BsEmojiSunglasses, BsMoisture } from "react-icons/bs";
import { GiWindSlap } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { RiGlassesFill } from "react-icons/ri";


const CurrentWeather = ({data}) => {

  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const otherInfo = [
    {
      id: 0,
      icon: <BsDropletHalf className="icon" />,
      name:"Precipitation",
      value:Math.round(precipitation.total),
      unit:"in/h"
    },
    {
      id: 1,
      icon:<GiWindSlap className="icon" />,
      name:"Wind",
      value:Math.round(wind.speed),
      unit:"mph"
    },
    {
      id: 2,
      icon: <BsMoisture className="icon" />,
      name:"Humidity",
      value:Math.round(humidity),
      unit:"%"
    },
    {
      id: 3,
      icon: <RiGlassesFill className="icon"/>,
      name:"UV index",
      value:Math.round(uv_index),
      unit:""
    },
    {
      id: 4,
      icon: <BsCloudsFill className="icon" />,
      name:"Clouds cover",
      value:Math.round(cloud_cover),
      unit:"%"
    },
    {
      id: 5,
      icon: <MdVisibility className="icon" />,
      name:"Visibilty",
      value:Math.round(visibility),
      unit:"mi"
    },
  ]

  console.log(data);
  return <div className="CurrentWeather">
    <div className="temperature">
        <div className="weather-icon">
            <img src={`dist/weather_icons/set04/big/${icon_num}.png`} alt={summary} />
        </div>
        <div className="value">
          <div className="temperatureDisplay">
            <p>{Math.round(temperature)}°C</p>
          </div>
          <div className="feelsLike">
            <p>It feels like {Math.round(feels_like)}°C</p>
          </div>
          <h3 className="summary">{summary}</h3>
        </div>
    </div>
    <div className="other-infos">
      {
        otherInfo.map((e)=>(
          <div className="widget" key={e.id}>
            <p>{e.icon} {e.value} {e.unit}</p>
            <h3>{e.name}</h3>
          </div>
        ))
      }
    </div>
  </div>;
};

export default CurrentWeather;
