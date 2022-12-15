import React from "react";
import classes from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Form = ({title}) => {
  return (
    <div className={classes.form}>
      <TextField
        className={classes.inputField}
        size="small"
        required
        id="outlined-required"
        label={title}
        fullWidth
      />

      <Button className={classes.btn} size="small" fullWidth variant="outlined">
        Submit
      </Button>
    </div>
  );
};

export default Form;
