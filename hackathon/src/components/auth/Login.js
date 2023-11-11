import React from "react";
import "./index.css";
import {Link} from 'react-router-dom';

function Login() {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  // const container = document.querySelector(".container");
  const sign_in_btn2 = document.querySelector("#sign-in-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");
  // if (sign_up_btn) {
  //   sign_up_btn.addEventListener("click", () => {
  //     container.classList.add("sign-up-mode");
  //   });
  // }
  // if (sign_in_btn) {
  //   sign_in_btn.addEventListener("click", () => {
  //     container.classList.remove("sign-up-mode");
  //   });
  // }
  // if (sign_up_btn2) {
  //   sign_up_btn2.addEventListener("click", () => {
  //     container.classList.add("sign-up-mode2");
  //   });
  // }
  // if (sign_in_btn2) {
  //   sign_in_btn2.addEventListener("click", () => {
  //     container.classList.remove("sign-up-mode2");
  //   });
  // }

  const handleEvent=(btn_id)=>{
    const container = document.querySelector("#container");
    console.log(container);
    if(btn_id == 'sign-up-btn2' && container){
      container.classList.add("sign-up-mode2");
    }
    else if(btn_id == 'sign-up-btn' && container){
      container.classList.add("sign-up-mode");
    }
    else if (btn_id=='sign-in-btn' && container){
      container.classList.remove("sign-up-mode");
    }
    else if (btn_id=='sign-in-btn2' && container){
      container.classList.remove("sign-up-mode2");
    }
    
    
  }
  return (
    <>
      <div className="container" id="container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign-In As Student</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn" />
            <Link className="social-text" to='/signup'>Don't have an account ? </Link>
          
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign-In As Teacher</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn" />
            <Link to='/signup' className="social-text">Don't have an account ? </Link>
           
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you a student ?</h3>
              <p>
              Sign-In As Student <i class="fa-solid fa-arrow-down"></i>
              </p>
              <button className="btn" id="sign-in-btn" onClick={()=>handleEvent('sign-in-btn')} >
                Student's Account
              </button>
            </div>
            <img src="signin.svg" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Are you a Teacher ?</h3>
              <p>
                Sign-In As Teacher <i class="fa-solid fa-arrow-down"></i>
              </p>
              <button className="btn" id="sign-up-btn" onClick={()=>handleEvent('sign-up-btn')}>
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
