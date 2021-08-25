import React from 'react'
import { Link } from "react-router-dom"


const AddItems = () => {

    const [item, setItem] = React.useState({
        itemName: "",
        itemDescription: "",
        price: ""
    })

    const addItem = async () => {
        if (window.confirm('Are you sure you want to add a new Item?')) {
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                window.alert("Items must not have empty values")
            } else {
                await fetch(`/myItems/items/`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        itemName: item.itemName,
                        itemDescription: item.itemDescription,
                        price: Number(item.price).toFixed(2)
                    })
                })
                window.alert(`Item ${item.itemName} has been added`)
            }

        }
    }


    function handle(e) {
        const newItem = { ...item }
        newItem[e.target.id] = e.target.value
        console.log(e)
        console.log(e.target.id)
        console.log(e.target.value)
        setItem(newItem)
        console.log(newItem)
    }


    return (
        <div>
            <form onSubmit={() => addItem()}>
                <input onChange={(event) => handle(event)} id="itemName" value={item.itemName} placeholder="Item Name" type="text"></input>
                <input onChange={(event) => handle(event)} id="itemDescription" value={item.itemDescription} placeholder="Item Description" type="text"></input>
                <input onChange={(event) => handle(event)} id="price" value={item.price} placeholder="Item Price" type="text"></input>
                <br></br><br></br>
                <button className="btn btn-success" >Add Item</button>
                &nbsp;&nbsp;
                <Link to="/admin">
                    <button type="button" className="btn btn-secondary">Return</button>
                </Link>
            </form>
        </div>
    )
}

export default AddItems;