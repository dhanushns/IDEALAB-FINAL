import React, { useEffect, useState } from "react";
import PersonalInfo from "../../components/forms/schoolLearner/personalInfo";
import AcademicInfo from "../../components/forms/schoolLearner/academic";
import Submit from "../../components/forms/schoolLearner/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        StudentName: "",
        DateofBirth: "",
        Address:"",
        phonenumber: "",
        email: JSON.parse(localStorage.getItem("userInformation")).email,
        StudentID: "",
        SchoolName: "",
        UDISECode: "",
        who:'schoolStudent',
    });

    const navigate = useNavigate();

    useEffect(()=>{
      if(!JSON.parse(localStorage.getItem('userInformation'))){
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
                <div className='db-content' style={{display:'flex',  flexDirection:'column',alignItems:'center'}}>
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
