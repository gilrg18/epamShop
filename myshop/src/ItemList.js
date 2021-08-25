import React from 'react'


const ItemList = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.itemName}</td>
                <td>{props.itemDescription}</td>
                <td>${props.price}</td>
                <td>
                    <button type="button" className="btn btn-primary">Update</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </>
    );
}

export default ItemList;