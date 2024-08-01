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

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 className='fonthide'>Personal Info</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Academic Info</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Faculty ID</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='FacultyID' maxLength={50} required value={formData.FacultyID} onChange={getinput} /></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Designation</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='Designation' maxLength={100} required value={formData.Designation} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Department</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='Department' maxLength={100} required value={formData.Department} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Institute Type</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.InstituteType} name='InstituteType' onChange={getinput}>
                                        <option value=''>Select Institute Type</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Arts&Science">Arts & Science</option>
                                        <option value="Polytechnic">Polytechnic</option>
                                        <option value="ITI">ITI</option>
                                        <option value="Medical">Medical</option>
                                    </Form.Select>
                                </Col>

                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Institute Name</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='InstituteName' maxLength={250} required value={formData.InstituteName} onChange={getinput} />
                                </Col>

                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>AISHE Code</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='AISHECode' maxLength={50} required value={formData.AISHECode} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex flex-row-reverse justify-content-between bwidth ">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
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