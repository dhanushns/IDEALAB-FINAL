import '../../../assets/styles/profile.css'
import TOPNAV from '../../../components/top-navigation.js'
import SIDENAV from '../../../components/side-navAdmin.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Verified from '../../../assets/icons/verified.png'
import Profile from '../../../assets/images/profile.jpg'


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
            <div class='description text-wrapper'>{userInformation.name}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Email</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.email}m</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Date of Birth</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.dob}</div>
          </div>
          <div class='groups grp3'>
            <div class='term text-wrapper'>phone</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.phone}</div>
          </div>
        </div>
      </div>
      <div class='title-header'>
        <div class='text-wrapper'>Student Information</div>
      </div>
      <div class='flex-2' id='display-flex-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Register Number</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.regNo}</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Semester</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.semester}</div>
          </div>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Degree</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.programme}</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <div class='term text-wrapper'>Course</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>
              {userInformation.course}
            </div>
          </div>
          <div class='groups grp5'>
            <div class='term text-wrapper'>Year of Study</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.yearOfStudy}</div>
          </div>
          <div class='groups grp5'>
            <div class='term text-wrapper'>Year of graduation</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>{userInformation.yearOfGraduate}</div>
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
