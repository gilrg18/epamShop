import React from 'react'
import ItemCard from './ItemCard';



const Home = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);

    React.useEffect(()=>{
        console.log('useEffect');
        getItems();
    }, [])

    const getItems = async () => {
        const data = await fetch('/myItems/items/');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }
        

    return (
        <>
        <h1 className="text-center mt-3">myShop</h1>
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

export default Home;