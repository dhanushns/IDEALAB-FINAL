import React, { useEffect } from 'react'
import '../assets/styles/side-nav.css'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Profile from '../assets/images/profile.jpg'
import { Button, Modal } from 'react-bootstrap';
import { IoClose } from "react-icons/io5";


function sideNavControl() {
  var control = document.getElementById('controller')
  let control_pos = document.getElementById('controller-pos')
  if (control.classList[1] === 'fa-angle-left') {
    document.getElementsByClassName('side-nav-modal')[0].style.width = '30px'
    control.classList.remove('fa-angle-left')
    control.classList.add('fa-angle-right')
    control_pos.style.left = "3px";
  } else {
    if (window.screen.width <= 850) {
      document.getElementsByClassName('side-nav-modal')[0].style.width = '100%'
      document.getElementById('controller-pos').style.left = '90%'
    } else {
      document.getElementsByClassName('side-nav-modal')[0].style.width = '400px'
      control_pos.style.left = "80%";
    }
    control = document.getElementById('controller')
    control.classList.remove('fa-angle-right')
    control.classList.add('fa-angle-left')
  }
}
function SideNav() {
  const [open ,setopen]=useState(false)
  const [showModal, setShowModal] = useState(false);
  const check = JSON.parse(localStorage.getItem("userInformation"));

  useEffect(()=>{
    if(check && !check.phone){
      setopen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();
  const navi = () => {
    setShowModal(false);
    navigate('/register');
  }

  function logoutFun(){
    localStorage.removeItem("token")
    localStorage.removeItem('userInformation');
    localStorage.removeItem('booking');
    localStorage.removeItem('work');
    localStorage.removeItem("fund");
    localStorage.removeItem('mentor');
    localStorage.removeItem('visit');
    localStorage.removeItem('bookingDate');
    localStorage.removeItem('visitDate');
    navigate("/");
  }

  const [userInformation, setuserInformation] = useState({});

  useEffect(() => {
    setuserInformation(JSON.parse(localStorage.getItem("userInformation")))
  }, []);

  return (
    <>
      <div
        class='side-nav-modal'
        onClick={() => {
          sideNavControl()
        }}
      >
        <div class='nav-content'>
          <div class='nav-header'>
            <div class='profile'>
              <img src={Profile} alt='profile' id='side-nav-profile'></img>
            </div>
            <div class='username text-wrapper'>User</div>
          </div>
          <div class='navs'>
            <Link id='link_to_dashboard' to='/dashboard' onClick={() => { }}>
              Dashboard
            </Link>
            <Link id='link_to_profile' to='/profile'>
              Profile
            </Link>
            <a className='hoverpoint'
              onClick={()=>{
                if(open){
                  setShowModal(true);
                }
                else{
                  navigate('/schedulevisit');
                }
              }}
            >
              Schedule Visit
            </a>
            <a className='hoverpoint'
               onClick={()=>{
                if(open){
                  setShowModal(true);
                }
                else{
                  navigate('/equipmentreservation');
                }
              }}
            >
              Equipment Reservation
            </a>
            <a className='hoverpoint'
              onClick={()=>{
                if(open){
                  setShowModal(true);
                }
                else{
                  navigate('/Workorder');
                }
              }}
            >
              Work Order
            </a>
            <a className='hoverpoint'
             onClick={()=>{
              if(open){
                setShowModal(true);
              }
              else{
                navigate('/seedfundapplication');
              }
            }}
            >
              Seed Fund Application
            </a>
          </div>
          <div class='nav-footer'>
            <div id='link_to_home'>
              <button id='logout-btn' onClick={logoutFun}>Logout</button>
            </div>
          </div>
          <div class='side-nav-control' id='controller-pos'>
            <i id='controller' class='fa fa-angle-right'></i>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} className='outeralt'>
        <div className='outeralt2'>
          <div className='mt-3 mb-1 alterhead'>
            <div className='inalter'>
              <div onClick={handleCloseModal} className='closeal'><IoClose /></div>
            </div>
          </div>
          <div className='mt-1 mb-2 alterhead'>
            <div className='inalter2'>
              <div className='altertext mb-2'>Complete your profile</div>
            </div>
          </div>
          <div className='mt-4 mb-4 alterhead'>
            <div className='inalter2 mb-3'>
              <button className='alertbtn' to='/register' onClick={navi}>Click Here</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SideNav











// import React, { useState } from 'react';

// function DateComponent() {
//   const [date, setDate] = useState(new Date());

//   const addOneDay = () => {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + 1);
//     setDate(newDate);
//   };

//   return (
//     <div>
//       <p>Current Date: {date.toString()}</p>
//       <button onClick={addOneDay}>Add 1 Day</button>
//     </div>
//   );
// }

// export default DateComponent;
