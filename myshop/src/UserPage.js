import React from 'react'
import ItemCard from './ItemCard';
import Api from './Api'

const UserPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);
    

    React.useEffect(()=>{
        const fetchItems = async () => {
            const items = await Api.getItems();
            setItems(items);
        }
        fetchItems();
    }, [])

    return (
        <>
        <h1 className="display-4 text-center mt-3">epamShop</h1>
        <section className="pi-4 container">
        <div className="row justify-content-center block shadow">
            {
                myItems.map(item =>{
                   return <ItemCard key={item.itemID} 
                   image={item.image} 
                   itemName = {item.itemName} 
                   itemDescription ={item.itemDescription} 
                   price = {item.price} />
                })
            }
        </div>
        </section>
        
        </>
    );
}

export default UserPage;