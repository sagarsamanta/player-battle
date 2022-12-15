import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logo from "../../asset/logo.png";

import { FaHome, FaRegChartBar, FaVideo, FaThList, FaTv } from "react-icons/fa";
import { Divider } from "@mui/material";
const SideBar = () => {
  return (
    <div
      className="sidebar"
      style={{ position: "fixed", top: 0, left: 0, width: "16%" }}
    >
      <div className="upper">
        <img src={logo} alt="" />
        COMPANY
      </div>
      <Divider style={{marginTop:'1rem', marginBottom:'-2rem'}} light />
      <div className="lower">
        <ul>
          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "#A2A1FF" : "white" };
              }}
              to="/gameMode"
            >
              <FaHome size={25} className="icon" /> Game Modes
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "#A2A1FF" : "white" };
              }}
              to="/tournament"
            >
              <FaRegChartBar size={25} className="icon" /> Tournament
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "#A2A1FF" : "white" };
              }}
              to="/gameFunctionality"
            >
              <FaVideo size={25} className="icon" /> Game Functionality
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "#A2A1FF" : "white" };
              }}
              to="/Player"
            >
              <FaThList size={25} className="icon" /> Player
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
