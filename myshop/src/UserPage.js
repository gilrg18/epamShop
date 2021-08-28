import React from 'react'
import ItemCard from './ItemCard';
import Api from './Api'
import Cart from './Cart';
import { CartContext } from './CartContext';

const UserPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);
    const [cart, setCart] = React.useContext(CartContext)


    React.useEffect(() => {
        const fetchItems = async () => {
            const items = await Api.getItems();
            console.log(items)
            setItems(items);
        }
        fetchItems();
    }, [])


    const addToCart = (item) => {
        const itemToAdd = { itemID: item.itemID, itemName: item.itemName, price: item.price }
        const exist = cart.find(cartItem => cartItem.itemID === itemToAdd.itemID)
        if (exist) {
            setCart(
                cart.map(currentItem =>
                    currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity + 1 } : currentItem
                )
            );
        } else {
            setCart(currentState => [...currentState, { ...itemToAdd, quantity: 1 }]);
        }
    }

    const removeFromCart = (item) => {
        const exist = cart.find(cartItem => cartItem.itemID === item.itemID)
        if (exist.quantity === 1) {
            setCart(cart.filter(currentItem => currentItem.itemID !== item.itemID))
        } else {
            setCart(
                cart.map(currentItem =>
                    currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity - 1 } : currentItem
                )
            )
        }
    }

    return (
        <>

            <Cart addToCart={addToCart} removeFromCart={removeFromCart}></Cart>
            <h1 className="display-4 text-center mt-3">epamShop</h1>
            <section className="pi-4 container">
                <div className="row justify-content-center block shadow">
                    {
                        myItems.map(item => {
                            return <ItemCard key={item.itemID}
                                item={item}
                                addToCart={addToCart} />
                        })
                    }
                </div>

            </section>

        </>
    );
}

export default UserPage;