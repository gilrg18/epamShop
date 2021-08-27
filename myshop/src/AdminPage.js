import React from 'react'
import ItemList from './ItemList';
import AddModal from './AddModal';
import { Table } from 'react-bootstrap'
import Api from './Api'

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
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Item Name</th>
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
