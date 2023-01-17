import React from "react";
import "./Login.css";
import { auth } from "./Firebase";
import linkedinblob from "../src/images/linkedinblob.jpeg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth.user, "1");
        const userDetails = userAuth.user.multiFactor.user;
        console.log(userDetails, "new");
        dispatch(
          userLogin({
            email: userDetails.email,
            uid: userDetails.uid,
            displayName: name,
            photoURL: picture,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login ">
      <img src={linkedinblob} className="login-img" alt="" />

      <form action="">
        <input
          type="text"
          placeholder="Full name (required if registered)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image url optional"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
