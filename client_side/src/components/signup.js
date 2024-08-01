import React, { useRef, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../assets/styles/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup(props) {

  const [otp, setOtp] = useState(new Array(4).fill())
  const [digit, setDidit] = useState('')
  const [otpError, setOtpError] = useState(null)
  const optBoxReference = useRef([])
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [conform, setComform] = useState('');
  const [notCorrect, setNotcorrect] = useState('')
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [validemail, setvalidemail]=useState('');

  function handleChange(value, index) {
    let newArray = [...otp]
    const digitValue = value.replace(/\D/g, '')
    newArray[index] = digitValue
    setOtp(newArray)

    if (value && index < 3 && digitValue != '') {
      optBoxReference.current[index + 1].focus()
    }
  }

  function handleBacksapceAndEnter(e, index) {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      optBoxReference.current[index - 1].focus()
    }
    if (e.key === 'Enter' && !e.target.value && index < 0) {
      optBoxReference.current[index + 1].focus()
    }
  }


  function emailGetting(e) {
    setemail(e.target.value);
  }

  function passwordGetting(e) {
    setPassword(e.target.value);
  }

  function comformPasswordGetting(e) {
    setComform(e.target.value);
  }

  function submit() {
    if (validation()) {
      axios.post("/verifyOtp", { email, otp: otp.map(Number).join(''), password: password })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            funtoken()
          } else {
            setNotcorrect("Enter a valid OTP");
          }
        }).catch(err => {
          console.log(err);
        });
    }
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
        console.log(err);
      });
  }

  // window.addEventListener('beforeunload', function (event) {
  //   localStorage.removeItem("userInformation");
  //   localStorage.removeItem("booking");
  //   localStorage.removeItem("work");
  //   localStorage.removeItem("fund");
  //   localStorage.removeItem("mentor");
  //   localStorage.removeItem("visit");
  // });


  const [showCountdown, setShowCountdown] = useState(false);
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    let timer;
    if (showCountdown && seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      setShowCountdown(false);
    }

    return () => clearTimeout(timer);
  }, [showCountdown, seconds]);

  function verify() {
   axios.post("/temporary", { email })
   .then(response =>{
    if (response.data.alrady){
      setvalidemail('Email Already Exist')
    }
   })
    .catch(err => {
      console.log(err);
    })
    setShowCountdown(true);
    setSeconds(180);
  }

  function validation() {
    if (!email || !password || !conform) {
      setError("All fields are required")
      return false;
    }

    if (password !== conform) {
      setError('Passwords do not match')
      return false;
    }
    return true;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.post("/token", { token })
      .then(response => {
        localStorage.setItem('userInformation', JSON.stringify(response.data.value.userInformation));
        console.log(response.data.value.userInformation);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  const close = () => {
    props.onHide();
    setShowCountdown(false);
  }

  return (
    <Modal {...props} centered>
      <div class='signup-popup'>
        <div class='signup-header'>
          <div class='text-wrapper'>
            Signup
            <div id='signup-popup-close'>
              <i id='close' class='fa fa-close' onClick={close}></i>
            </div>
          </div>
        </div>

        <div class='signup-form'>
          <div id='form'>
            <div class='grp2'>
              <label id='lb'>Email</label>
              <div action='#' class='grp2-child'>
                <input
                  id='input1'
                  type='email'
                  name='emailId'
                  placeholder='yourname@gmail.com'
                  required
                  onChange={emailGetting}
                ></input>
                {!showCountdown ? (
                  <button type='submit' id='verify_btn' variant='primary' onClick={verify}>
                    Send OTP
                  </button>) : (
                  <p id='verify_btn' variant='primary'>{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60}</p>
                )}
              </div>
              <div className='wrongalert'>{validemail}</div>
            </div>
            <div class='grp3'>
              <label id='lb'>Enter OTP</label>
              <div class='otp-box'>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    value={digit}
                    required
                    maxLength={1}
                    onChange={e => handleChange(e.target.value, index)}
                    onKeyUp={e => handleBacksapceAndEnter(e, index)}
                    ref={reference =>
                      (optBoxReference.current[index] = reference)
                    }
                  ></input>
                ))}

              </div>
              <div className='wrongalert'>{notCorrect}</div>
              <div className='wrongalert' >{error}</div>
            </div>
            <div class='grp4'>
              <label id='lb'>Password</label>
              <input type='password' name='pass' onChange={passwordGetting} required></input>
            </div>
            <div class='grp5'>
              <label id='lb'>Confirm Password</label>
              <input
                type='password'
                name='confirm_pass'

                required
                onChange={comformPasswordGetting}
              ></input>
            </div>
            <div class='signup-footer'>
              <div id='link_to_dashboard'>
                <button type='submit' id='reg_btn' onClick={submit}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Signup
