import React from "react";
import "./Login.css";
import { auth } from "./Firebase";
import linkedinlogo from "../src/images/linkedinlogo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();

  const loginToken = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: picture,
          })
          .then(() => {
            dispatch(
              Login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: picture,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login ">
      <img src={linkedinlogo} className="login-img" alt="" />

      <form action="">
        <input
          type="text"
          placeholder="Fullname required if registered"
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
        <button type="submit" onClick={loginToken}>
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
