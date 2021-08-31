import React from 'react'
import ItemCard from './ItemCard';
import Api from '../Api'
import Cart from '../cartComponents/Cart';
import { CartContext } from '../cartComponents/CartContext';
import CartController from '../cartComponents/CartController'

const UserPage = () => {

    //Consume itemsAPI with useEffect
    const [myItems, setItems] = React.useState([]);
    const [cart, setCart] = React.useContext(CartContext)


    React.useEffect(() => {
        const fetchItems = async () => {
            const items = await Api.getItems();
            setItems(items);
        }
        fetchItems();
    }, [])


    // const addToCart = (item) => {
    //     const itemToAdd = { itemID: item.itemID, itemName: item.itemName, price: item.price }
    //     const exist = cart.find(cartItem => cartItem.itemID === itemToAdd.itemID)
    //     if (exist) {
    //         setCart(
    //             cart.map(currentItem =>
    //                 currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity + 1 } : currentItem
    //             )
    //         );
    //     } else {
    //         setCart(currentState => [...currentState, { ...itemToAdd, quantity: 1 }]);
    //     }
    // }

    // const removeFromCart = (item) => {
    //     const exist = cart.find(cartItem => cartItem.itemID === item.itemID)
    //     if (exist.quantity === 1) {
    //         setCart(cart.filter(currentItem => currentItem.itemID !== item.itemID))
    //     } else {
    //         setCart(
    //             cart.map(currentItem =>
    //                 currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity - 1 } : currentItem
    //             )
    //         )
    //     }
    // }

    return(
        <>
            <h1 className="display-4 text-center mt-3">epamShop</h1>
            <section className="pi container">
                <div className="row justify-content-center block shadow">
                    <div className=" mb-4"><Cart addToCart={CartController.addToCart} removeFromCart={CartController.removeFromCart}></Cart></div>
                    {
                        myItems.map(item => {
                            return <ItemCard key={item.itemID}
                                item={item}
                                cart={cart}
                                setCart={setCart}
                                addToCart={CartController.addToCart} />
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default UserPage;