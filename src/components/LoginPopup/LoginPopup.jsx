import React, { useState } from 'react';
import "./LoginPopup.css"
import { contentFiles } from '../../contentFiles/contentFiles';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <p>{currState}</p>
                    <img src={contentFiles.cross_icon} onClick={()=>setShowLogin(false)} alt='' />
                </div>
                <div className="login-popup-inputs">
                    {
                        currState === "Login" ? <></> : <input type="text" placeholder='Enter Name' required/>
                    }
                    <input type="email" placeholder='Enter Email' required/>
                    <input type="password" placeholder='Enter Password' required/>
                </div>
                <div className="login-input-condition">
                    <input type='checkbox' required/>
                    <p>By continuing, i agree to the terms of use and privacy policy.</p>
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login" }</button>
                {
                    currState === "Login" 
                    ? <p>Create a new Account <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
                    : <p> Already have an account <span onClick={()=> setCurrState("Login")}> Login here</span></p>
                }
            </form>
            
        </div>
    );
}

export default LoginPopup;
