import React, { useState, useEffect } from "react";
import EntrepreneurInfo from "../../components/forms/entrepreneur/entrepreneurInfo";
import EntrepreneurRegion from "../../components/forms/entrepreneur/entrepreneurRegion";
import Submit from "../../components/forms/entrepreneur/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/dashBoard.css'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        IndustryName: "",
        phonenumber: "",
        email: JSON.parse(localStorage.getItem("userInformation")).email,
        website: "",
        StreetName: "",
        City: "",
        District: "",
        State: "",
        Pincode: "",
        who:"entrepreneurs"
    });

    const navigate = useNavigate();

    useEffect(()=>{
      if(!JSON.parse(localStorage.getItem('userInformation'))){
        navigate("/");
      };
    }, []);

    const PageDisplay = () => {
        if (page === 0) {
            return <EntrepreneurInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <EntrepreneurRegion formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
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
