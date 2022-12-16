import { Paper } from "@mui/material";
import React from "react";
import classes from "./ReportCard.module.css";

const ReportCard = ({ imgUrl, count, handleOnClick, title }) => {
  return (
    <Paper
      className={classes.container}
      elevation={3}
      style={{ backgroundColor: "rgb(47 68 88)", cursor: "pointer" }}
      onClick={handleOnClick}
    >
      <div className={classes.root}>
        <div className={classes.amount}>{count}</div>
        <img src={imgUrl} alt="NOT" className={classes.img} />
      </div>
      <div>{title}</div>
    </Paper>
  );
};

export default ReportCard;
