import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Header from './Header'
import Heroarea from './Heroarea'
import Load from '../Main/Load'

const Homepage = () => {

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setShowPage(true),
       3000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className='Homepage'>
        {
          showPage ?
          <>
            <Header/>
        <Heroarea/>
          </> : <Load/>
        }
    </div>
  )
}

export default Homepage