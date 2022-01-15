import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import "./Auth.scss";
import Switch from "../../Components/Global/Switch/Switch";
const Auth = () => {

  let history = useHistory();

  if (localStorage.getItem("token") != null) {
    history.push("/profile");
  }

  const [coachStatus, setCoachStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [backendError, setBackendError] = useState();


  function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  const authSubmit = (e) => {
    e.preventDefault()
    if (email == "") {
      setEmailError("your email is required")
    } else if (!validateEmail(email)) {
      setEmailError("your email is not valid")
    } else {
      setEmailError("")
    }
    if (!(password.length < 21 && password.length > 7)) {
      setPasswordError("password must be between 8-20 Char")
    } else {
      setPasswordError("")
    }

    const data = {
      email,
      password,
      isLogin
    }

    if (isLogin == false) {
      data.userType = coachStatus ? 100 : 200;
    }

    axios.post(`http://localhost:4000/api/${isLogin ? 'login' : 'singup'}`, data)
      .then(res => {
        setBackendError("")
        localStorage.setItem('token', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        history.push("/profile");
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
        setBackendError("please add the right email or password")
      })
  }

  return (
    <div className="page">
      <div className="container">
        <div className="leftpart">
          <form action="" method="post" onSubmit={(e) => authSubmit(e)}>
            <h1>{isLogin ? "LOGIN" : "REGISTER"}</h1>
            <input type="email" placeholder="your-email@mail.com" onChange={(e) => setEmail(e.target.value)} />
            <span className="error emailError">{emailError}</span>

            <input type="password" placeholder="***************" onChange={(e) => setPassword(e.target.value)} />
            <span className="error passwordError">{passwordError}</span>
            {!isLogin && <Switch note="are you a coach? If you select a coach account and do not use the coach feature, your account will be banned!" status={[coachStatus, setCoachStatus]} />}
            <input type="submit" value="submit" />
            <div className="auth-buttons">
              <span className="forget">forget you password</span>
              <span className="login" onClick={() => {
                setIsLogin(!isLogin);
                setPasswordError("");
                setEmailError("")
              }
              }>{isLogin ? "register" : "login"}</span>
            </div>
            <span className="error backend">{backendError}</span>
          </form>

        </div>

        <div className="rightpart"></div>
      </div>
    </div>
  );
};

export default Auth;
