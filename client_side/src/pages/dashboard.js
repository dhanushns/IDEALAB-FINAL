import '../assets/styles/dashBoard.css'
import TOPNAV from '../components/top-navigation.js'
import SIDENAV from '../components/side-nav'
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
import { useNavigate } from 'react-router-dom'

function Dashboard () {
  const [state, setActive] = useState(1)
  let dashBoard = 1
  function DashboardTable () {
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

  const [fundRequest, setFundRequest] = useState([])
  useEffect(() => {
    setFundRequest(JSON.parse(localStorage.getItem('fund')));
  }, [])

  const [booking, setbooking] = useState([])
  useEffect(()=>{
    setbooking(JSON.parse(localStorage.getItem('booking')));
  }, [])

  const [visit, setvisit] = useState([])
  useEffect(()=>{
    setvisit(JSON.parse(localStorage.getItem('visit')));
  }, [])

  const [work, setwork] = useState([])
  useEffect(()=>{
    setwork(JSON.parse(localStorage.getItem('work')));
  }, [])

  const navigate = useNavigate();

  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem('userInformation'))){
      navigate("/");
    };
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
                    setActive(1)
                  }}
                >
                  <div class='circle-wrapper'>{visit.length}</div>
                  <div class='block d1'>
                    <img src={db1}></img>
                  </div>
                  <div class='text-wrapper'>Schedule Visit</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    setActive(2)
                  }}
                >
                  <div class='circle-wrapper'>{booking.length}</div>
                  <div class='block d2'>
                    <img src={db2}></img>
                  </div>
                  <div class='text-wrapper'>Equipment Reservation</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    setActive(3)
                  }}
                >
                  <div class='circle-wrapper'>{work.length}</div>
                  <div class='block d3'>
                    <img src={db3}></img>
                  </div>
                  <div class='text-wrapper'>Work Order</div>
                </div>
                <div
                  class='block-content'
                  onClick={() => {
                    setActive(4)
                  }}
                >
                  <div class='circle-wrapper'>{fundRequest.length}</div>
                  <div class='block d4'>
                    <img src={db4}></img>
                  </div>
                  <div class='text-wrapper'>Seed Fund Application</div>
                </div>
              </div>
            </div>
            <div class='table-modal'>
              <div class='table-top'>
                <div class='table-heading'>
                  <i
                    id='handleTables'
                    class='fa fa-angle-left previous-table'
                    onClick={() => {
                      if (state !== 1) {
                        setActive(state - 1)
                      }
                    }}
                  ></i>
                  <div class='table-title text-wrapper'>
                    {state === 1 && <>Schedule Visit</>}
                    {state === 2 && <>Equipment Reservation</>}
                    {state === 3 && <>Work Order</>}
                    {state === 4 && <>Seed Fund Application</>}
                  </div>
                  <i
                    id='handleTables'
                    class='fa fa-angle-right next-table'
                    onClick={() => {
                      if (state !== 4) {
                        setActive(state + 1)
                      }
                    }}
                  ></i>
                </div>
              </div>
              {dashBoard !== 0 && <>{DashboardTable()}</>}
              {dashBoard !== 1 && (
                <>
                  <div class='no-record-found-content'>
                    <div class='no-record-found'>
                      <img src={NoRecord} alt='no-record'></img>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
