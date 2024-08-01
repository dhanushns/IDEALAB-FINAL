import '../../../assets/styles/profile.css'
import TOPNAV from '../../../components/top-navigation.js'
import SIDENAV from '../../../components/side-navAdmin.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Verified from '../../../assets/icons/verified.png'
import Profile from '../../../assets/images/profile.jpg'



function UserProfile () {
  const [edit, setEdit] = useState(0)
  let profilePage = 1

  return (
    <>
      <TOPNAV />
      <div class='up-modal'>
        <SIDENAV />
        <div class='up-content'>
          <div class='top-content'>
          </div>
          <div class='user-info-modal'>
            {profilePage !== 0 && (
              <>
                <div class='profile-incomplete blur-box'></div>
                <Link id='link-profile-btn'>
                  <button id='btn-complete'>No User Found</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
