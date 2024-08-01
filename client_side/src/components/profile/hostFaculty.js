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
      <div class='flex-2 info-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <label class='term text-wrapper'>Register Number</label>
            <input
              type='number'
              id='regno'
              name='regno'
              value={'73772126114'}
            ></input>
          </div>
          <div class='groups grp2'>
            <label class='term text-wrapper'>Semester</label>
            <input type='number' id='sem' name='sem' value={'6'}></input>
          </div>
          <div class='groups grp3'>
            <label class='term text-wrapper'>Degree</label>
            <input
              type='text'
              id='degree'
              name='degree'
              value={'B.Tech'}
            ></input>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <label class='term text-wrapper'>Year</label>
            <input type='number' id='year' name='year' value={'3'}></input>
          </div>
          <div class='groups grp5'>
            <label class='term text-wrapper'>Course</label>
            <input
              type='text'
              id='course'
              name='course'
              value={'Artificial Intelligence and Data Science'}
            ></input>
          </div>
          <div class='groups grp4'>
            <label class='term text-wrapper'>Year of graduation</label>
            <input
              type='number'
              id='yearOfGraduation'
              name='yearOfGraduation'
              value={'2025'}
            ></input>
          </div>
        </div>
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
        <div class='text-wrapper'>Basic Information</div>
      </div>
      <div class='flex-1' id='display-flex-1'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Name</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.FacultyName}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Email</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.Email}</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Date of Birth</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.DateofBirth}</div>
          </div>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Phone</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.MobileNumber}</div>
          </div>
        </div>
      </div>
      <div class='title-header'>
        <div class='text-wrapper'>Academic Information</div>
      </div>
      <div class='flex-2' id='display-flex-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Faculty ID</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.FacultyID}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Department</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.Department}</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <div class='term text-wrapper'>Designation</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>
              {userInformation.Designation}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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

  const [userInformation, setuserInformation] = useState({});

  useEffect(() => {
    setuserInformation(JSON.parse(localStorage.getItem("userInformation")))
  }, []);

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
                <div class='username text-wrapper'>{userInformation.FacultyName}</div>
                <div class='title text-wrapper'>Faculty</div>
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
