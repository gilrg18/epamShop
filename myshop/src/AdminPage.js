import React from 'react'
import ItemList from './ItemList';
import { Link } from "react-router-dom"

const AdminPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);

    React.useEffect(() => {
        console.log('useEffect');
        getItems();
    }, [])

    const getItems = async () => {
        try {
            const data = await fetch('/myItems/items/');
            const items = await data.json();
            console.log(items);
            setItems(items);
        } catch (e) {
            console.log(`error: ${e}`)
        }

    };


    const deleteItem = async (itemID) => {       
        if (window.confirm(`Deleting item with id ${itemID}, are you sure?`)) {
            await fetch(`/myItems/items/${itemID}`, {
                method: 'DELETE'
            });
            window.alert(`Item with id ${itemID} has been deleted`)
            //getItems(); delete directly from myItems
            for( let i = 0; i < myItems.length; i++){                                   
                if ( myItems[i].itemID === itemID) { 
                    myItems.splice(i, 1); 
                    setItems(myItems)
                }
            }
        }
    }

    return (
        <>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>id</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        myItems.map(item => {
                            return <ItemList key={item.itemID}
                                id={item.itemID}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                price={item.price} 
                                deleteItem={deleteItem}/>
                        })
                    }
                </tbody>
            </table>
            &nbsp;&nbsp;
            <Link to="/admin/addItem">
                <button type="button" className="btn btn-success" >Add Item</button>
            </Link>
        </>

    );
}

export default AdminPage;
