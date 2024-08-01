import React, { useEffect, useState } from "react";
import TopNav from '../../components/top-navigation'
import SideNav from '../../components/side-navAdmin'
import '../../assets/styles/dashBoard.css'
import Norecord from '../../assets/images/no-record-found.png'
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function pagination(p) {
    console.log(p - 1)
    let pages = document.getElementsByClassName('pages')
    pages[p - 1].style.backgroundColor = '#EF6C1B'
    pages[p - 1].style.color = 'white'
    for (let i = 0; i < pages.length; i++) {
        if (i !== p - 1) {
            pages[i].style.backgroundColor = 'white'
            pages[i].style.color = 'black'
        }
    }
}

let selectedRowIdText

function handleRows(event) {
    selectedRowIdText = document.getElementById(event.target.id)
    var rowId = selectedRowIdText.parentElement.getAttribute('id')
    var rootId = document
        .getElementById(rowId)
        .parentNode.firstElementChild.getAttribute('id')
    if (window.screen.width > 950) {
        document.getElementById(rowId).classList.toggle('show-row-data')
        document.getElementById(rootId).classList.toggle('show-active')
    } else {
        const row_id = document.getElementById(rowId)
        row_id.classList.remove('rows-expand')
        row_id.classList.add('row-popup')
        row_id.style.transition = 'none'
        document.body.style.overflow = 'hidden'
        selectedRowIdText.innerHTML = 'Show'
    }
    if (selectedRowIdText.innerHTML === 'Show') {
        selectedRowIdText.innerHTML = 'Hide'
    } else if (selectedRowIdText.innerHTML === 'Hide') {
        selectedRowIdText.innerHTML = 'Show'
    }
}

let parentElement

function displayTablePopup(event) {
    if (window.screen.width <= 950) {
        parentElement = document.getElementById(event.target.id).parentNode
            .parentNode.children[1]
        parentElement.classList.remove('rows-expand')
        parentElement.classList.add('row-popup')
        document.body.style.overflow = 'hidden'
    }
}

function handleRowPopup() {
    console.log(parentElement)
    parentElement.classList.remove('row-popup')
    parentElement.classList.add('rows-expand')
    document.body.style.overflow = 'auto'
}

