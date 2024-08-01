import React, { useState, useEffect } from 'react';

function pagination(p) {
  console.log(p - 1);
  let pages = document.getElementsByClassName('pages');
  pages[p - 1].style.backgroundColor = '#EF6C1B';
  pages[p - 1].style.color = 'white';
  for (let i = 0; i < pages.length; i++) {
    if (i !== p - 1) {
      pages[i].style.backgroundColor = 'white';
      pages[i].style.color = 'black';
    }
  }
}

let selectedRowIdText;

function handleRows(event) {
  selectedRowIdText = document.getElementById(event.target.id);
  var rowId = selectedRowIdText.parentElement.getAttribute('id');
  var rootId = document
    .getElementById(rowId)
    .parentNode.firstElementChild.getAttribute('id');
  if (window.screen.width > 950) {
    document.getElementById(rowId).classList.toggle('show-row-data');
    document.getElementById(rootId).classList.toggle('show-active');
  }
  if (selectedRowIdText.innerHTML === 'Show') {
    selectedRowIdText.innerHTML = 'Hide';
  } else if (selectedRowIdText.innerHTML === 'Hide') {
    selectedRowIdText.innerHTML = 'Show';
  }
}

let parentElement;

function displayTablePopup(event) {
  if (window.screen.width <= 950) {
    parentElement = document.getElementById(event.target.id).parentNode
      .parentNode.children[1];
    parentElement.classList.remove('rows-expand');
    parentElement.classList.add('row-popup');
    document.body.style.overflow = 'hidden';
  }
}

function handleRowPopup() {
  parentElement.classList.remove('row-popup');
  parentElement.classList.add('rows-expand');
  document.body.style.overflow = 'auto';
}

