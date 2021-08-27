import React from 'react'
import ItemCard from './ItemCard';
import Api from './Api'
import Cart from './Cart';

const UserPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);


    React.useEffect(() => {
        const fetchItems = async () => {
            const items = await Api.getItems();
            console.log(items)
            setItems(items);
        }
        fetchItems();
    }, [])

    const [cartItems, setCartItems] = React.useState([])

    const onAdd = (item) => {
        const exist = cartItems.find(cartItem => cartItem.itemID === item.itemID)
        console.log(exist)
        console.log(cartItems.length)
        console.log(cartItems)
        cartItems.map(item => console.log(item))
        if (exist) {
            //console.log(cartItems)
            setCartItems(
                cartItems.map(cartItem =>
                    cartItem.itemId === item.itemID ? { ...exist, qty: exist.qty + 1 } : cartItem
                )
            )
        } else {
            setCartItems([...cartItems, { ...item, qty: 1 }])
            //console.log(`Outside ${cartItems}`)
        }
    };

    return (
        <>
            <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
            <h1 className="display-4 text-center mt-3">epamShop</h1>
            <section className="pi-4 container">
                <div className="row justify-content-center block shadow">
                    {
                        myItems.map(item => {
                            return <ItemCard key={item.itemID}
                                item={item}
                                onAdd={onAdd} />
                        })
                    }
                </div>

            </section>

        </>
    );
}

export default UserPage;