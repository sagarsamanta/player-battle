import React from "react";
import classes from "./Navbar.module.css";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className={classes.wrapper}>
      <NavLink className="" to="/signup" style={{ textDecoration: "none" }}>
        <Button size="small" fullWidth variant="outlined" type="submit">
          Register Player
        </Button>
      </NavLink>
    </div>
  );
}

export default Navbar;
