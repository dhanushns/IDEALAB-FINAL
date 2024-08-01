import React, { useState, useEffect } from "react";
import TopNav from '../../../components/top-navigation'
import SideNav from '../../../components/side-navAdmin'
import '../../../assets/styles/dashBoard.css'
import Norecord from '../../../assets/images/no-record-found.png'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



function ScheduleVisitTable({ handleScroll }) {
    let dashBoard = 1

    const [visit, setvisit] = useState([]);

    useEffect(() => {
        setvisit(JSON.parse(localStorage.getItem('value')).schoolteacher);
    }, []);


    const [filtervalue, setfilterValue] = useState(null);
    const navigate = useNavigate();

    function filterValuegetting(e) {
        if (e.target.value === 'null') {
            return setfilterValue(null);
        }
        return setfilterValue(e.target.value)
    }


    return (
        <>
            <TopNav />
            <div class='db-modal'>
                <SideNav />
                <div class='db-content'>
                    <div className='d-flex flex-wrap mt-2 mb-2 justify-content-between'>
                        <div style={{ fontSize: '20px', color: "#fff" }}>School Teacher</div>
                    </div>
                    <div class='scrollable-content'>
                        <div class='table-modal'>
                            {dashBoard !== 0 &&
                                <>
                                    <div class='table-content' onScroll={handleScroll}>
                                        <div class='column-header'>
                                            <div class='column-title c-1'>S.No</div>
                                            <div class='column-title c-2'>Email</div>
                                            <div class='column-title mf'>More info..</div>
                                            <div class='column-title td c-3'>Name</div>
                                            <div class='column-title td c-5'>Date of Birth</div>
                                            <div class='column-title td c-6'>Phone</div>
                                            <div class='column-title td c-4'>Teacher ID</div>
                                            <div class='column-title td c-7'>UDISE Code</div>
                                        </div>
                                        {visit.map((item, i) => (

                                            <div class='table-rows' key={i}>
                                                <div class='row-flex' id={`row-flex-${i}`}>
                                                    <div id={`row-wrapper-${i}`} class='data-wrapper'>
                                                        <div class='row-data rd-1 text-wrapper'>{i + 1}</div>
                                                        <Link class='row-data rd-2 text-wrapper' to={`/admin/userinfo/${item.email}`} style={{ textDecoration: 'none' }}>{item.email}</Link>
                                                        <button
                                                            class='click-here-btn'
                                                            id={i}
                                                            onClick={() => { navigate(`/admin/userinfo/${item.email}`) }}
                                                        >
                                                            click here!
                                                        </button>
                                                        <div class='row-data rd-3 td text-wrapper'>{item.name}</div>
                                                        <div class='row-data rd-4 td text-wrapper'>{item.dob}</div>
                                                        <div class='row-data rd-5 td text-wrapper'>{item.phone}</div>
                                                        <div class='row-data rd-6 td text-wrapper'>{item.teacherId}</div>
                                                        <div class='row-data c-7 td text-wrapper'>{item.udiseCode}</div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </>}
                            {dashBoard !== 1 && (
                                <>
                                    <div class='no-record-found-content'>
                                        <div class='no-record-found'>
                                            <img src={Norecord} alt='no-record'></img>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleVisitTable;