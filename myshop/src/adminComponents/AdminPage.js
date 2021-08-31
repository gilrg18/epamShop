import React from 'react'
import ItemList from './ItemList';
import AddModal from '../modalComponents/AddModal';
import { Table } from 'react-bootstrap'
import Api from '../Api'

const AdminPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);

    React.useEffect(() => {
        const fetchItems = async () => {
            const items = await Api.getItems();
            setItems(items);
        }
        fetchItems();
    }, [])


    return (
        <>
            <h1 className="display-4 text-center mt-3">epamShop Admin</h1>
            <Table className= "container shadow" bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action &nbsp;&nbsp;<AddModal myItems={myItems} setItems={setItems} /></th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        myItems.map(item => {
                            return <ItemList key={item.itemID}
                                itemID={item.itemID}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                itemImage={item.image}
                                price={item.price}
                                setItems={setItems} />
                        })
                    }
                </tbody>
            </Table>
            &nbsp;&nbsp;
        </>
    );
}

export default AdminPage;
