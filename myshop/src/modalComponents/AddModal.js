import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import Api from '../API/Api';


const AddModal = (props) => {

    const [item, setItem] = React.useState({
        itemID: "",
        itemName: "",
        itemDescription: "",
        price: ""
    })


    const getNewKey = () => {
        const myKey = props.myItems[props.myItems.length - 1].itemID + 1
        return myKey;
    }

    const handleItemValues = (e) => {
        const newItem = { ...item }
        newItem[e.target.id] = e.target.value
        setItem(newItem)

    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);



    return (
        <>
            <Button className="space2" variant="success rounded-pill" onClick={handleShow}>
                Add Item
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="display-6">Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Item Name</InputGroup.Text><FormControl
                            onChange={(event) => handleItemValues(event)} id="itemName" value={item.itemName} placeholder="Item Name" type="text"
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Item Description</InputGroup.Text><FormControl
                            onChange={(event) => handleItemValues(event)} id="itemDescription" value={item.itemDescription} placeholder="Item Description" type="text"
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="rounded-pill mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Item Price</InputGroup.Text><FormControl
                            onChange={(event) => handleItemValues(event)} id="price" value={item.price} placeholder="Item Price" type="text"
                        />
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary rounded-pill" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success rounded-pill" onClick={() => Api.addItem(item, getNewKey(), props, handleClose)}>
                        Add Item

                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AddModal;
