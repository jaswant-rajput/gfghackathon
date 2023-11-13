import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup({ onLoginClick, student, setIsStudent, handleAuthentication }) {
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
    if (btn_id == "sign-up-btn2" && container) {
      container.classList.add("sign-up-mode2");
    } else if (btn_id == "sign-up-btn" && container) {
      container.classList.add("sign-up-mode");
    } else if (btn_id == "sign-in-btn" && container) {
      container.classList.remove("sign-up-mode");
    } else if (btn_id == "sign-in-btn2" && container) {
      container.classList.remove("sign-up-mode2");
    }
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [invalidStudentCredentials, setInvalidStudentCredentials] = useState(false);
  const [invalidStudentLength,setInvalidStudentLength]=useState(false);

  const [invalidTeacherCredentials, setInvalidTeacherCredentials] = useState(false);
  const [invalidTeacherLength,setInvalidTeacherLength]=useState(false);
  
  async function handleSignUp(e, entity) {
    e.preventDefault();

    if (
      username.length > 0 &&
      email.length > 0 &&
      number.length > 0 &&
      password.length > 0
    ) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@somaiya\.edu$/;
      const phoneNumberRegex = /^\d{10}$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

      if (
        emailRegex.test(email) &&
        phoneNumberRegex.test(number) &&
        passwordRegex.test(password)
      ) {
        try {
          await axios
            .post("http://localhost:8000/signup", {
              username,
              email,
              number,
              password,
              entity,
            })
            .then((res) => {
              if (res.data == "exists") {
                alert("User already exists");
              } else if (res.data == "notexists") {
                if (entity == "student") {
                  setIsStudent(true);
                } else {
                  setIsStudent(false);
                }
                handleAuthentication();
              }
            })
            .catch((e) => {
              alert("Wrong details");
              console.log(e);
            });
        } catch (e) {
          console.log(e);
        }
      } else {
        if(entity == 'student'){
        setInvalidStudentCredentials(true);
        }else{
          setInvalidTeacherCredentials(true);
        }
      }
    }else{
      if(entity == 'student'){
      setInvalidStudentLength(true)
      setInvalidStudentCredentials(true)
      }else{
        setInvalidTeacherLength(true)
      setInvalidTeacherCredentials(true)
      }
    }
  }

  return (
    <>
      <div className="container" id="container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign-Up As Student</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {invalidStudentCredentials ? (
              <div className="error-message">
                <button onClick={() => {setInvalidStudentCredentials(false);setInvalidStudentLength(false)}}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {invalidStudentLength ? (
                  <p>Invalid Credentials Length</p>
                ):(
                  <p>Invalid Credentials !</p>
                )}
                
              </div>
            ) : (
              <p></p>
            )}

            <input
              type="submit"
              value="Sign up"
              className="btn"
              onClick={(e) => handleSignUp(e, "student")}
            />
            <Link
              className="social-text"
              onClick={() => onLoginClick("student")}
            >
              Already have an account ?{" "}
            </Link>
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign-Up As Teacher</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {invalidTeacherCredentials ? (
              <div className="error-message">
                <button onClick={() => {setInvalidTeacherCredentials(false);setInvalidTeacherLength(false)}}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {invalidTeacherLength ? (
                  <p>Invalid Credentials Length</p>
                ):(
                  <p>Invalid Credentials !</p>
                )}
                
              </div>
            ) : (
              <p></p>
            )}
            <input
              type="submit"
              value="Sign up"
              className="btn"
              onClick={(e) => handleSignUp(e, "teacher")}
            />
            <Link
              className="social-text"
              onClick={() => onLoginClick("teacher")}
            >
              Already have an account ?{" "}
            </Link>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you a student ?</h3>
              <p>
                Sign-Un As Student <i className="fa-solid fa-arrow-down"></i>
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
                Sign-Up As Teacher <i className="fa-solid fa-arrow-down"></i>
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

export default Signup;
