import React from 'react'
import "./Sidebar.css"
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { HiHome } from "react-icons/hi2";
import { ImCompass2 } from "react-icons/im";
import { SiFreelancermap } from "react-icons/si";
import { PiMapPinLineBold } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <p>WeatherWise</p>
      </div>
      <div className="dashboard-holder">
        {/* <h3>Dashboard</h3> */}
        <div className="side-navs">
          <NavLink to="/user/home" className={({isActive})=>[isActive ? "NavActive" : "NavNotActive"]}> <HiHome/> Home</NavLink>
          <NavLink to="/user/forecast" className={({isActive})=>[isActive ? "NavActive" : "NavNotActive"]}> <ImCompass2/> Forecast</NavLink>
          <NavLink to="/user/map" className={({isActive})=>[isActive ? "NavActive" : "NavNotActive"]}> <SiFreelancermap/> Map</NavLink>
          <NavLink to="/user/location" className={({isActive})=>[isActive ? "NavActive" : "NavNotActive"]}> <PiMapPinLineBold/> Location</NavLink>
          {/* <NavLink to="/user" className={({isActive})=>[isActive ? "NavActive" : "NavNotActive"]}>Settings</NavLink> */}
        </div>
      </div>

    </div>
  )
}

export default Sidebar