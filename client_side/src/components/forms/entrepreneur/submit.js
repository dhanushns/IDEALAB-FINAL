import React,{useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { IoClose } from "react-icons/io5";

function Submit({ formData, setFormData, setPage }) {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    function logoutFun(){
        localStorage.removeItem("token")
        localStorage.removeItem('userInformation');
        localStorage.removeItem('booking');
        localStorage.removeItem('work');
        localStorage.removeItem("fund");
        localStorage.removeItem('mentor');
        localStorage.removeItem('visit');
        localStorage.removeItem('bookingDate');
        localStorage.removeItem('visitDate');
        navigate("/");
      }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    function endSubmit() {
        axios.post("/update", formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);;
            });
            setShowModal(true);
    }

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 className='fonthide'>Entrepreneur Info</Col>
                            <Col sm-4 className='fonthide'>Entrepreneur region</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Submit</Col>
                        </Row>
                        <ProgressBar now={100} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} />
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll'>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Industry Name</h><p className='mt-1 p-1 shadows inwidth' >{formData.IndustryName}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Phone Number</h><p className='mt-1 p-1 shadows inwidth' >{formData.phonenumber}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>

                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Email</h><p className='mt-1 p-1 shadows inwidth' >{formData.email}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Website</h><p className='mt-1 p-1 shadows inwidth' >{formData.website}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Street Name</h><p className='mt-1 p-1 shadows inwidth' >{formData.StreetName}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>City</h><p className='mt-1 p-1 shadows inwidth' >{formData.City}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>District</h><p className='mt-1 p-1 shadows inwidth' >{formData.District}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>State</h><p className='mt-1 p-1 shadows inwidth' >{formData.State}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-start'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Pincode</h><p className='mt-1 p-1 shadows inwidth' >{formData.Pincode}</p></Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex flex-row-reverse justify-content-between bwidth">
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
                                <div className='text-center'>Profile Completed</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4 alterhead'>
                        <div className='inalter2 mb-3'>
                            <button className='alertbtn' to='/register' onClick={logoutFun}>Okay</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Submit;
