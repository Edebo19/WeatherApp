import React from 'react'
import "./colors.css"
import { BiDownArrowAlt } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

const Colors = ({showColors, setShowColors}) => {


    const colorDisplay =[
        {color: "#d48080"},
        {color: "#c79df1"},
        {color: "#727ed8"},
        {color: "#7bec88"},
        {color: "#f0d957"},
        {color: "#68cbdf"},
    ]
    
  return (
    <>
        {
            showColors === true ?
            <div className='colors'>
                {
                    colorDisplay.map((e, i)=>(
                        <div style={{background:`${e.color}`}} className="color-circle"></div>
                    ))
                }

                <div className="close" onClick={()=>setShowColors(false)}>
                <CgClose color='white' size={20}/>  
                </div>
            </div> : null
        }
    </>
  )
}

export default Colors