import React, { useEffect, useState } from "react";
import PersonalInfo from "../../components/forms/otherFaculty/personalInfo";
import AcademicInfo from "../../components/forms/otherFaculty/academic";
import Submit from "../../components/forms/otherFaculty/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        FacultyName: "",
        DateofBirth: "",
        phonenumber: "",
        email: JSON.parse(localStorage.getItem("userInformation")).email,
        FacultyID: "",
        Designation: "",
        Department: "",
        InstituteType:"",
        InstituteName: "",
        AISHECode: "",
        who: 'otherFaculty',
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
                        <div className='h2 text-center hdmar' style={{ color: '#fff' }}> REGISTRATION FORM</div>
                        <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
