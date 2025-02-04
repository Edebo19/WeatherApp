import React from 'react'
import load from '../../assets/load.gif'

const Load = () => {
  return (
    <div style={{background:"white", border:"1px solid white", height:"100vh", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
        <img style={{height:"250px", width:"250px"}} src={load} alt="Loading..." />
        <p style={{fontFamily:"lucida calligraphy", color:"black", fontSize:"24px", fontWeight:"500"}}> Weatherwise...</p>

    </div>
  )
}

export default Load