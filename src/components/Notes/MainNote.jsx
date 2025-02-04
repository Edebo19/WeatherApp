import React from 'react'
import './Note.css'
import { BiEdit, BiSearch } from 'react-icons/bi'

const MainNote = () => {

    const array = [1, 2, 3, 4 ]
  return (
    <div className='MainNote'>
        <div className="search-container">
            <div className="search-input">
                <BiSearch color='black' size={25}/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <h2>Notes</h2>
        <div className="hold-all-notes">
            {
                array.map((e)=>(
                    <div className="notecard">
                        <div className="noteHolder">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quaerat velit quae, magnam, libero similique, quod illo nemo numquam accusamus reprehenderit eos nesciunt adipisci dolorem animi reiciendis fuga soluta optio?</p>
                        </div>
                        <div className="HoldDate">
                            <p className='date'> 28th September 2023</p>
                            <button className="edit">
                                <BiEdit color='white' size={25}/>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MainNote