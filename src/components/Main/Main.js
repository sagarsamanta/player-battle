import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "./SideBar";
function Main() {
  return (
    <div className="main_container" style={{ position: "absolute" }}>
      <SideBar />

      <div
        className="main_body"
        style={{
          overflowY: "scroll",
          position: "relative",
          left: "9%",
        }}
      >
        <div className="routes">
          <div style={{ marginTop: "0rem" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
