import React from 'react'
import { Modal, Button } from 'react-bootstrap';

//Incomplete.. Use for delete button...
const ConfirmationModal = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    

    return (
      <>
         <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> 
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ConfirmationModal;
