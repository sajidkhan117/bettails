import React from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// const eye = <FontAwesomeIcon icon={faEye} />;

import "./Login.css";
const login = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => {
  //   console.log(data);
  // };
  return (
    
    <div className="LoginForm">
    <div>

    </div>
      <div className="Topbar">
        <h1>betfair</h1>
      </div>
      <form action="" className="Form">
        <h3>Please Login below</h3>
        <div className="FormInputs">
          <div className="FormData">
            <label htmlFor="Email or userName"> Email or userName </label>
            <input
              type="text"
              autoComplete="off"
              name="username"
              id="username"
              // ref={register({ required: "This is required." })}
            ></input>
          </div>

          <div className="FormDataPassword">
            <label htmlFor="Password"> Password </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="Password"
              // ref={register({ required: "This is required." })}
            ></input>
            {/* <i>{eye}</i> */}
          </div>
        </div>
        <div className="Btn">
          <button type="submit">Login</button>
          <p>forget your <a>username</a> or <a>Password</a></p>
        </div>
      </form>

      <div className="secondPortion">
          <h3>New to Betfair</h3>
          <div className="imagePortion"></div>
            <div className="secondBtn">
              <button>Join Now</button>
            </div>
      </div>
    </div>
  );
};

export default login;
