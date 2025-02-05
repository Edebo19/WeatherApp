import React, { useContext, useEffect, useState } from "react";
import "./MainHeader.css";
import { BiSearch } from "react-icons/bi";
import { searchPlaces } from "../../api";
import WeatherContext from "./context/WeatherContext";

const Search = ({ dark }) => {
  const [text, setText] = useState("");
  const [close, setClose] = useState(true);
  const [result, setResult] = useState([])

  const {setPlace} =  useContext(WeatherContext)

useEffect(()=>{
  if(text.trim() === ""){
    setClose(true)
  }
},[text])

  const onSearch = async (e) => {
    
    setClose(false)
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setResult(data)
  };

  const changePlace =(e)=>{
    setPlace(e)
    setText("")
    setClose(true)
  }
  return (
    <div className="Search">
      <div
        className="holdSearch"
        style={{ border: `${dark ? "1px solid black" : "1px solid white"}` }}
      >
        <BiSearch size={30} />
        <input
          type="text"
          value={text}
          placeholder="Search city ..."
          onChange={onSearch}
        />
      </div>
      <>
        {close ? null : (
          <div className="search-results" style={{background: `${dark ? " white" : " rgba(34, 33, 33, 0.867)"}`}} onMouseLeave={()=> setClose(true)}>
            {
              result && Array.isArray(result) && result.length > 0 ? (
                result.map((e) => (
                  <div key={e.place_id} onClick={() => changePlace(e)} className={`${dark ? "testWhite" : "test"}`}>
                    {e.name}, {e.adm_area1}, {e.country}
                  </div>
                ))
              ) : (
                <p>No results found</p>  // Optional: Show a message if there are no results
              )
            }
          </div>
        )}
      </>
    </div>
  );
};

export default Search;
