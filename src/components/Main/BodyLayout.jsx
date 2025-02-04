import React, { useContext, useState } from "react";
import MainHeader from "./MainHeader";
import Mainbody from "./Mainbody";
import "./Body.css";
import Load from "./Load";
import WeatherContext from "./context/WeatherContext";

const BodyLayout = () => {
  const [dark, setDark] = useState(false);
  
  const {loading} = useContext(WeatherContext)


  return (
    <div className="BodyLayout" id={`App-${dark ? "dark" : "light"}`}>
      <>
      <MainHeader dark={dark} setDark={setDark} /></>
      {loading ? (
        <Load />
      ) : (
        <>
          
          <Mainbody dark={dark} />
        </>
      )}
    </div>
  );
};

export default BodyLayout;
