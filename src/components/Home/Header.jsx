import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className='HeaderBody'>
        <div className="header-wrapper">
            <div className="logo-area">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
                <p>WeatherWise</p>
            </div>
            <div className="auth-buttons">
                <button onClick={()=>navigate("/login")} className='transparent'>Login</button>
                <button onClick={()=>navigate("/sign-up")}>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Header