import '../../assets/styles/profile.css'
import TOPNAV from '../top-navigation.js'
import SIDENAV from '../side-nav.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Verified from '../../assets/icons/verified.png'
import Profile from '../../assets/images/profile.jpg'



function UserProfile () {
  const [edit, setEdit] = useState(0)
  let profilePage = 1

  useEffect(() => {
    if (profilePage === 1) {
      document.documentElement.style.setProperty(
        '--profile-incomplete',
        '--profile-completion'
      )
      document.documentElement.style.setProperty(
        '--handle-animation',
        '--profile-completion'
      )
      document.getElementById('progress-num').style.display = 'none'
      document.getElementById('verified-img').style.display = 'block'
    }
    if (profilePage === 0) {
      document.documentElement.style.setProperty('--profile-incomplete', '570')
      document.documentElement.style.setProperty('--handle-animation', '690')
      document.getElementById('progress-num').style.display = 'block'
      document.getElementById('verified-img').style.display = 'none'
    }
  })

  const handleProfile = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      const dataURL = reader.result
      document.getElementById('user-profile').setAttribute('src', dataURL)
      document.getElementById('side-nav-profile').setAttribute('src', dataURL)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <TOPNAV />
      <div class='up-modal'>
        <SIDENAV />
        <div class='up-content'>
          <div class='top-content'>
            <div class='profile'>
              <div class='wrapper-1'>
                <div class='outer-cirlce progress-line'>
                  <div class='inner profile-img'>
                    <img src={Profile} alt='profile' id='user-profile'></img>
                  </div>
                  <label for='profile-upload' class='custom-upload'>
                    <span>Edit</span>
                  </label>
                  <input
                    type='file'
                    accept='image/*'
                    id='profile-upload'
                    onChange={handleProfile}
                  />
                </div>
                <svg
                  xmlns='http://www.w3.org./2000/svg'
                  version='1.1'
                  width={'230'}
                  height={'230'}
                >
              
                </svg>
                <div class='progresse'>
                  <div class='text-wrapper' id='progress-num'>
                    20%
                  </div>
                  <p id='verified-img'></p>
                </div>
              </div>
              <div class='wrapper-2 user-id'>
                <div class='username text-wrapper'>User</div>
                <div class='title text-wrapper'></div>
              </div>
            </div>
            {/* {profilePage !== 0 && (
              <>
                <button
                  class='profile-btns'
                  id='edit-btn'
                  onClick={() => {
                    setEdit(1)
                    document.getElementById('edit-btn').style.display = 'none'
                    document.getElementById('save-btn').style.display = 'block'
                  }}
                >
                  Edit
                </button>
                <button
                  class='profile-btns'
                  id='save-btn'
                  onClick={() => {
                    setEdit(0)
                    document.getElementById('edit-btn').style.display = 'block'
                    document.getElementById('save-btn').style.display = 'none'
                  }}
                >
                  Save
                </button>
              </>
            )} */}
          </div>
          <div class='user-info-modal'>
            {profilePage !== 0 && (
              <>
                <div class='profile-incomplete blur-box'></div>
                <Link id='link-profile-btn' to='/register'>
                  <button id='btn-complete'>Complete Profile</button>
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
