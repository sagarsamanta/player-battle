import React from 'react'
import logo from "../../asset/logo.png"
import "./Login.css"
import {MdArrowRightAlt} from "react-icons/md"
import { useNavigate } from 'react-router-dom'



function Login() {
    const nav = useNavigate()
    const handleSubmit=()=>{
        nav("/home")
    }

  return (
    <div className='login_body'>
          <header >
                <img src={logo} alt="" />
                    dark-Dash
          </header> 
          <div className="login_container">
            <div className="left">
                <h1>Welcome To Dark Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia omnis eos sunt itaque nobis alias?</p>
            </div>
            <div className="right">
                    <div className="login_form">
                        <div className="upper">
                            <h2>Login</h2>
                            <p>Sign in to your account to continue.</p>
                        </div>
                        <div className="lower">
                            <form action="" >

                            <label htmlFor="email">Email address</label>
                            <input type="email" id='email' placeholder='example@gmail.com'  required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='Password'  required/>
                            <button className="login_button" type='button' onClick={()=>{handleSubmit()}} >Sign in <MdArrowRightAlt size={15}/></button>

                            </form>
                        </div>
                    </div>
            </div>
          </div>     
    </div>
  )
}

export default Login