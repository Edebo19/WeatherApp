import React from 'react'
import "./App.css"
import Header from './components/Home/Header'
import Homepage from './components/Home/Homepage'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Userdashboard from './components/Dashboard/Userdashboard'
import Home from './components/Dashboard/DashboardOutlet/Home'
import Map from './components/Dashboard/DashboardOutlet/Map'
import Location from './components/Dashboard/DashboardOutlet/Location'
import BodyLayout from './components/Main/BodyLayout'

const App = () => {

  const router= createHashRouter([
    
    {
      path:"/",
      element: <Homepage/>
    },
    {
      path:"login",
      element: <Login/>
    },
    {
      path:"sign-up",
      element:<Signup/>
    },
    {
      path:"weather",
      element: <BodyLayout/>
    }
    // {
    //   path:"user",
    //   element: <Userdashboard/>,
    //   children:[
    //     {
    //       path:"home",
    //       element: <Home/>
    //     },
    //     {
    //       path:"forecast",
    //       element: <Forecast/>
    //     },
    //     {
    //       path:"location",
    //       element: <Location/>
    //     },
    //     {
    //       path:"map",
    //       element: <Map/>
    //     },
    //   ]
    // }
  ])

  return (
    <div className='MainBody'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App