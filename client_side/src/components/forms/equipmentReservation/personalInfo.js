import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Personal({ formData, setFormData, setPage }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        findEquipentDate(value);
    }
    const getinput2 = (date) => {
        setFormData({ ...formData, Reservationdate: new Date(date) });
        setStartDate(date);
    };

    const getinput3 = (date) => {
        setFormData({ ...formData, Endtime: new Date(date) });
        setEndDate(date);
    };



    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    const today = new Date().toISOString().split('T')[0];
    const [bookedDateAlrady, setbookedDateAlrady] = useState('');

    useEffect(() => {
        setbookedDateAlrady(JSON.parse(localStorage.getItem('bookingDate')))
    }, []);

    const [equipmentApprovedDate, setequipmentApprovedDate] = useState([]);

    function findEquipentDate(value) {
        const approvedDate = bookedDateAlrady[value];
        setequipmentApprovedDate(approvedDate);
        if (equipmentApprovedDate) {
            equipmentApprovedDate.forEach(item => {
                console.log(item.slice(8, 10))
            });
        }
    }

    const [Booked, setBooked] = useState([
        new Date(2024, 4, 25),
        new Date(2024, 1, 26)
    ]);


    const filterTime = time => {
        // Disable 9:00 AM on April 29, 2024
        setBooked(equipmentApprovedDate)


        // if (equipmentApprovedDate) {
        //     equipmentApprovedDate.forEach(item => {
        //         if (
        //             formData.Reservationdate &&
        //             formData.Reservationdate.getDate() === Number(item.slice(8, 10)) &&
        //             formData.Reservationdate.getMonth() === 04 &&
        //             formData.Reservationdate.getFullYear() === 2024
        //         ) {
        //             return time.getHours() !== 9;
        //         }
        //     });
        // }

        if (
            formData.Reservationdate &&
            formData.Reservationdate.getDate() === 29 &&
            formData.Reservationdate.getMonth() === 3 &&
            formData.Reservationdate.getFullYear() === 2024
        ) {
            return time.getHours() !== 9;
        }

        return true;
    };

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
                                        <h>Equipments</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.Equipments} name='Equipments' onChange={getinput}>
                                            <option value=''>Select Option</option>
                                            <option value="3DPrinter">3D Printer</option>
                                            <option value="3DScanner">3D Scanner</option>
                                            <option value="CO2LaserCutter">CO2 Laser Cutter</option>
                                            <option value="CNCPlasmaCutter">CNC Plasma Cutter</option>
                                            <option value="PCBPrototypeMachine">PCB Prototype Machine</option>
                                            <option value="TIGWeilding">TIG Weilding</option>
                                            <option value="MIGWeilding">MIG Weilding</option>
                                            <option value="Powertools">Powertools</option>
                                        </Form.Select>
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>Purpose</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="text" name='Purpose' maxLength={500} placeholder='Maximum 500 characters' required value={formData.Purpose} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>

                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>

                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Reservation Date</h>
                                        <div className='shadows inwidth datepick'>
                                            <DatePicker
                                                selected={formData.Reservationdate}
                                                name='Reservationdate'
                                                onChange={getinput2}
                                                minDate={today}
                                                selectsStart
                                                showTimeSelect
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                filterTime={filterTime}
                                                startDate={startDate}
                                                endDate={endDate}
                                                timeIntervals={60}
                                                required
                                                autoComplete='off'
                                                placeholderText='Start Date & TIme'
                                                className='w-100 mt-1 '
                                                excludeDates={Booked}
                                            />
                                            <DatePicker
                                                selected={formData.Endtime}
                                                name='Endtime'
                                                onChange={getinput3}
                                                startDate={startDate}
                                                endDate={endDate}
                                                selectsEnd
                                                minDate={startDate}
                                                showTimeSelect
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                filterTime={filterTime}
                                                timeIntervals={60}
                                                required
                                                autoComplete='off'
                                                disabled={!formData.Reservationdate}
                                                placeholderText='End Date & Time'
                                                className='w-100 mt-1 mb-1'
                                                excludeDates={Booked}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Raw Material Requirement</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.RawMaterialRequirement} name='RawMaterialRequirement' onChange={getinput}>
                                            <option value=''>Select Option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                            <div className='w-100 d-flex flex-column align-items-center'>
                                <div className='formdata'>
                                    <Row className='d-flex justify-content-between '>

                                        {formData.RawMaterialRequirement === 'Yes' && (
                                            <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                                <h>Details of Raw Material Requirement</h>
                                                <Form.Control className='mt-1 p-1 shadows inwidth' maxLength={500} placeholder='Maximum 500 characters' name='RawMaterial' required value={formData.RawMaterial} onChange={getinput} />
                                            </Col>
                                        )}
                                    </Row>
                                </div>
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