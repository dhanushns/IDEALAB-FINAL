import React, { useEffect, useState } from "react";
import Detail from "../../components/forms/scheduleVisit/detail";
import Accommodation from "../../components/forms/scheduleVisit/accommodation";
import Submit from "../../components/forms/scheduleVisit/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        DateofVisit: "",
        InTime: "",
        Purpose: "",
        Visitors: "",
        Accommodation: "",
        NoOfDays: "",
        inTime: "",
        outTime: "",
        ExitTime:"",
        ExitofVisit:"",
        
    });

    const navigate = useNavigate();

    useEffect(()=>{
      if(!JSON.parse(localStorage.getItem('userInformation'))){
        navigate("/");
      };
    }, []);


    const PageDisplay = () => {
        if (page === 0) {
            return <Detail formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Accommodation formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
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
            <div className='h2 text-center hdmar' style={{ color: '#fff' }}>Schedule Visit</div>
            <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Form;