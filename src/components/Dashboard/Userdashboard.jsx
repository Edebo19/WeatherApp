import React from 'react'
import Sidebar from './SideBar/Sidebar'
import { Outlet } from 'react-router-dom'
import "./Userdashboard.css"

const Userdashboard = () => {
  return (
    <div className='Userdashboard'>
        <Sidebar/>
        <div className='hold-outlet'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Userdashboard