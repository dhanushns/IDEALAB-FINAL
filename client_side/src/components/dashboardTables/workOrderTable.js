import React from 'react'
import { useState, useEffect } from 'react'

function pagination (p) {
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

function handleRows (event) {
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

function displayTablePopup (event) {
  if (window.screen.width <= 950) {
    parentElement = document.getElementById(event.target.id).parentNode
      .parentNode.children[1]
    parentElement.classList.remove('rows-expand')
    parentElement.classList.add('row-popup')
    document.body.style.overflow = 'hidden'
  }
}

function handleRowPopup () {
  console.log(parentElement)
  parentElement.classList.remove('row-popup')
  parentElement.classList.add('rows-expand')
  document.body.style.overflow = 'auto'
}

function WorkOrder ({handleScroll}) {
  const [state, setActive] = useState(1)
  const [work, setwork] = useState([])
  useEffect(()=>{
    setwork(JSON.parse(localStorage.getItem('work')));
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
          <div class='column-title c-2'>Work</div>
          <div class='column-title mf'>More info..</div>
          <div class='column-title td c-3'>Quantity</div>
          <div class='column-title td c-4'>Date of Delivery</div>
          <div class='column-title td c-5'>Raw Material</div>
          <div class='column-title td c-8'>Status</div>
        </div>
        {work.map((item, i) => (
          <div class='table-rows' key={i}>
            <div class='row-flex' id='row-flex-1'>
              <div id={`row-wrapper-${i}`} class='data-wrapper'>
                <div class='row-data rd-1 text-wrapper'>{i+1}</div>
                <div class='row-data rd-2 text-wrapper'>{item.work}</div>
                <button
                  class='click-here-btn'
                  id='1'
                  onClick={event => {
                    displayTablePopup(event)
                  }}
                >
                  click here!
                </button>
                <div class='row-data rd-3 td text-wrapper'>{item.quantity}</div>
                <div class='row-data rd-4 td text-wrapper'>{item.dateOfDelivery}</div>
                <div class='row-data rd-5 td text-wrapper'>{item.rawMaterial}</div>

                <div class='row-data rd-8 td text-wrapper'>
                {processFun(item.process)}
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
                      <div class='r1-name'>Work</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.work}</div>
                    </div>
                    <div class='row-wrapper r2'>
                      <div class='r1-name'>Quantity</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.quantity}</div>
                    </div>
                    <div class='row-wrapper r3'>
                      <div class='r1-name'>Date of Delivery</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>
                      {item.dateOfDelivery}
                      </div>
                    </div>
                   
                  </div>
                  <div class='ex-col-2 ex-cols'>
                  <div class='row-wrapper r1'>
                      <div class='r1-name'>Raw Material</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.rawMaterial}</div>
                    </div>
                    <div class='row-wrapper r2'>
                      <div class='r1-name'>Discription</div>
                      <div class='colon'>:</div>
                      <div class='r1-data'>{item.description}</div>
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

export default WorkOrder;
