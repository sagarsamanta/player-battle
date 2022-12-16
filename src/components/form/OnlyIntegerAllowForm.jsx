import React from "react";
import classes from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  inputVal: yup
    .number()
    .min(0, "+ve value required")
    .integer("Only integer allowed")
    .required("required*"),
  // .test("","above 10",(val) => {
  //   if (val > 10) {
  //     return false;
  //   }
  //   return true;
  // }),
});

const Form = ({ title }) => {
  const formik = useFormik({
    initialValues: {
      inputVal: "",
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
      <TextField
        className={classes.inputField}
        size="small"
        type="number"
        required
        id="outlined-required"
        value={formik.values.inputVal}
        label={title}
        fullWidth
        name="inputVal"
        onChange={formik.handleChange}
        error={formik.touched.inputVal && Boolean(formik.errors.inputVal)}
        helperText={formik.touched.inputVal && formik.errors.inputVal}
      />

      <Button
        className={classes.btn}
        size="small"
        style={{ height: "2.4rem" }}
        fullWidth
        variant="outlined"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
