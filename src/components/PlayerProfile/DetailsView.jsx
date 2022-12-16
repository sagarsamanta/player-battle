import React from "react";
import classes from "./DetailsView.module.css";
import Divider from "@mui/material/Divider";
const DetailsView = ({ title }) => {
  return (
    <div className={classes.box}>
      <div className={classes.title}>{title}</div>
      <div className={classes.row}>
        <div className={classes.property}>Name :</div>
        <div className={classes.value}>Virat Das</div>
      </div>
      <Divider light />
      <div className={classes.row}>
        <div className={classes.property}>Age :</div>
        <div className={classes.value}>Virat Das</div>
      </div>
      <Divider light />
      <div className={classes.row}>
        <div className={classes.property}>Address : </div>
        <div className={classes.value}>Virat Das</div>
      </div>
      <Divider light />
      <div className={classes.row}>
        <div className={classes.property}>Mobile No : </div>
        <div className={classes.value}>Virat Das</div>
      </div>
    </div>
  );
};

export default DetailsView;
