import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../assets/styles/popup.css'

function PopUp (props) {
  console.log("Function Caleed")
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    props.setPopupActive(false);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        className='popup-modal'
      >
        <Modal.Header className={props.action[0]}>
          <i class = "fa fa-close" onClick={handleClose}></i>
          <div class='popup-content'>
            <i class = {props.action[2]} id = "state-icon"></i>
            <div class='text-wrapper title-wrapper'>{props.action[1]}</div>
            <Link to = {props.action[5]}>
              <Button onClick={handleClose} id={props.action[3]}>
                {props.action[4]}
              </Button>
            </Link>
          </div>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default PopUp
