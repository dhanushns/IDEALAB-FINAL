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
