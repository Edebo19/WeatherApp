import React from 'react'

const WeatherIcon = () => {
  return (
    <div className="weather-icon">
            <img src={`dist/weather_icons/set04/big/${icon_num}.png`} alt="" />
    </div>
  )
}

export default WeatherIcon