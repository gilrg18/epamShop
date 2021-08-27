import React from 'react'
import ItemList from './ItemList';
import AddModal from './AddModal';
import {Table} from 'react-bootstrap'
import Toasts from './toasts/Toasts'

const AdminPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);
    
    React.useEffect(() => {
        //setItems(Api.getItems());
        getItems()

    }, [])


    const getItems = async () => {
        try {
            const data = await fetch('/myItems/items/');
            const items = await data.json();
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
            Toasts.sucess(`Item with id ${itemID} has been deleted`)
            const newItemList = myItems.filter((item) => item.itemID !== itemID);
            setItems(newItemList)
        }
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action &nbsp;&nbsp;<AddModal getItems={getItems} myItems={myItems} setItems={setItems} /></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => {
                            return <ItemList key={item.itemID}
                                itemID={item.itemID}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                price={item.price}
                                deleteItem={deleteItem} 
                                getItems={getItems}/>
                        })
                    }
                </tbody>
            </Table>
            &nbsp;&nbsp;

        </>

    );
}

export default AdminPage;
