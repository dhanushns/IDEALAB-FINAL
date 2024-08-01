import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoClose } from "react-icons/io5";

function Submit({ formData, setFormData, setPage }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const navi = () => {
        setShowModal(false);
        navigate('/dashboard');
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        axios.post("/token", { token })
            .then(response => {
                console.log(response.data);
                localStorage.setItem('userInformation', JSON.stringify(response.data.value.userInformation));
                localStorage.setItem('booking', JSON.stringify(response.data.value.booking));
                localStorage.setItem('work', JSON.stringify(response.data.value.work));
                localStorage.setItem("fund", JSON.stringify(response.data.value.fund));
                localStorage.setItem('mentor', JSON.stringify(response.data.value.mentor));
                localStorage.setItem('visit', JSON.stringify(response.data.value.visit));
                setShowModal(true);
            })
            .catch(err => {
                navigate("/")
            });


    };

    function endSubmit() {
        formData.email = JSON.parse(localStorage.getItem("userInformation")).email;
        axios.post("/visite", formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 className='fonthide'>Details</Col>
                            <Col sm-4 className='fonthide'>Accommodation</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Submit</Col>
                        </Row>
                        <ProgressBar now={100} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} />
                    </Row>
                    <form onSubmit={handleFormSubmit} className='formscroll'>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Date of visit</h><p className='mt-1 p-1 shadows inwidth' >{formData.DateofVisit.toString().slice(0, 16)}</p></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>In-Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.InTime}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Purpose</h><p className='mt-1 p-1 shadows inwidth' >{formData.Purpose}</p></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>No. of Visitors</h><p className='mt-1 p-1 shadows inwidth' >{formData.Visitors}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Accommodation</h><p className='mt-1 p-1 shadows inwidth' >{formData.Accommodation}</p></Col>
                                    {formData.Accommodation === 'Yes' && (
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>No. of Days</h><p className='mt-1 p-1 shadows inwidth' >{formData.NoOfDays}</p></Col>)}
                                </Row>
                            </div>
                            <div className='formdata'>
                                {formData.Accommodation === 'Yes' && (
                                    <Row className='d-flex justify-content-between'>
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Check in Date and Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.inTime}</p></Col>
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Check out Date and Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.outTime}</p></Col>
                                    </Row>)}
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className="mb-5 d-flex flex-row-reverse justify-content-between bwidth">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit" onClick={endSubmit}>
                                    Submit
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(1) }}>
                                    Previous
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} className='outeralt' backdrop="static">
                <div className='outeralt2'>
                    <div className='mt-3 mb-1 alterhead'>
                        <div className='inalter'>
                        </div>
                    </div>
                    <div className='mt-1 mb-2 alterhead'>
                        <div className='inalter2'>
                            <div className='altertext mb-2'>
                                <div className='text-center'>Booking completed</div>
                                <div className='text-center'>Request in process, We'll mail you later.</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4 alterhead'>
                        <div className='inalter2 mb-3'>
                            <button className='alertbtn' to='/register' onClick={navi}>Okay</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Submit;