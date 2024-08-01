import '../../assets/styles/profile.css'
import TOPNAV from '../top-navigation.js'
import SIDENAV from '../side-nav.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Verified from '../../assets/icons/verified.png'
import Profile from '../../assets/images/profile.jpg'

function EditProfileInformation () {
  return (
    <>
      <div class='title-header'>
        <div class='text-wrapper'>Basic Information</div>
      </div>
      <div class='flex-1'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <label class='term text-wrapper'>Name</label>
            <input
              type='text'
              id='fullname'
              name='fullname'
              value={'Jhon smith'}
            ></input>
          </div>
          <div class='groups grp2'>
            <label class='term text-wrapper'>Email</label>
            <input
              type='email'
              id='email'
              name='emailId'
              value={'jhonsmith14@gmail.com'}
            ></input>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp3'>
            <label class='term-edit term text-wrapper'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={'jhon@14'}
            ></input>
          </div>
        </div>
      </div>
      
      <div class='title-header'>
        <div class='text-wrapper'>Student Information</div>
      </div>
      
     
    </>
  )
}

function DisplayProfileInformation () {

  const [userInformation, setuserInformation] = useState({});

  useEffect(() => {
    setuserInformation(JSON.parse(localStorage.getItem("userInformation")))
  }, []);

  return (
    <>
      <div class='title-header'>
        <div class='text-wrapper'>Industry Information</div>
      </div>
      <div class='flex-2' id='display-flex-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Industry Name</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.name}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Email</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.email}</div>
          </div>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Website</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.website}</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <div class='term text-wrapper'>GST Number</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>
              {userInformation.gstNumber}
            </div>
          </div>
          <div class='groups grp5'>
            <div class='term text-wrapper'>Phone</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.phone}</div>
          </div>
        </div>
      </div>
      <div class='title-header'>
        <div class='text-wrapper'>Industry Region</div>
      </div>
      <div class='flex-2' id='display-flex-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Street Name</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.street}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>City</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.city}</div>
          </div>
          <div class='groups grp3'>
            <div class='term text-wrapper'>District</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.district}</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <div class='term text-wrapper'>Pincode</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>
              {userInformation.pincode}
            </div>
          </div>
          <div class='groups grp5'>
            <div class='term text-wrapper'>State</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.state}</div>
          </div>
        </div>
      </div>
      
    </>
  )
}

function UserProfile () {
  const [edit, setEdit] = useState(0)
  let profilePage = 1

  const [userInformation, setuserInformation] = useState({});

  useEffect(() => {
    setuserInformation(JSON.parse(localStorage.getItem("userInformation")))
  }, []);

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
                <div class='progress-circle'>
                  <div class='text-wrapper' id='progress-num'>
                    20%
                  </div>
                  <img
                    src={Verified}
                    id='verified-img'
                    alt='verified-img'
                  ></img>
                </div>
              </div>
              <div class='wrapper-2 user-id'>
                <div class='username text-wrapper'>{userInformation.name}</div>
                <div class='title text-wrapper'>Student</div>
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
                {edit === 0 && <>{DisplayProfileInformation()}</>}
                {edit === 1 && <>{EditProfileInformation()}</>}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
