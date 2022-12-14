import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../../asset/logo.png"
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import {FaHome, FaRegChartBar,FaVideo,FaThList,FaTv} from "react-icons/fa"

function Main() {
  return (
    <div className='main_container' >
        <div className="sidebar">
                <div className="upper">
                    <img src={logo} alt="" />
                    dark-Dash
                </div>
                <div className="lower">
                    <ul>
                        <li><NavLink className="navLink" style={({isActive})=>{return{color: isActive ? '#A2A1FF' : 'white'}}} to="/home" ><FaHome size={25} className="icon"/> Home</NavLink></li>

                        <li><NavLink className="navLink" style={({isActive})=>{return{color: isActive ? '#A2A1FF' : 'white'}}} to="analytics" ><FaRegChartBar size={25} className="icon"/> Analytics</NavLink></li>

                        <li><NavLink className="navLink" style={({isActive})=>{return{color: isActive ? '#A2A1FF' : 'white'}}} to="/watch" ><FaVideo size={25} className="icon"/> Watch</NavLink></li>

                        <li><NavLink className="navLink" style={({isActive})=>{return{color: isActive ? '#A2A1FF' : 'white'}}} to="/category" ><FaThList size={25} className="icon"/> Category</NavLink></li>
                        
                        <li><NavLink className="navLink" style={({isActive})=>{return{color: isActive ? '#A2A1FF' : 'white'}}} to="/media" ><FaTv size={25} className="icon"/> Media</NavLink></li>
                    </ul>
                </div>
        </div>

        <div className="main_body">
                <Navbar/>
                <div className="routes">
                <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default Main