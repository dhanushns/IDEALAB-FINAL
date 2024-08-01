import React from 'react'
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
  const [open ,setopen]=useState(null)
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    if(open===null){
      setShowModal(true);
    }
    else{
      alert("hello")
    }
    
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();
  const navi = () => {
    setShowModal(false);
    navigate('/register');
  }

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
            <div class='username text-wrapper'>Admin</div>
          </div>
          <div class='navs'>
            <Link id='link_to_dashboard' to='/admin' onClick={() => { }}>
              Dashboard
            </Link>
            <Link to='/admin/schedulevisit' className='hoverpoint'>
              Schedule Visit
            </Link>
            <Link to='/admin/equipmentreservation' className='hoverpoint'>
              Equipment Reservation
            </Link>
            <Link to='/admin/workorder' className='hoverpoint'>
              Word Order
            </Link>
            <Link to='/admin/seedfundapplication' className='hoverpoint'>
              Seed Fund Application
            </Link>
          </div>
          <div class='nav-footer'>
            <Link id='link_to_home' to='/'>
              <button id='logout-btn'>Logout</button>
            </Link>
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