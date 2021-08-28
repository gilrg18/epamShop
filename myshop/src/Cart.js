import React from 'react'
import { CartContext } from './CartContext'

const Cart = (props) => {
    const { addToCart, removeFromCart } = props;
    const [cart, setCart] = React.useContext(CartContext);
    const itemsPrice = cart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price) * currentItem.quantity, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    return (
        <>
            <h1 className="display-4 text-center mt-3">Cart Items</h1>
            <div>{cart.length === 0 && <div>{ }Empty Cart</div>}</div>
            {cart.map((item) => {
                return (
                    <div key={item.itemID}>
                        <div>{item.itemName}</div>
                        <div>
                            <button onClick={() => {addToCart(item) 
                                console.log(cart)}}> + </button>
                            <button onClick={() => removeFromCart(item)}> - </button>
                        </div>
                        <div>{item.quantity} x ${item.price}</div>
                    </div>
                )
            })}
            {cart.length !== 0 && (
                <>
                    <hr></hr>
                    <div>
                        <div> Items Price </div>
                        <div> ${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div> Shipping Price </div>
                        <div> ${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <strong> Total Price </strong>
                        <div> ${totalPrice.toFixed(2)}</div>
                    </div>
                </>
            )}
        </>
    );
}

export default Cart;