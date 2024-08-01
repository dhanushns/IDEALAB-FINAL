import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../assets/styles/topNav.css'
import Signup from './signup'
import Login from './login'
import Logo1 from '../assets/images/logo1.png'
import Logo2 from '../assets/images/logo2.png'
import Logo3 from '../assets/images/logo3.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  
  const [modalShow, setModalShow] = React.useState(false);
  const loginIs = "Login/signup" || JSON.parse(localStorage.getItem('userInformation')).email;
  const navigate = useNavigate();


  function loginPupup(){
    if(localStorage.getItem('userInformation')){
      navigate("/dashboard");
    }else{
      setModalShow(true);
    }
  }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <nav class = "top-nav">
      <div class = "navigations">
        <div class = "child-1 left-icons">
          <div class = "logo logo-1">
            <img src={Logo1} width='150' height='150' alt = "KSRCT Logo" id = "l"></img>
          </div>
          <div class = "logo logo_2">
            <img src= {Logo2} alt = "AICTE Logo" id = "l"></img>
          </div>
          <div class = "logo logo_3">
          <img src = {Logo3} alt = "IdeaLab Logo" id = "l" style={{width:'38px', height:'65px', paddingTop:'10px'}}></img>
          </div>
          <div class = "text-wrapper" style={{fontSize:'20px',fontWeight:'bold'}}>KSRCT - IdeaLab</div>
        </div>
        <div class = "child-2 right-navigations">
          <div class = "text-wrapper"><a href = "/">Home</a></div>
          <div class = "text-wrapper"><a href = "#">About <i id = "close" class="fa fa-angle-down"></i></a></div>
          <div class = "text-wrapper"><a href = "#">Blog</a></div>
          <div class = "text-wrapper"><a href = "#">AICTE</a></div>
          <div class = "text-wrapper signup signout"><Button className = "login_btn logout_btn" variant='primary' onClick={loginPupup}>{loginIs}</Button></div>
        </div>
      </div>
      <div class = "icon"> <i id = "top-right-icon" class="fa fa-bars" onClick = {()=>{
        document.getElementsByClassName("hidden-nav")[0].style.display = "block";
      }}></i></div> 
    </nav>
    <div class = "hidden-nav">
      <div class = "icon"> <i id = "close" class="fa fa-close" onClick = {()=>{
        document.getElementsByClassName("hidden-nav")[0].style.display = "none";
      }}></i></div>
        <div class = "navigations">
          <div class = "text-wrapper"><a href = "/">Home</a></div>
          <div class = "text-wrapper"><a href = "#">About</a></div>
          <div class = "text-wrapper"><a href = "#">Blog</a></div>
          <div class = "text-wrapper"><a href = "#">AICTE</a></div>
          <div class = "text-wrapper signup signout"><Button className = "login_btn logout_btn" variant='primary' onClick={loginPupup}>{loginIs}</Button></div>
        </div>
    </div>
    <div class = "login">
      <Login 
      show = {modalShow}  
      onHide={() => setModalShow(false)}
      setModalShow = {setModalShow}
      />
    </div>
    </>
  );
}

export default Home;