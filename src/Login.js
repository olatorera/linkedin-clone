import React from "react";
import "./Login.css";

import linkedinlogo from "../src/images/linkedinlogo.png";

function Login() {
  return (
    <div className="login ">
      <img src={linkedinlogo} className="login-img" alt="" />

      <form action="">
        <input type="text" placeholder="Fullname required if registered" />
        <input type="text" placeholder="Image url *optional" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
      <p>
        Not a member
        <span className="login__register">Register Now</span>
      </p>
    </div>
  );
}

export default Login;
