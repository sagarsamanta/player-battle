import React from 'react'
import "./Navbar.css"
import {BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <ul className='navbar_class' >
            <li>
                <div className="searchbar">
                    <div className="search_icon">
                    <BiSearch/>
                    </div>
                    <input type="text" 
                    placeholder='Search Here'
                     />
                </div>
            </li>
            <li>
                <Link className="btn_class" to="/signup">Create User</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar