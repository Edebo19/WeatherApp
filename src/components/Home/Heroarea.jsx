import React from 'react'
import "./Homepage.css"
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";
import { SiAccuweather } from "react-icons/si";
import { TiWeatherSnow } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'

const Heroarea = () => {

    const weather = [
        {
            degree: 27,
            icon: <TiWeatherPartlySunny className="icon" color='white' size={30}/>,
            state: "Lagos",
            country: "Nigeria"
        },
        {
            degree: 33,
            icon: <TiWeatherPartlySunny className="icon" color='white' size={30}/>,
            state: "Kano",
            country: "Nigeria"
        },
        {
            degree: 15,
            icon: <TiWeatherShower className="icon" color='#10d1f3' size={30}/>,
            state: "Benue",
            country: "Nigeria"
        },
        {
            degree: 17,
            icon: <SiAccuweather className="icon" color='yellow' size={30}/>,
            state: "Abia",
            country: "Nigeria"
        },
        {
            degree: 10,
            icon: <TiWeatherSnow className="icon" color='#10d1f3' size={30}/>,
            state: "Imo",
            country: "Nigeria"
        },
        ]

        const navigate = useNavigate()
  return (
    <div className='Heroarea'>
        <div className="write-up">
            <h3>Discover <br/> the weather <br/> from anywhere...  </h3>
            <button style={{color:"white", cursor:"pointer"}} onClick={()=>navigate("/sign-up")}>Get started</button>
        </div>
        <div className="transparent-card-holder">
            <div className="transparent-card">
                {
                    weather.map((e, i)=>(
                        <div className="weather-card" key={i}>
                    <div className="cardHeader">
                        <h2 style={{color:"white"}}>{e.degree}°</h2>
                        <span>{e.icon} </span>
                    </div>
                    <div className="state-country">
                        <h2 style={{color:"white"}}>{e.state}</h2>
                        <p style={{color:"white"}}>{e.country}</p>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Heroarea