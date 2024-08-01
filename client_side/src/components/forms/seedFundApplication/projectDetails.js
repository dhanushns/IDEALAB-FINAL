import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Academic({ formData, setFormData, setPage }) {

    const navigate = useNavigate();

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(2);
        console.log(formData)
    };

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Project Details</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Project Description</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Project Title</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='Title'  maxLength={100} required value={formData.Title} onChange={getinput} /></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Domain</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='Domain' maxLength={100} required value={formData.Domain} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Category</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' name='Category' required value={formData.Category} onChange={getinput}>
                                        <option value=''>Select Category</option>
                                        <option value="Product">Product</option>
                                        <option value="Process">Process</option>
                                        <option value="Service">Service</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Patentable</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' name='Patentable' required value={formData.Patentable} onChange={getinput}>
                                        <option value=''>Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Level</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' name='Level' required value={formData.Level} onChange={getinput}>
                                        <option value=''>Select Option</option>
                                        <option value="Idea">Idea</option>
                                        <option value="PoC">PoC</option>
                                        <option value="Prototype">Prototype</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Email</h>
                                    <input className='mt-1 p-1 shadows inwidth' type='email' name='Email' maxLength={50} required value={formData.Email} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex flex-row-reverse justify-content-between bwidth ">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { navigate('/dashboard') }}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div >
        </>
    )
}

export default Academic;