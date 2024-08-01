import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/formStyles.css'

function YourComponent({ formData, setFormData, setPage }) {
    const navigate = useNavigate();

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Entrepreneur Info</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Region</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Industry Name</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='IndustryName'  maxLength={250} required value={formData.IndustryName} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Phone Number</h>
                                    <input className='mt-1 p-1 shadows inwidth' type="tel" pattern='[0-9]{10}' title='Enter Valid 10 Digit Number' name='phonenumber' required value={formData.phonenumber} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>E-Mail</h>
                                   <div className='mt-1 p-1 shadows inwidth'>{formData.email}</div>
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Website</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='website'  maxLength={250} required value={formData.website} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        {/* <div className='formdata'>
                            <Row className='d-flex justify-content-Start'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 position-relative padding'>
                                    <h>Proof of Registration/Certificate as start-up</h>
                                    <div className='position-relative'>
                                        <input className='mt-1 p-1 shadows inwidth' name='Proof' type='text' required value={formData.Proof} onChange={getinput} />
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex flex-row-reverse justify-content-between bwidth" >
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
                                </button>
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} onClick={() => { navigate('/register') }}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    );
}

export default YourComponent;

