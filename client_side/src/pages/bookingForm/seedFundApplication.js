import React, { useEffect, useState } from "react";
import MentorDetails from "../../components/forms/seedFundApplication/mentorDetails";
import ProjectDetails from "../../components/forms/seedFundApplication/projectDetails";
import ProjectDescription from "../../components/forms/seedFundApplication/description";
import Submit from "../../components/forms/seedFundApplication/submit";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-nav'
import '../../assets/styles/formStyles.css'
import { useNavigate } from "react-router-dom";

function Form() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        FacultyName: "",
        Designation: "",
        Department: "",
        Email: "",
        MobileNumber: "",
        Title: "",
        Domain: "",
        Category: "",
        Patentable: "",
        Level: "",
        ProblemStatement: "",
        ProposedSolution: "",
        Uniqueness: "",
        MarketPotential: "",
        TotalProjectCost: "",
        SeedFunRequested: "",
        Justification: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('userInformation'))) {
            navigate("/");
        };
    }, []);


    const PageDisplay = () => {
        if (page === 1) {
            return <ProjectDetails formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if (page === 2) {
            return <ProjectDescription formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
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
                        <div className='h2 text-center hdmar' style={{ color: '#fff' }}>Seedfund Application</div>
                        <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className='mb-3'>{PageDisplay()}</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Form;
