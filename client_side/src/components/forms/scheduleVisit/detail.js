import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Personal({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const getinput2 = (date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        setFormData({ ...formData, DateofVisit: newDate });
    };

    const getExitDate = (date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        setFormData({ ...formData, ExitofVisit: newDate });
    }

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    const today = new Date().toISOString().split('T')[0];
    const [Booked, setBooked] = useState([
        new Date(2024, 4, 25),
        new Date(2024, 1, 26)
    ]);

    useEffect(()=>{
        setBooked(JSON.parse(localStorage.getItem('visitDate')));
    }, [])
    const isDateDisabled = (date) => {
        const dateString = date.toISOString().split('T')[0];
        const disabledDates = ['2024-04-25', '2024-04-30', '2024-05-01'];
        return disabledDates.includes(dateString);
    };

    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }} >Details</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Accommodation</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='formscroll'>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Visiting Date </h>
                                        {/* <Form.Control className='mt-1 p-1 shadows inwidth' type='datetime-local' min={today} max="2050-01-01" name='DateofVisit' required value={formData.DateofVisit} onChange={getinput} /> */}
                                        <DatePicker
                                            selected={formData.DateofVisit}
                                            name='DateofVisit'
                                            onChange={getinput2}
                                            minDate={today}
                                            excludeDates={Booked}
                                            className='shadows inwidth'
                                            required
                                            autoComplete='off'
                                        />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>In-Time</h>
                                        <Form.Control className='mt-1 p-1 shadows inwidth' type='time' name='InTime' required value={formData.InTime} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Departure Date </h>
                                        {/* <Form.Control className='mt-1 p-1 shadows inwidth' type='datetime-local' min={today} max="2050-01-01" name='DateofVisit' required value={formData.DateofVisit} onChange={getinput} /> */}
                                        <DatePicker
                                            selected={formData.ExitofVisit}
                                            name='ExitofVisit'
                                            onChange={getExitDate}
                                            minDate={today}
                                            excludeDates={Booked}
                                            className='shadows inwidth'
                                            required
                                            autoComplete='off'
                                        />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Out-Time</h>
                                        <Form.Control className='mt-1 p-1 shadows inwidth' type='time' name='ExitTime' required value={formData.ExitTime} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Purpose</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="text" name='Purpose' maxLength={500} placeholder='Maximum 500 characters' required value={formData.Purpose} onChange={getinput} />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>No. of Visitors</h>
                                        <input className='mt-1 p-1 shadows inwidth' type='number' name='Visitors' min='1' max='99' required value={formData.Visitors} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className=" mb-5 d-flex flex-row-reverse justify-content-between bwidth" >
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3 " style={{ background: '#EF6C1B', color: '#fff' }}  type="submit">
                                    Next
                                </button>
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { navigate('/dashboard') }}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Personal;