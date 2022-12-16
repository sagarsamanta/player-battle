import React from "react";
import img1 from "../../asset/r1.png";
import img2 from "../../asset/r2.png";
import img3 from "../../asset/r3.png";
import Card from "../card/Card";
// import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import classes from "./Home.module.css";

function Home() {
  return (
    <>
      <TopBar title={"GAMING MODES"} />
      <div className={classes.fixedBtn}>
        {/* <Navbar /> */}
      </div>
      <div className="home" style={{}}>
        <div className="upper_row">
          <Card
            title={"Battle Zone"}
            image={img1}
            label1="Game Fees"
            label2="Game Reward"
          />
          <Card
            title={"Soldier Camp"}
            image={img2}
            label1="Game Fees"
            label2="Game Reward"
          />
          <Card
            title={"Story Mode"}
            image={img3}
            label1="Game Fees"
            label2="Game Reward"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
