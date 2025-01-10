import React, { useState } from 'react'

import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setshowLogin}) => {
 
   const [currState,setCurrentState]=useState("Login")
 
    return (
    <div className='login-popup'>
       <form action="" className="login-popup-container">
          <div className="login-popup-title">
             <h2>{currState}</h2>
             <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
             {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
             <input type="email" placeholder='Your Email' required />
             <input type="password" placeholder='Password' required />
          </div>
          <button>{currState==="Login"?"Login":"Create account"}</button>
          <div className="login-popup-condition">
             <input type="checkbox" required />
             <p>By continuing, i agree to the terms of use & privacy policy.</p>
             
          </div>
          {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
           :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
           
          </form>
    </div>
  )
}

export default LoginPopUp
