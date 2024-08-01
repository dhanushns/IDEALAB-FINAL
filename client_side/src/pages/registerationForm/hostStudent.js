import React, { useEffect, useState } from "react";
import PersonalInfo from "../../components/forms/hostStudent/personalInfo";
import AcademicInfo from "../../components/forms/hostStudent/academic";
import Submit from "../../components/forms/hostStudent/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Name: "",
    DateofBirth: "",
    phonenumber: "",
    email: JSON.parse(localStorage.getItem("userInformation")).email,
    registerno: "",
    programme: "",
    course: "",
    semester: "",
    yearofstudy: "",
    yearofgraduate: "",
    who: "hoststudent",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('userInformation'))) {
      navigate("/");
    };
  }, []);


  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <AcademicInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else {
      return <Submit formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    }
  };

  return (
    <>
      <TopNav />
      <div class='db-modal'>
        <SideNav />
        <div className='db-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '95%' }}>
            <div className='h2 text-center hdmar ' style={{ color: '#fff' }}> REGISTRATION FORM</div>
            <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3 trans' >{PageDisplay()}</div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Form;



// import React from 'react'
// import '../styles/dashBoard.css'
// // import Dash from './dashboard'
// import Home from './home'
// import Forms from '../forms/host student/HS-index'
// import TopNav from '../components/top-navigation'
// import SideNav from '../components/side-nav'

// function Form() {
//   return (
//     <>
//       <TopNav />
//       <div class='db-modal'>
//         <SideNav />
//         <div className='db-content' style={{ paddingBottom: '0px' }}>
//           <div style={{ width: '95%' }}>
//             <div className='h2 text-center mt-3 mb-3' style={{ color: '#fff' }}> REGISTRATION FORM</div>
//             <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'><Forms /></div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Form;