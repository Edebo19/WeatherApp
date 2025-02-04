import React, { useState } from 'react'
import "./NoteBody.css"
import MainNote from './MainNote'
import Colors from './Colors'

const Notebody = () => {

  const [showColors, setShowColors] = useState(false)

  return (
    <div className='NoteBody'>
        <div className="side">
            <h2>Pocket</h2>
            <button onClick={()=> setShowColors(true)}>+</button>
            <Colors showColors={showColors} setShowColors={setShowColors}/>
        </div>
        <hr />
        <div className="MainNoteBody">
            <MainNote/>
        </div>
    </div>
  )
}

export default Notebody