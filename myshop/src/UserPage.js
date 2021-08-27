import React from 'react'
import ItemCard from './ItemCard';


const UserPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);
    

    React.useEffect(()=>{
        getItems();
    }, [])

    const getItems = async () => {
        try{
            const data = await fetch('/myItems/items/');
            const items = await data.json();
            setItems(items);
        }catch(e){
            console.log(`error: ${e}`);
        }
    }
        
    return (
        <>
        <h1 className="display-4 text-center mt-3">epamShop</h1>
        <section className="pi-4 container">
        <div className="row justify-content-center">
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