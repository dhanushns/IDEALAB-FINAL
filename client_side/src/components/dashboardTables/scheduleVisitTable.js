import React from 'react'
import { useState, useRef, useEffect } from 'react'

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
    selectedRowIdText.innerHTML = 'Hide'
  }
  if (selectedRowIdText.innerHTML === 'Hide') {
    selectedRowIdText.innerHTML = 'Show'
  } else if (selectedRowIdText.innerHTML === 'Show') {
    selectedRowIdText.innerHTML = 'Hide'
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
  const [visit, setvisit] = useState([])
  useEffect(()=>{
    setvisit(JSON.parse(localStorage.getItem('visit')));
  }, [])

  function processFun(status) {
    if (status === null) {
        return "Pending"
    }
    return status
}
  return (
    <>
      <div class='table-content' onScroll={handleScroll}>
        <div class='column-header'>
          <div class='column-title c-1'>S.No</div>
          <div class='column-title c-2'>Date of Visit</div>
          <div class='column-title mf'>More info..</div>
          <div class='column-title td c-3'>End Time</div>
          
          <div class='column-title td c-4'>No.of Visitors</div>
          <div class='column-title td c-5'>Accommodation</div>
          <div class='column-title td c-6'>No.of Days</div>
          
          <div class='column-title td c-7' id='c8'>
            Check in Date and Time
          </div>
          <div class='column-title td c-8' id='c9'>
            Check out Date and Time
          </div>
          <div class='column-title td c-9'>Status</div>
        </div>
        {visit.map((item, i) => (
          <div class='table-rows' key={i}>
            <div class='row-flex' id={`row-flex-${i}`}>
              <div id={`row-wrapper-${i}`} class='data-wrapper'>
                <div class='row-data rd-1 text-wrapper'>{i+1}</div>
                <div class='row-data rd-2 text-wrapper'>{item.DateOfVisit}</div>
                <button
                  class='click-here-btn'
                  id={`${i}`}
                  onClick={event => {
                    displayTablePopup(event)
                  }}
                >
                  click here!
                </button>
                <div class='row-data rd-3 td text-wrapper'>{item.exitVisit}</div>
                
                <div class='row-data rd-4 td text-wrapper'>{item.noOfVisitors}</div>
                <div class='row-data rd-5 td text-wrapper'>{item.accommodation}</div>
                <div class='row-data c-6 td text-wrapper'>{item.numberOfDays}</div>
                
                <div class='row-data rd-7 td text-wrapper'>
                {item.chickInTime.slice(0, 10)} <br></br>{item.chickInTime.slice(11, 16)}
                </div>
                <div class='row-data rd-8 td text-wrapper'>
                {item.checkOutTime.slice(0, 10)} <br></br>{item.checkOutTime.slice(11, 16)}
                </div>
                <div class='row-data rd-9 td text-wrapper'>{processFun(item.process)}</div>
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
                      <div class='r1-name'>Data of Visit</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.DateOfVisit}</div>
                    </div>
                    <div class='row-wrapper r2'>
                      <div class='r1-name'>Visit End</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.exitVisit}</div>
                    </div>
                    <div class='row-wrapper r3'>
                      <div class='r1-name'>Purpose</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>
                        {item.purpose}
                      </div>
                    </div>
                    <div class='row-wrapper r4'>
                      <div class='r1-name'>No.of Visitors</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.noOfVisitors}</div>
                    </div>
                  </div>
                  <div class='ex-col-2 ex-cols'>
                    <div class='row-wrapper r1'>
                      <div class='r1-name'>{item.accommodation}</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>Yes</div>
                    </div>
                    <div class='row-wrapper r2'>
                      <div class='r1-name'>No.of Days</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.numberOfDays}</div>
                    </div>
                    <div class='row-wrapper r3'>
                      <div class='r1-name'>Check-in Date and Time</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>
                        {item.chickInTime.slice(0, 10)} <br></br>{item.chickInTime.slice(11, 16)}
                      </div>
                    </div>
                    <div class='row-wrapper r4'>
                      <div class='r1-name'>Check-out Date and Time</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>
                      {item.checkOutTime.slice(0, 10)} <br></br>{item.checkOutTime.slice(11, 16)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ScheduleVisitTable