import React from 'react'
import { CartContext } from './CartContext'
import {  Badge } from 'react-bootstrap'

const CartSummary = () => {

    const [cart] = React.useContext(CartContext);

    const itemsPrice = cart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price) * currentItem.quantity, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    const totalItems = cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

    return (
        <div>
            {itemsPrice ? (
                <div className="summary">
                    <h3>Summary {totalItems ? (<Badge pill bg="danger">{totalItems}</Badge>) : (' ')}</h3>
                    {cart.map(item => {
                        return (<div key={item.itemID} className="summary-item"><span>{item.itemName} x {item.quantity}</span><span className="price">${(item.price * item.quantity).toFixed(2)}</span></div>)
                    })}
                    <div className="summary-item"><span className="text">Subtotal</span><span className="price">${itemsPrice.toFixed(2)}</span></div>
                    <div className="summary-item"><span className="text">Shipping</span><span className="price">${shippingPrice.toFixed(2)}</span></div>
                    <div className="summary-item"><span className="cartTotal">Total</span><span className="cartTotalPrice">${totalPrice.toFixed(2)}</span></div>
                    <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
                </div>) : ('')}
        </div>
    )
}

export default CartSummary;