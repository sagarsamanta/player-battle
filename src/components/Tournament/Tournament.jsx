import React from "react";
import img1 from "../../asset/r1.png";
import img2 from "../../asset/r2.png";
import img3 from "../../asset/r3.png";
import Card from "../card/Card";
import classes from "./Tournament.module.css";
function Tournament() {
  return (
    <div className={classes.wrapper}>
      <Card title={"Entry Fees"} image={img1} label1="Entery Fees" label2="No Of Player"/>
    </div>
  );
}

export default Tournament;