function ScheduleVisitTable({ handleScroll }) {
    const [state, setActive] = useState(1)
    let dashBoard = 1
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleCloseModal2 = () => {
        setShowModal2(false);
    };

    const [work, setwork] = useState([])

    useEffect(() => {
        setwork(JSON.parse(localStorage.getItem('value')).work);
    }, []);

    function processFun(status) {
        if (status === null) {
            return "Pending"
        }
        return status
    }

    const [passingValue, setPassingValue] = useState(null);

    function processfun2(status, id) {
        if (status === null) {
            return (
                <>
                    <div><button className="aprove" onClick={() => { setShowModal(true); setPassingValue(id) }}>Approve</button></div>
                    <div><button className="reject" onClick={() => { setShowModal2(true); setPassingValue(id) }}>Reject</button></div>
                </>
            );
        }
        return status
    }

    function processfun3(status, id) {
        if (status === null) {
            return (
                <>
                    <button className="aproved" onClick={() => { setShowModal(true); setPassingValue(id) }}>Aprove</button>
                    <button className="rejectd" onClick={() => { setShowModal2(true); setPassingValue(id) }}>Reject</button>
                </>
            )
        }
        return status
    }

    const [filtervalue, setfilterValue] = useState(null);
    const navigate = useNavigate();

    function filterValuegetting(e) {
        if (e.target.value === 'null') {
            return setfilterValue(null);
        }
        return setfilterValue(e.target.value)
    }

    function passStatus(status) {
        axios.post("/admin", { work: 'process', id: passingValue, status, table: "work" })
        .catch(err=>{
            console.log(err);
        });
    }

    function setlogin(){
        const token = localStorage.getItem("token")
        axios.post('/admin', { work: 'token', token: token })
        .then(response=>{
            if (response.data.value){
                localStorage.setItem("value", JSON.stringify(response.data.value));
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <TopNav />
            <div class='db-modal'>
                <SideNav />
                <div class='db-content'>
                    <div className='d-flex flex-wrap mt-2 mb-2 justify-content-between'>
                        <div style={{ fontSize: '20px', color: "#fff" }}>Work Orders</div>
                        <div>
                            <Form.Select className='shadows inwidth' onChange={filterValuegetting} style={{ width: '130px' }}>
                                <option value="null">Pending</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Approved">Approved</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div class='scrollable-content'>
                        <div class='table-modal'>
                            {dashBoard !== 0 &&
                                <>
                                    <div class='table-content' onScroll={handleScroll}>
                                        <div class='column-header'>
                                            <div class='column-title c-1'>S.No</div>
                                            <div class='column-title c-2'>Email</div>
                                            <div class='column-title mf'>More info..</div>
                                            <div class='column-title td c-3'>Date Of Delivery</div>
                                            <div class='column-title td c-4'>Description</div>
                                            <div class='column-title td c-5'>Quantity</div>
                                            <div class='column-title td c-6'>Raw Materials</div>
                                            <div class='column-title td c-7'>Work</div>
                                            <div class='column-title td c-8' id='c8'>
                                                Status
                                            </div>
                                            <div class='column-title td c-9' id='c9'>
                                                Action
                                            </div>
                                        </div>
                                        {work.map((item, i) => (
                                            (item.process === filtervalue) ? (
                                                <div class='table-rows' key={i}>
                                                    <div class='row-flex' id={`row-flex-${i}`}>
                                                        <div id={`row-wrapper-${i}`} class='data-wrapper'>
                                                            <div class='row-data rd-1 text-wrapper'>{i + 1}</div>
                                                            <Link class='row-data rd-2 text-wrapper' to={`/admin/userinfo/${item.email}`} style={{textDecoration:'none'}}>{item.email}</Link>
                                                            <button
                                                                class='click-here-btn'
                                                                id={i}
                                                                onClick={event => {
                                                                    displayTablePopup(event)
                                                                }}
                                                            >
                                                                click here!
                                                            </button>
                                                            <div class='row-data rd-3 td text-wrapper'>{item.dateOfDelivery}</div>
                                                            <div class='row-data rd-4 td text-wrapper'>{item.description}</div>
                                                            <div class='row-data rd-5 td text-wrapper'>{item.quantity}</div>
                                                            <div class='row-data rd-6 td text-wrapper'>{item.rawMaterial}</div>
                                                            <div class='row-data c-7 td text-wrapper'>{item.work}</div>
                                                            <div class='row-data rd-8 td text-wrapper'>
                                                                {processFun(item.process)}
                                                            </div>
                                                            <div class='row-data rd-9 td text-wrapper'>
                                                                {processfun3(item.process, item.id)}
                                                            </div>
                                                        </div>
                                                        <div class='rows-expand' id={`handle-row-${i}`}>
                                                            <div
                                                                class='text-wrapper row-expand-btn'
                                                                onClick={event => {
                                                                    handleRows(event)
                                                                }}
                                                                id={`row-expand-btn-${i}`}
                                                            >
                                                                Show
                                                            </div>
                                                            <div class='expanded-content'>
                                                                <i
                                                                    class='fa fa-close'
                                                                    id='handle-popup-close'
                                                                    onClick={() => {
                                                                        handleRowPopup()
                                                                    }}
                                                                ></i>
                                                                <div class='ex-col-1 ex-cols'>
                                                                    <div class='row-wrapper r1'>
                                                                        <div class='r1-name'>Email</div>
                                                                        <div class='colon'>:</div>
                                                                        <Link class='r1-data' to={`/admin/userinfo/${item.email}`} style={{textDecoration:'none'}}>{item.email}</Link>
                                                                    </div>
                                                                    <div class='row-wrapper r1'>
                                                                        <div class='r1-name'>Date Of Delivery</div>
                                                                        <div class='colon'>:</div>
                                                                        <div class='r1-data'>{item.dateOfDelivery}</div>
                                                                    </div>
                                                                    <div class='row-wrapper r2'>
                                                                        <div class='r1-name'>Description</div>
                                                                        <div class='colon'>:</div>
                                                                        <div class='r1-data'>{item.description}</div>
                                                                    </div>
                                                                    <div class='row-wrapper r3'>
                                                                        <div class='r1-name'>Quantity</div>
                                                                        <div class='colon'>:</div>
                                                                        <div class='r1-data'>
                                                                            {item.quantity}
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div class='ex-col-2 ex-cols'>
                                                                <div class='row-wrapper r1'>
                                                                        <div class='r1-name'>Raw Materials</div>
                                                                        <div class='colon'>:</div>
                                                                        <div class='r1-data'>{item.rawMaterial}</div>
                                                                    </div>
                                                                    <div class='row-wrapper r2'>
                                                                        <div class='r1-name'>Work</div>
                                                                        <div class='colon'>:</div>
                                                                        <div class='r1-data'>{item.work}</div>
                                                                    </div>

                                                                    <div class='row-wrapper r4 d-flex justify-content-start me-3 mt-3 ms-3'>
                                                                        {processfun2(item.process, item.id)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                null
                                            )
                                        ))}
                                    </div>
                                </>}
                            {dashBoard !== 1 && (
                                <>
                                    <div class='no-record-found-content'>
                                        <div class='no-record-found'>
                                            <img src={Norecord} alt='no-record'></img>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} className='outeralt'>
                <div className='outeralt1'>
                    <div className='mt-3 mb-1 alterhead'>
                        <div className='inalter'>
                            <div onClick={handleCloseModal} className='closeal'><IoClose /></div>
                        </div>
                    </div>
                    <div className='mt-1 mb-2 alterhead'>
                        <div className='inalter2'>
                            <div className='altertext mb-2'>Confirm approval?</div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4 alterhead'>
                        <div className='inalter2 mb-3'>
                            <button className='alertbtn2' onClick={() => { passStatus("Approved"); handleCloseModal(); setlogin() }}>Approve</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2} className='outeralt'>
                <div className='outeralt2'>
                    <div className='mt-3 mb-1 alterhead'>
                        <div className='inalter'>
                            <div onClick={handleCloseModal2} className='closeal'><IoClose /></div>
                        </div>
                    </div>
                    <div className='mt-1 mb-2 alterhead'>
                        <div className='inalter2'>
                            <div className='altertext mb-2'>Confirm rejection?</div>
                            
                        </div>
                    </div>
                    <div className='mt-4 mb-4 alterhead'>
                        <div className='inalter2 mb-3'>
                            <button className='alertbtn' onClick={() => { passStatus("Rejected"); handleCloseModal2(); setlogin() }}>Reject</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ScheduleVisitTable