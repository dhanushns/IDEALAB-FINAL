import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Signup from '../components/signup';
import Forget from '../components/forgot';
import Button from 'react-bootstrap/Button'
import '../assets/styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {

  const [state, active] = React.useState(false);
  const [state2, active2] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [notCorrect, setNotCorrect] = React.useState('');
  const navigate = useNavigate();

  function emailgetting(e) {
    setEmail(e.target.value);
  }
  function passwordGetting(e) {
    setPassword(e.target.value);
  }

  function passSubmit(e) {
    e.preventDefault();
    axios.post("/login", { email, password })
      .then(response => {
        if (!response.data.error) {
          localStorage.setItem("token", response.data.token)
          funtoken()
        }
        setNotCorrect("Enter Valid Email or Password");
      })
      .catch(err => {
        setNotCorrect("Enter Valid Email or Password");
      });
  }

  function funtoken() {
    const token = localStorage.getItem("token");
    axios.post("/token", { token })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('userInformation', JSON.stringify(response.data.value.userInformation));
        localStorage.setItem('booking', JSON.stringify(response.data.value.booking));
        localStorage.setItem('work', JSON.stringify(response.data.value.work));
        localStorage.setItem("fund", JSON.stringify(response.data.value.fund));
        localStorage.setItem('mentor', JSON.stringify(response.data.value.mentor));
        localStorage.setItem('visit', JSON.stringify(response.data.value.visit));
        localStorage.setItem('bookingDate', JSON.stringify(response.data.value.bookingDateVal));
        localStorage.setItem('visitDate', JSON.stringify(response.data.value.visitDateVal));
        navigate("/dashboard");
      })
      .catch(err => {
        setNotCorrect("Enter Valid Email or Password");
      });
  }

  return (
    <>
      <Modal
        {...props}
        centered
      >
        <div class="login-popup">
          <div class="login-header">
            <div class="text-wrapper">Login
              <div id="login-popup-close"><i id="close" class="fa fa-close" onClick={props.onHide}></i></div>
            </div>
          </div>
          <div class="login-form">
            <form>
              <div class="grp1">
                <label id="lb1">Email</label>
                <input id="input1" type='email' name="emailId" onChange={emailgetting} placeholder='yourname@gmail.com' required></input>
              </div>
              <div class="grp2">
                <label id="lb2">Password</label>
                <input id="input2" type="password" onChange={passwordGetting} name="pass" required></input>
                <div>{notCorrect}</div>
              </div>
              <div class="grp3">
                <a href='#' onClick={() => { active2(true); props.setModalShow(false)}} > Forget Password ?</a>
          </div>
          <div class="grp4">
            <button id="submit_btn" onClick={passSubmit} type='submit' style={{color:'#fff'}}>Login</button>
          </div>
        </form>
        <div class="login-footer">
          <div class="text-wrapper">Don't have an account?<Button id="signup_text" variant='primary' onClick={() => { active(true); props.setModalShow(false) }}>signup!</Button></div>
        </div>
      </div>
    </div >
      </Modal >
      <div class="signup-content">
        <Signup
          show={state}
          onHide={() => active(false)}
        />
      </div>

      <div class="signup-content">
        <Forget
          show={state2}
          onHide={() => active2(false)}
        />
      </div>
    </>
  );
}

export default Login