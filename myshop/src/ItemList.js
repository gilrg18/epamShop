import React from 'react'
import UpdateModal from './UpdateModal'


const ItemList = (props) => {

    return (
        <>
            <tr>
                <th scope="row">{props.itemID}</th>
                <td>{props.itemName}</td>
                <td>{props.itemDescription}</td>
                <td>${props.price}</td>
                <td>
                    <UpdateModal getItems={props.getItems} itemID={props.itemID}/>
                    &nbsp;&nbsp;                   
                    <button type="button" className="btn btn-danger" onClick={() => props.deleteItem(props.itemID)}>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default ItemList;