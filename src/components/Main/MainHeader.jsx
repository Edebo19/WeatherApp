import React from 'react'
import "./MainHeader.css"
import Search from './Search'
import Place from './Place'
import Settings from './Settings'

const MainHeader = ({dark, setDark}) => {
  return (
    <div className='MainHeader'>
        <div className="headerWrapper">
            <Place dark={dark}/>
            <Search dark={dark}/>
            <Settings dark={dark} setDark={setDark} />
        </div>

    </div>
  )
}

export default MainHeader