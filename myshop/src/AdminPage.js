import React from 'react'
import ItemList from './ItemList';
import {Link} from "react-router-dom"

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
                                price={item.price} />
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
