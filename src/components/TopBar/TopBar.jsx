import React from "react";
import classes from "./TopBar.module.css";
const TopBar = ({ title }) => {
  return (
    <div className={classes.wraper}>
      <div>{title}</div>
    </div>
  );
};

export default TopBar;
