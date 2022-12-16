import React, { useState } from "react";
import classes from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
const validationSchema = yup.object({
  inputVal: yup
    .number()
    .min(0, "+ve value required")
    // .integer("Only integer allowed")
    .required("required*"),
  // .test("","above 10",(val) => {
  //   if (val > 10) {
  //     return false;
  //   }
  //   return true;
  // }),
});

const Form = ({ title }) => {
  const [editable, setEditable] = useState(true);
  const toggleEdit = () => {
    setEditable((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: {
      inputVal: 5,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // formik.setFieldValue("inputVal", "");
      formik.resetForm();
    },
  });
  return (
    <div className={classes.form}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <TextField
            className={classes.inputField}
            size="small"
            type="number"
            required
            id="outlined-required"
            value={formik.values.inputVal}
            label={title}
            inputProps={{ readOnly: editable }}
            fullWidth
            name="inputVal"
            onChange={formik.handleChange}
            error={formik.touched.inputVal && Boolean(formik.errors.inputVal)}
            helperText={formik.touched.inputVal && formik.errors.inputVal}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.btn}
            size="small"
            style={{ height: "2.4rem" }}
            fullWidth
            endIcon={<SendIcon/>}
            variant="outlined"
            type="submit"
            disabled={!formik.dirty || editable}
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={2}>
          {editable ? (
            <Tooltip title="Enable Edit" className={classes.marginTop}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick={toggleEdit}
              >
                <ModeEditOutlineTwoToneIcon color="success" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Allow Read only" className={classes.marginTop}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick={toggleEdit}
              >
                <CloseTwoToneIcon color="error" />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
