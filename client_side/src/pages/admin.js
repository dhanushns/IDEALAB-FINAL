import '../assets/styles/admin.css'
import TOPNAV from '../components/top-navigation.js'
import SIDENAV from '../components/side-navAdmin.js'
import ScheduleVisitTable from '../components/dashboardTables/scheduleVisitTable.js'
import EquipmentReservationTable from '../components/dashboardTables/equipmentReservationTable'
import WorkOrder from '../components/dashboardTables/workOrderTable.js'
import SeedFundApplication from '../components/dashboardTables/seedFundApplicationTable'
import NoRecord from '../assets/images/no-record-found.png'
import { useEffect, useState } from 'react'
import db1 from '../assets/images/d1.png'
import db2 from '../assets/images/d2.png'
import db3 from '../assets/images/db3.png'
import db4 from '../assets/images/db4.png'
import axios from 'axios'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Dashboard() {
  const [state, setActive] = useState(1)
  let dashBoard = 1
  const navigate = useNavigate();
  function DashboardTable() {
    if (state === 1) {
      return <ScheduleVisitTable handleScroll={handleScroll} />
    } else if (state === 2) {
      return <EquipmentReservationTable handleScroll={handleScroll} />
    } else if (state === 3) {
      return <WorkOrder handleScroll={handleScroll} />
    } else if (state === 4) {
      return <SeedFundApplication handleScroll={handleScroll} />
    }
  }

  const handleScroll = event => {
    const staticColumn = document.querySelectorAll('.c-1')
    if (event.target.scrollLeft > 0) {
      staticColumn.forEach(element => {
        element.classList.add('shadow')
      })
    }
    if (event.target.scrollLeft === 0) {
      staticColumn.forEach(element => {
        element.classList.remove('shadow')
      })
    }
  }

  const [value, setvalue] = useState({})
  const [valuelength] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('value'))){
      setvalue(JSON.parse(localStorage.getItem('value')));
    }else{
      navigate('/')
    }
  }, []);



  return (
    <>
      <TOPNAV />
      <div class='db-modal'>
        <SIDENAV />
        <div class='db-content'>
          <div class='scrollable-content'>
            <div class='main top-content'>
              <div class='scroll'>
                <div
                  class='block-content'
                  onClick={() => {
                    navigate("/admin/schedulevisit")
                  }}
                >
                  <div class='circle-wrapper'>{value.visit?.length}</div>
                  <div class='block d1'>
                    <img src={db1}></img>
                  </div>
                  <div class='text-wrapper'>Schedule Visit</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    navigate("/admin/equipmentreservation")
                  }}
                >
                  <div class='circle-wrapper'>{value.booking?.length}</div>
                  <div class='block d2'>
                    <img src={db2}></img>
                  </div>
                  <div class='text-wrapper'>Equipment Reservation</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    navigate("/admin/workorder")
                  }}
                >
                  <div class='circle-wrapper'>{value.work?.length}</div>
                  <div class='block d3'>
                    <img src={db3}></img>
                  </div>
                  <div class='text-wrapper'>Work Order</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    navigate("/admin/seedfundapplication")
                  }}
                >
                  <div class='circle-wrapper'>{value.fundrequest?.length}</div>
                  <div class='block d4'>
                    <img src={db4}></img>
                  </div>
                  <div class='text-wrapper'>Seed Fund Application</div>
                </div>
              </div>
            </div>
            <div className='admintab'>
              <div className='inadm'>
                <div className='inadmin2'>
                  <Link className='admintab-con mt-4' to='/admin/hoststudent' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Host Institute Student</div>
                    <div className='con-body'>{value.hoststudent?.length}</div>
                  </Link>
                  <Link className='admintab-con mt-4' to='/admin/hostfaculty' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Host Institute Faculty</div>
                    <div className='con-body'>{value.hostinstitutefaculty?.length}</div>
                  </Link>
                </div>
                <div className='inadmin2'>
                  <Link className='admintab-con mt-4'  to='/admin/alumini' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Host Institute Alumini</div>
                    <div className='con-body'>{value.alumini?.length}</div>
                  </Link>
                  <Link className='admintab-con mt-4' to='/admin/otherstudent' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Other Institute Student</div>
                    <div className='con-body'>{value.otherstudent?.length}</div>
                  </Link>
                </div>
                <div className='inadmin2' >
                  <Link className='admintab-con mt-4' to='/admin/otherfaculty' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Other Institute Faculty</div>
                    <div className='con-body'>{value.otherfaculty?.length}</div>
                  </Link>
                  <Link className='admintab-con mt-4' to='/admin/entrepreneur' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Entrepreneur/start-up</div>
                    <div className='con-body'>{value.startup?.length}</div>
                  </Link>
                </div>
                <div className='inadmin2'>
                  <Link className='admintab-con mt-4' to='/admin/schoollearner' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>School learner</div>
                    <div className='con-body'>{value.schoolstudents?.length}</div>
                  </Link>
                  <Link className='admintab-con mt-4' to='/admin/schoolteacher' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>School Teacher</div>
                    <div className='con-body'>{value.schoolteacher?.length}</div>
                  </Link>
                </div>
                <div className='inadmin2'>
                  <Link className='admintab-con mt-4' to='/admin/industry' style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Industry</div>
                    <div className='con-body'>{value.industry?.length}</div>
                  </Link>
                  <Link className='admintab-con mt-4'  style={{textDecoration:'none',color:'#000'}}>
                    <div className='con-head'>Temporary</div>
                    <div className='con-body'>{value.temporary?.length}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard;