import React from 'react'
import logo from "../../asset/logo.png"
import "./Signup.css"
import {MdArrowRightAlt} from "react-icons/md"
import { useNavigate } from 'react-router-dom'



function Signup() {
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
                <h1>Sign up To Dark Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia omnis eos sunt itaque nobis alias?</p>
            </div>
            <div className="right">
                    <div className="login_form">
                        <div className="upper">
                            <h2>Signup</h2>
                            <p>Create your account to continue.</p>
                        </div>
                        <div className="lower">
                            <form action="" >

                            <label htmlFor="name">Name</label>
                            <input type="email" id='name' placeholder='Mr. Example'  required />
                            <label htmlFor="email">Email address</label>
                            <input type="email" id='email' placeholder='example@gmail.com'  required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='Password'  required/>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" id='password' placeholder='Confirm Your Password'  required/>
                            <button className="login_button" type='button' onClick={()=>{handleSubmit()}} >Sign up <MdArrowRightAlt size={15}/></button>

                            </form>
                        </div>
                    </div>
            </div>
          </div>     
    </div>
  )
}

export default Signup