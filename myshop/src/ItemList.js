import React from 'react'
import Api from './Api';
import UpdateModal from './UpdateModal'


const ItemList = (props) => {

    const fetchItems = async () => {
        const items = await Api.getItems();
        props.setItems(items);
    }
    
    return (
        <>
            <tr>
                <th scope="row">{props.itemID}</th>
                <td>{props.itemName}</td>
                <td>{props.itemDescription}</td>
                <td>${props.price}</td>
                <td>
                    <UpdateModal setItems={props.setItems} itemID={props.itemID} />
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger rounded-pill" onClick={() => {
                        Api.deleteItem(props.itemID)
                        fetchItems()
                    }
                    }>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default ItemList;