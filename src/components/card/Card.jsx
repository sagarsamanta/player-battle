import React from "react";

import classes from "./Card.module.css";
import Form from "../form/Form";
const Card = ({ image, title, label1, label2 }) => {
  return (
    <div className={classes.cardItem}>
      <img src={image} alt="" />
      <div className={classes.title}>{title}</div>

      <Form title={label1} />
      <Form title={label2} />
    </div>
  );
};

export default Card;
