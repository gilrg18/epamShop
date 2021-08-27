import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import Toasts from './toasts/Toasts'
import Api from './Api';

const AddModal = (props) => {

    const [item, setItem] = React.useState({
        itemID: "",
        itemName: "",
        itemDescription: "",
        price: ""
    })

    const addItem = async (newKey) => {
        item.itemID = newKey;
        try {
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                Toasts.error("Items must not have empty values")
                throw new Error("Items must not have empty values")
            }
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            if (isNaN(newPrice) || typeof newPrice !== 'number') {
                Toasts.error("Price must be a number")
                throw new Error("Price must be a number");
            }
            await fetch(`/myItems/items/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    itemID: item.itemID,
                    itemName: item.itemName,
                    itemDescription: item.itemDescription,
                    price: newPrice
                })
            })
            //setItems([...myItems, item])
            const items = await Api.getItems();
            props.setItems(items);
            Toasts.sucess(`Item ${item.itemName} has been added`)
        } catch (error) {
            console.log(`error: ${error}`)
        }

        handleClose();

    }

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
            <Button variant="success rounded-pill" onClick={handleShow}>
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
                    <Button variant="success rounded-pill" onClick={() => addItem(getNewKey())}>
                        Add Item

                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AddModal;
