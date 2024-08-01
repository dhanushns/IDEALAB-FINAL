import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

function Academic({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const getinput2 = (e) => {
        const { value } = e.value;
        setFormData({ ...formData, course: e });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(2);
        console.log(formData)
    };
    const options = [
        { value: 'AppliedChemistry', label: 'Applied Chemistry' },
        { value: 'AppliedElectronics', label: 'Applied Electronics' },
        { value: 'AppliedGeology', label: 'Applied Geology' },
        { value: 'AppliedMathematics', label: 'Applied Mathematics' },
        { value: 'ArtificialIntelligenceDataScience', label: 'Artificial Intelligence and Data Science' },
        { value: 'ArtificialIntelligenceMachineLearning', label: 'Artificial Intelligence and Machine Learning' },
        { value: 'BiomedicalEngineering', label: 'Biomedical Engineering' },
        { value: 'CivilEngineering', label: 'Civil Engineering' },
        { value: 'CommunicationSystems', label: 'Communication Systems' },
        { value: 'ComputerIntegratedManufacturing', label: 'Computer Integrated Manufacturing' },
        { value: 'ComputerScienceBusinessSystem', label: 'Computer Science and Business System' },
        { value: 'ComputerScienceEngineering', label: 'Computer Science and Engineering' },
        { value: 'ComputerScienceEngineeringBigDataAnalytics', label: 'Computer Science and Engineering (Specialization in Big Data Analytics)' },
        { value: 'ComputerScienceEngineeringOperationsResearch', label: 'Computer Science and Engineering (Specialization in Operations Research)' },
        { value: 'ConstructionEngineeringManagement', label: 'Construction Engineering and Management' },
        { value: 'ControlInstrumentationEngineering', label: 'Control and Instrumentation Engineering' },
        { value: 'ElectricalElectronicsEngineering', label: 'Electrical & Electronics Engineering' },
        { value: 'ElectronicsCommunicationEngineering', label: 'Electronics & Communication Engineering' },
        { value: 'ElectronicsCommunicationVLSIDesign', label: 'Electronics and Communication (VLSI Design)' },
        { value: 'EmbeddedSystemTechnologies', label: 'Embedded System Technologies' },
        { value: 'EnergyEngineering', label: 'Energy Engineering' },
        { value: 'EngineeringDesign', label: 'Engineering Design' },
        { value: 'EnvironmentalEngineering', label: 'Environmental Engineering' },
        { value: 'EnvironmentalManagement', label: 'Environmental Management' },
        { value: 'FoodTechnology', label: 'Food Technology' },
        { value: 'GeoInformatics', label: 'Geo Informatics' },
        { value: 'HighVoltageEngineering', label: 'High Voltage Engineering' },
        { value: 'HydrologyWaterResourcesEngineering', label: 'Hydrology and Water Resources Engineering' },
        { value: 'IndustrialEngineering', label: 'Industrial Engineering' },
        { value: 'InformationTechnology', label: 'Information Technology' },
        { value: 'InformationTechnologyMultimedia', label: 'Information Technology (Specialization in Multimedia)' },
        { value: 'InternalCombustionEngineering', label: 'Internal Combustion Engineering' },
        { value: 'IrrigationWaterManagement', label: 'Irrigation Water Management' },
        { value: 'LaserElectroOpticalEngineering', label: 'Laser and Electro Optical Engineering' },
        { value: 'ManufacturingEngineering', label: 'Manufacturing Engineering' },
        { value: 'ManufacturingSystemsManagement', label: 'Manufacturing Systems and Management' },
        { value: 'MaterialScienceEngineering', label: 'Material Science and Engineering' },
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'MasterBusinessAdministration', label: 'Master of Business Administration' },
        { value: 'MechanicalEngineering', label: 'Mechanical Engineering' },
        { value: 'MechatronicsEngineering', label: 'Mechatronics Engineering' },
        { value: 'MedicalElectronics', label: 'Medical Electronics' },
        { value: 'MedicalPhysics', label: 'Medical Physics' },
        { value: 'NanoScienceTechnology', label: 'Nano Science and Technology' },
        { value: 'PolymerScienceEngineering', label: 'Polymer Science and Engineering' },
        { value: 'PowerElectronicsDrives', label: 'Power Electronics and Drives' },
        { value: 'PowerEngineeringManagement', label: 'Power Engineering and Management' },
        { value: 'PowerSystemsEngineering', label: 'Power Systems Engineering' },
        { value: 'PrintingPackagingTechnology', label: 'Printing and Packaging Technology' },
        { value: 'ProductDesignDevelopment', label: 'Product Design and Development' },
        { value: 'QualityEngineeringManagement', label: 'Quality Engineering and Management' },
        { value: 'RemoteSensingGeomatics', label: 'Remote Sensing and Geomatics' },
        { value: 'SoftwareEngineering', label: 'Software Engineering' },
        { value: 'SoilMechanicsFoundationEngineering', label: 'Soil Mechanics and Foundation Engineering' },
        { value: 'StructuralEngineering', label: 'Structural Engineering' },
        { value: 'TextileTechnology', label: 'Textile Technology' },
        { value: 'TourismManagement', label: 'Tourism Management' },
        { value: 'TransportationEngineering', label: 'Transportation Engineering' },
        { value: 'VLSIDesign', label: 'VLSI Design' },
        {value: 'Other', label: 'Other'}
    ];
    
    
    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 className='fonthide'>Personal Info</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Academic Info</Col>
                            <Col sm-4 style={{ opacity: '0.5' }} className='fonthide'>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>

                    <form onSubmit={handleFormSubmit} className='formscroll'>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between '>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Register Number</h>
                                        <input className='mt-1 p-1 shadows inwidth' name='registerno' maxLength={30} required value={formData.registerno} onChange={getinput} /></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Programme</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.programme} name='programme' onChange={getinput}>
                                            <option value=''>Select Programme</option>
                                            <option value="Undergraduate">Undergraduate</option>
                                            <option value="Postgraduate">Postgraduate</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Course</h>
                                        {/* <input className='mt-1 p-1 shadows inwidth' name='course' required value={formData.course} onChange={getinput} /> */}
                                        <Select
                                            options={options}
                                            value={formData.course}
                                            onChange={getinput2} // Pass the handleChange function directly
                                            placeholder="Select Course"
                                            isSearchable
                                            className='mt-1 inwidth shadows'
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                }),
                                            }}
                                            noOptionsMessage={() => "Not Found"}
                                            required
                                        />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Semester</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.semester} name='semester' onChange={getinput}>
                                            <option value=''>Select Semester</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                            <option value="Four">Four</option>
                                            <option value="Five">Five</option>
                                            <option value="Six">Six</option>
                                            <option value="Seven">seven</option>
                                            <option value="Eight">Eight</option>
                                            <option value="Nine">Nine</option>
                                            <option value="Ten">Ten</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Year of Studying</h>
                                        <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.yearofstudy} name='yearofstudy' onChange={getinput}>
                                            <option value=''>Select Year</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                            <option value="III">III</option>
                                            <option value="IV">IV</option>
                                            <option value="V">V</option>
                                        </Form.Select>
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                        <h>Year of Graduation</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="number" min='1950' max='2050' required p name='yearofgraduate' value={formData.yearofgraduate} onChange={getinput} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className="mb-5 d-flex flex-row-reverse justify-content-between bwidth ">
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