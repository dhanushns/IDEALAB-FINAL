import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';

function Academic({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(2);
        console.log(formData)
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 className='fonthide'>Details</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Accommodation</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>

                    <form onSubmit={handleFormSubmit} className='formscroll'>
                        <div className='w-100 d-flex flex-column align-items-center '>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between '>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Accommodation</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.Accommodation} name='Accommodation' onChange={getinput}>
                                            <option value=''>Select Option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                    </Col>
                                    {formData.Accommodation === 'Yes' && (
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                            <h>No. of Days</h>
                                            <Form.Control className='mt-1 p-1 shadows inwidth' name='NoOfDays' type='number' min='1' max='99' required value={formData.NoOfDays} onChange={getinput} />
                                        </Col>
                                    )}
                                </Row>
                            </div>
                            <div className='formdata'>
                                {formData.Accommodation === 'Yes' && (
                                    <Row className='d-flex justify-content-between'>
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                            <h>Check in Date and Time</h>
                                            <Form.Control className='mt-1 p-1 shadows inwidth' type="datetime-local" min={today} max="2050-01-01" name='inTime' required value={formData.inTime} onChange={getinput} />
                                        </Col>
                                        <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                            <h>Check out Date and Time</h>
                                            <Form.Control className='mt-1 p-1 shadows inwidth' type="datetime-local" min={today} max="2050-01-01" name='outTime' required value={formData.outTime} onChange={getinput} />
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className="mb-5 d-flex flex-row-reverse justify-content-between bwidth ">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} onClick={()=> {setPage(2)}}>
                                    Next
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(0) }}>
                                    Previous
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