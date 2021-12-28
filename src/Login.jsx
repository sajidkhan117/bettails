import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import "./Login.css";
// import { useState } from 'react';
const login = () => {
  const [show, setShow] = useState(false);
  const toggleBtn = () =>{
      setShow(prevState => !prevState)
  }
  return (
    
    <div className="LoginForm">
      <div className="Topbar">
        <h1>betfair</h1>
      </div>
      <form action="" className="Form">
        <fieldset className="fieldset">
          <h3>Please Login below</h3>
          <div className="FormInputs">
            <div className="FormData">
              <label htmlFor="Email or userName"> Email or userName </label>
              <input
                type="text"
                autoComplete="off"
                name="username"
                id="username"
               
              ></input>
            </div>

            <div className="FormDataPassword">
              <label htmlFor="Password"> Password </label>
              <input
                // type="password"
                type={show ? "text" : "password"}
                // autoComplete="off"
                // name="password"
                // id="Password"
              ></input>
              <button className="icons" onClick={toggleBtn}>
              {show ? <AiOutlineEyeInvisible/> :
                <AiOutlineEye /> 
              }
              </button>
            </div>
          </div>
          <div className="Btn">
            <button type="submit">Login</button>
            <p>
              forget your <a>username</a> or <a>Password</a>
            </p>
          </div>
        </fieldset>
      </form>

      <div className="secondPortion">
        <div className="secondPara">
          <h3>New to Betfair</h3>
          <div className="imagePortion"></div>
          <div className="secondBtn">
            <button>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
