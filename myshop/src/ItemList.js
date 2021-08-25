import React from 'react'


const ItemList = (props) => {


    //deletes after refresh 
    const deleteItem = async (itemID) => {
        if (window.confirm(`Deleting item with id ${itemID}, are you sure?`)) {
            await fetch(`/myItems/items/${itemID}`, {
                method: 'DELETE'
            });

        }
    }



    const updateItem = async (itemID) => {
        try {
            const result = await fetch(`/myItems/items/${itemID}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    itemName: 'ASDASD',
                    itemDescription: 'ASDASD',
                    price: '123'
                })
            });
            console.log(result)
        } catch (e) {
            console.log(`error ${e}`);
        }
    }

    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.itemName}</td>
                <td>{props.itemDescription}</td>
                <td>${props.price}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={() => updateItem(props.id)}>Update</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => deleteItem(props.id)}>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default ItemList;