import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const AddModal = () => {

    const [item, setItem] = React.useState({
        itemName: "",
        itemDescription: "",
        price: ""
    })

    const addItem = async () => {
        if (window.confirm('Are you sure you want to add a new Item?')) {
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                window.alert("Items must not have empty values")
            }else {
                try {
                    let newPrice = Number(parseFloat(item.price).toFixed(2))
                    console.log(newPrice)
                    console.log(typeof newPrice)
                    if (isNaN(newPrice) || typeof newPrice !== 'number') {
                        throw new Error(`Price ${newPrice} must be a number`);
                    }
                    await fetch(`/myItems/items/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            itemName: item.itemName,
                            itemDescription: item.itemDescription,
                            price: newPrice
                        })
                    })
                    window.alert(`Item ${item.itemName} has been added`)
                }catch(error){
                    console.log(`error: ${error}`)
                }
                handleClose();
            }

        }
    }

    function handleItemValues(e) {
        const newItem = { ...item }
        newItem[e.target.id] = e.target.value
        console.log(e)
        console.log(e.target.id)
        console.log(e.target.value)
        setItem(newItem)
        console.log(newItem)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Item
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={(event) => handleItemValues(event)} id="itemName" value={item.itemName} placeholder="Item Name" type="text"></input>
                    <input onChange={(event) => handleItemValues(event)} id="itemDescription" value={item.itemDescription} placeholder="Item Description" type="text"></input>
                    <input onChange={(event) => handleItemValues(event)} id="price" value={item.price} placeholder="Item Price" type="text"></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addItem}>
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AddModal;