function ProjectDetails() {
  const [fundRequest, setFundRequest] = useState([]);
  useEffect(() => {
    setFundRequest(JSON.parse(localStorage.getItem('fund')));
  }, []);
  function processFun(status) {
    if (status === null) {
        return "Pending"
    }
    return status
}
  return (
    <>
      <div class='column-header'>
        <div class='column-title c-1'>S.No</div>
        <div class='column-title c-2'>Title</div>
        <div class='column-title mf'>More info..</div>
        <div class='column-title td c-3'>Domain</div>
        <div class='column-title td c-4'>Product</div>
        <div class='column-title td c-5'>Portable</div>
        <div class='column-title td c-6'>Status</div>
      </div>
      {fundRequest.map((item, i) => (
        <div class='table-rows' key={i}>
          <div class='row-flex' id={`row-flex-${i}`}>
            <div id={`row-wrapper-${i}`} class='data-wrapper'>
              <div class='row-data rd-1 text-wrapper'>{i + 1}</div>
              <div class='row-data rd-2 text-wrapper'>{item.title}</div>
              <button
                class='click-here-btn'
                id={`${i}`}
                onClick={(event) => {
                  displayTablePopup(event);
                }}
              >
                click here!
              </button>
              <div class='row-data rd-3 td text-wrapper'>{item.domain}</div>
              <div class='row-data rd-4 td text-wrapper'>{item.product}</div>
              <div class='row-data rd-5 td text-wrapper'>{item.patentable}</div>
              <div class='row-data rd-6 td text-wrapper'>{processFun(item.process)}</div>
            </div>
            <div class='rows-expand' id={`handle-row-${i}`}>
              <div
                class='text-wrapper row-expand-btn'
                onClick={(event) => {
                  handleRows(event);
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
                    handleRowPopup();
                  }}
                ></i>
                <div class='ex-col-1 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Title</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.title}</div>
                  </div>
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Domain</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.domain}</div>
                  </div>
                  <div class='row-wrapper r3'>
                    <div class='r1-name'>Product</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.product}</div>
                  </div>
                  </div>
                  <div class='ex-col-2 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Portable</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.patentable}</div>
                  </div>
                  
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Mentor</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.mentor}</div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function ProjectDescription() {
  const [fundRequest, setFundRequest] = useState([]);
  useEffect(() => {
    setFundRequest(JSON.parse(localStorage.getItem('fund')));
  }, []);
  return (
    <>
      <div class='column-header'>
        <div class='column-title c-1'>S.No</div>
        <div class='column-title c-2'>Problem</div>
        <div class='column-title mf'>More info..</div>
        <div class='column-title td c-3'>Solution</div>
        <div class='column-title td c-4'>Justification</div>
        <div class='column-title td c-5'>Uniqueness</div>
      </div>
      {fundRequest.map((item, i) => (
        <div class='table-rows' key={i}>
          <div class='row-flex' id={`row-flex-${i}`}>
            <div id={`row-wrapper-${i}`} class='data-wrapper'>
              <div class='row-data rd-1 text-wrapper'>{i + 1}</div>
              <div class='row-data rd-2 text-wrapper'>{item.problem}</div>
              <button
                class='click-here-btn'
                id={`${i}`}
                onClick={(event) => {
                  displayTablePopup(event);
                }}
              >
                click here!
              </button>
              <div class='row-data rd-3 td text-wrapper'>{item.solution}</div>
              <div class='row-data rd-4 td text-wrapper'>{item.justification}</div>
              <div class='row-data rd-5 td text-wrapper'>{item.uniqueness}</div>
            </div>
            <div class='rows-expand' id={`handle-row-${i}`}>
              <div
                class='text-wrapper row-expand-btn'
                onClick={(event) => {
                  handleRows(event);
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
                    handleRowPopup();
                  }}
                ></i>
                <div class='ex-col-1 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Problem</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.problem}</div>
                  </div>
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Solution</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.solution}</div>
                  </div>
                  </div>
                  <div class='ex-col-2 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Justification</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.justification}</div>
                  </div>
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Uniqueness</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.uniqueness}</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function Budget() {
  const [fundRequest, setFundRequest] = useState([]);
  useEffect(() => {
    setFundRequest(JSON.parse(localStorage.getItem('fund')));
  }, []);
  return (
    <>
      <div class='column-header'>
        <div class='column-title c-1'>S.No</div>
        <div class='column-title c-2'>Budget</div>
        <div class='column-title mf'>More info..</div>
        <div class='column-title td c-3'>Fund Request</div>
        <div class='column-title td c-4'>Level</div>
        <div class='column-title td c-5'>Market</div>
      </div>
      {fundRequest.map((item, i) => (
        <div class='table-rows' key={i}>
          <div class='row-flex' id={`row-flex-${i}`}>
            <div id={`row-wrapper-${i}`} class='data-wrapper'>
              <div class='row-data rd-1 text-wrapper'>{i + 1}</div>
              <div class='row-data rd-2 text-wrapper'>{item.cost}</div>
              <button
                class='click-here-btn'
                id={`${i}`}
                onClick={(event) => {
                  displayTablePopup(event);
                }}
              >
                click here!
              </button>
              <div class='row-data rd-3 td text-wrapper'>{item.fundRequest}</div>
              <div class='row-data rd-4 td text-wrapper'>{item.level}</div>
              <div class='row-data rd-5 td text-wrapper'>{item.market}</div>
            </div>
            <div class='rows-expand' id={`handle-row-${i}`}>
              <div
                class='text-wrapper row-expand-btn'
                onClick={(event) => {
                  handleRows(event);
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
                    handleRowPopup();
                  }}
                ></i>
                <div class='ex-col-1 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Budget</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.cost}</div>
                  </div>
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Fund Request</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.fundRequest}</div>
                  </div>
                  </div>
                  <div class='ex-col-2 ex-cols'>
                  <div class='row-wrapper r1'>
                    <div class='r1-name'>Level</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.level}</div>
                  </div>
                  <div class='row-wrapper r2'>
                    <div class='r1-name'>Market</div>
                    <div class='colon'>:</div>
                    <div class='r1-data'>{item.market}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function SeedFundApplication({ handleScroll }) {
  const [state, setActive] = useState(2);

  return (
    <>
      <div class='table-section'>
        <div
          class={`section b${state === 1 ? 1 : ''}`}
          onClick={() => {
            setActive(1);
          }}
        >
          <label class='text-wrapper'>Project Details</label>
        </div>
        <div
          class={`section b${state === 2 ? 2 : ''}`}
          onClick={() => {
            setActive(2);
          }}
        >
          <label class='text-wrapper'>Project Description</label>
        </div>
        <div
          class={`section b${state === 3 ? 3 : ''}`}
          onClick={() => {
            setActive(3);
          }}
        >
          <label class='text-wrapper'>Budget</label>
        </div>
      </div>

      <div class='dropdown-section'>
        <select
          id='table-selection'
          onChange={() => {
            const table = document.getElementById('table-selection').value;
            if (table === 'Project Details') {
              setActive(1);
            }
            if (table === 'Project Description') {
              setActive(2);
            }
            if (table === 'Budget') {
              setActive(3);
            }
          }}
        >
          <option>Project Details</option>
          <option>Project Description</option>
          <option>Budget</option>
        </select>
      </div>
      <div class='table-content' onScroll={handleScroll}>
        {state === 1 && <ProjectDetails />}
        {state === 2 && <ProjectDescription />}
        {state === 3 && <Budget />}
      </div>
    </>
  );
}

export default SeedFundApplication;