import React from "react";
import { loginEndPoint } from "../Spotify";
import "./Styles/Login.css";

const Login = () =>{
    return(
        <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndPoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
    );
}

export default Login;
