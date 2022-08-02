import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import {Link} from 'react-router-dom';
// import SetData from "./Card-obj";


const Cards = (props) => {


    const [show, setShow] = useState(false)

    const closemodal =()=> setShow(false)
    const openmodal =()=> setShow(true)



    return (
        <>
            
                    
                        <div className="card mt-4 mb-4 m-4" style={{ width: "20rem", }}>
                            <img className="card-img-top w-100 p-3" src={props.imgSrc} alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.CardDes}</p>

                                <Button variant="primary" onClick={openmodal}>
                                {props.ctaName}
                              </Button>
                            </div>
                        </div>
                    
               

            <Modal
            show={show}
            onHide={closemodal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{props.ModalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.modalDes}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closemodal}>
                Close
              </Button>
              <a href={props.ctaUrl} variant="primary" target="_blank" rel="noopener noreferrer">Understood</a>
            </Modal.Footer>
          </Modal>
        </>
    )
}

export default Cards;