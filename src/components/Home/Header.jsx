import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();

  const [mob, setMob] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="HeaderBody">
      <div className="header-wrapper">
        <div className="logo-area">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p>WeatherWise</p>
        </div>
            
            <div className="auth-buttons">
              <button
                onClick={() => navigate("/login")}
               className="transparent"
              >
                Login
              </button>
              <button onClick={() => navigate("/sign-up")}>Sign up</button>
            </div>
            <BiMenu className="menu" ursor="pointer" color="white" size={25} onClick={()=> setShowNav(true)} />
      </div>
      {showNav ? (
        <div className="mobileNav">
          <div className="wrapper">
            <div className="navHeader">
            <div className="left">
            <img style={{ height: "50px", width: "50px" }} src={logo} alt="" />
            <p>WeatherWise</p>
            </div>
            <CgClose onClick={()=> setShowNav(false)} cursor="pointer" size={25}/>
            </div>
            <div className="navButtons">
                <p onClick={() => navigate("/login")}>Sign up</p>
                <p onClick={() => navigate("/sign-up")}>Login</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
