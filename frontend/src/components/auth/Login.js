import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onSignUpClick, student, setIsStudent, handleAuthentication }) {
  useEffect(() => {
    const container = document.querySelector("#container");
    if (student) {
      container.classList.remove("sign-up-mode");
    } else {
      container.classList.add("sign-up-mode");
    }
  }, []);

  const handleEvent = (btn_id) => {
    const container = document.querySelector("#container");

    if (btn_id === "sign-up-btn2" && container) {
      container.classList.add("sign-up-mode2");
    } else if (btn_id === "sign-up-btn" && container) {
      container.classList.add("sign-up-mode");
    } else if (btn_id === "sign-in-btn" && container) {
      container.classList.remove("sign-up-mode");
    } else if (btn_id === "sign-in-btn2" && container) {
      container.classList.remove("sign-up-mode2");
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [invalidStudentLength, setInvalidStudentLength] = useState(false);
  const [invalidTeacherLength, setInvalidTeacherLength] = useState(false);

  const [invalidStudentCredentials, setInvalidStudentCredentials] =
    useState(false);
  const [invalidTeacherCredentials, setInvalidTeacherCredentials] =
    useState(false);

  async function handleLogin(e, entity) {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      try {
        await axios
          .post("http://localhost:8000/", {
            username,
            password,
            entity,
          })
          .then((res) => {
            if (res.data == "exists") {
              if (entity == "student") {
                setIsStudent(true);
              } else {
                setIsStudent(false);
              }
              handleAuthentication();
            } else if (res.data == "notexists") {
              if (entity == "student") {
                setInvalidStudentCredentials(true);
              } else {
                setInvalidTeacherCredentials(true);
              }
            }
          })
          .catch((e) => {
            alert("wrong details");
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      if (entity == "student") {
        setInvalidStudentCredentials(true); 
        setInvalidStudentLength(true);
      } else {
        setInvalidTeacherCredentials(true);
        setInvalidTeacherLength(true);
      }
    }
  }

  useEffect(()=>{
  },[invalidStudentCredentials])
  useEffect(()=>{
  },[invalidTeacherCredentials])
  
  return (
    <>
      <div className="container" id="container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign-In As Student</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {invalidStudentCredentials ? (
              <div className="error-message">
                <button
                  onClick={() => {
                    setInvalidStudentCredentials(false);
                    setInvalidStudentLength(false);
                  }}
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {invalidStudentLength ? (
                  <p>Invalid Credentials Length</p>
                ) : (
                  <p>Account Doesn't Exists !</p>
                )}
              </div>
            ) : (
              <p></p>
            )}
            <input
              type="submit"
              value="Sign in"
              onClick={(e) => handleLogin(e, "student")}
              className="btn"
            />
            <Link
              className="social-text"
              onClick={() => onSignUpClick("student")}
            >
              Don't have an account ?{" "}
            </Link>
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign-In As Teacher</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {invalidTeacherCredentials ? (
              <div className="error-message">
                <button
                  onClick={() => {
                    setInvalidTeacherCredentials(false);
                    setInvalidTeacherLength(false);
                  }}
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {invalidTeacherLength ? (
                  <p>Invalid Credentials Length</p>
                ) : (
                  <p>Account Doesn't Exists !</p>
                )}
              </div>
            ) : (
              <p></p>
            )}
            <input
              type="submit"
              value="Sign in"
              className="btn"
              onClick={(e) => handleLogin(e, "teacher")}
            />
            <Link
              className="social-text"
              onClick={() => onSignUpClick("teacher")}
            >
              Don't have an account ?{" "}
            </Link>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you a student ?</h3>
              <p>
                Sign-In As Student <i className="fa-solid fa-arrow-down"></i>
              </p>
              <button
                className="btn"
                id="sign-in-btn"
                onClick={() => handleEvent("sign-in-btn")}
              >
                Student's Account
              </button>
            </div>
            <img src="signin.svg" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Are you a Teacher ?</h3>
              <p>
                Sign-In As Teacher <i className="fa-solid fa-arrow-down"></i>
              </p>
              <button
                className="btn"
                id="sign-up-btn"
                onClick={() => handleEvent("sign-up-btn")}
              >
                Teacher's Account
              </button>
            </div>
            <img src="signup.svg" alt="" className="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
