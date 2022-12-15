import React from "react";
import logo from "../../asset/logo.png";
import "./Login.css";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
function Login() {
  const nav = useNavigate();
  const handleSubmit = () => {
    nav("/gameMode");
  };

  return (
    <div className="login_body">
      <header>
        <img src={logo} alt="" />
        Hey Guys!
      </header>
      <div className="login_container">
        <div className="left">
          <h1>Welcome To Dark Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quia omnis eos sunt itaque nobis alias?
          </p>
        </div>
        <div className="right">
          <div className="login_form">
            <div className={classes.header}>
              <h2>Login</h2>
              {/* <p>Sign in to your account to continue.</p> */}
            </div>
            <Divider light style={{ margin: "20px" }} variant="fullwidth" />
            <div className="lower">
              <form action="">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <div className="btn">
                  
                  <Button
                    endIcon={<MdArrowRightAlt size={15} />}
                    className={classes.btn}
                    size="small"
                    fullWidth
                    variant="outlined"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
