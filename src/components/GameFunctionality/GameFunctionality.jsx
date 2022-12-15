import React from "react";
import Card from "../card/Card";
import classes from "./GameFunctionality.module.css";
import img2 from "../../asset/r2.png";
import img3 from "../../asset/r3.png";
function GameFunctionality() {
  return (
    <div className={classes.wrapper}>
      <Card
        title={"Game Fees"}
        image={img2}
        label1="Reward Per Day"
        label2="energy Per Day"
      />
      <Card
        title={"NFT"}
        image={img2}
        label1="Available NfTs"
        label2="NFTs Price"
      />
    </div>
  );
}

export default GameFunctionality;
