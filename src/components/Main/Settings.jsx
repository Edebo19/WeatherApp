import React, { useState } from 'react'
import './MainHeader.css'
import { FaRegMoon, FaUserCircle, FaUserCog } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { use } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Global/Slice';
import { useNavigate } from 'react-router-dom';

const Settings = ({dark, setDark}) => {

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoOutFunc =()=>{
    dispatch(logout())
    navigate("/")
  }

  return (
    <div className='Settings'>
        <>
            {
                dark ? <FaRegMoon className='set' cursor="pointer" onClick={()=>setDark(!dark)} size={33}/> : <LuSun className='set' cursor="pointer" onClick={()=>setDark(!dark)} size={33}/>
                
            }
        </>
        <FaUserCog className='set' onClick={()=> setOpen(true)} cursor="pointer" size={33}/>

        {
          open ?
          <div className="popUp" onMouseLeave={()=>setOpen(false)} style={{ background:`${dark ? "white" : "#252525ea" }`}}>
          <FaUserCircle color={`${dark ? "black" : "white"}`} size={50} style={{marginBottom:"10px"}} />
          <h5>Name: Okelemu Peace</h5>
          <p>okelemupeace@email.com</p>
          <div className="log-out">
            <button onClick={logoOutFunc}>
              Logout
            </button>
          </div>
        </div>
        : null
        }
    </div>
  )
}

export default Settings