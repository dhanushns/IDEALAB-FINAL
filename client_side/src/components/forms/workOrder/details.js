import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';

function Personal({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    const today = new Date().toISOString().split('T')[0];


    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Details</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={50.00} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='formscroll'>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between '>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Job Work</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.JobWork} name='JobWork' onChange={getinput}>
                                            <option value=''>Select Option</option>

                                            <option value="3DPrinterModel">3D Printer Model</option>
                                            <option value="WoodenModel">Wooden Model</option>
                                            <option value="AcylicBoard">Acylic Board</option>
                                            <option value="Memento">Memento</option>
                                            <option value="ElectronicProduct">Electronic Product</option>

                                        </Form.Select>
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>Job Work Description</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="text" name='JobWorkDescription' required maxLength={500} placeholder='Maximun 500 characters' value={formData.JobWorkDescription} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>

                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>

                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>Quantity</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="number" min='1' max='10000000' name='Quantity' required value={formData.Quantity} onChange={getinput} />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Expected Date of Delivery</h>
                                        <Form.Control className='mt-1 p-1 shadows inwidth' type='date' min={today} max="2050-01-01" name='ExpectedDate' required value={formData.ExpectedDate} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>


                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Raw Material Requirement</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.RawMaterialRequirement} name='RawMaterialRequirement' onChange={getinput}>
                                            <option value=''>Select Option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                    </Col>
                                    {formData.RawMaterialRequirement === 'Yes' && (
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                            <h>Details of Raw Material Requirement</h>
                                            <Form.Control className='mt-1 p-1 shadows inwidth' name='RawMaterial' maxLength={200} placeholder='Maximum 200 characters' required value={formData.RawMaterial} onChange={getinput} />
                                        </Col>
                                    )}
                                </Row>
                            </div>

                            <div className="mt-5 w-100 d-flex justify-content-center">
                                <div className=" mb-5 d-flex flex-row-reverse justify-content-between bwidth" >
                                    <button className="p-2 ps-4 pe-4 border-0 rounded-3 " style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                        Next
                                    </button>
                                    <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                        onClick={() => { navigate('/dashboard') }}>
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Personal;
