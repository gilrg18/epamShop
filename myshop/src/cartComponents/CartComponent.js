import React from 'react'
import { CartContext } from './CartContext'
import { Button, Badge } from 'react-bootstrap'
import CartController from '../cartComponents/CartController'
import '../css/Cart.css'
const CartComponent = () => {

    const [cart, setCart] = React.useContext(CartContext);

    const itemsPrice = cart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price) * currentItem.quantity, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    const totalItems = cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

    return (
        <section className="shopping-cart dark">
            <div className="container">
                <div className="block-heading">
                    <h2>Shopping Cart</h2>
                    <div>{cart.length === 0 && <div>{ }Empty Cart</div>}</div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="items">
                                {cart.map(item => {
                                    return (
                                        <div className="epamColor product" key={item.itemID}>
                                            <div className="row">
                                                <div className="divPos col-md-3">
                                                    <img className="divImg" src={item.image} alt="img" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="info">
                                                        <div className="row">
                                                            <div className="col-md-5 product-name">
                                                                <div className="product-name">
                                                                    <div>{item.itemName}</div>
                                                                    <div className="product-info">
                                                                        <div>Description: <span className="value">{item.itemDescription}</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 quantity">
                                                                <label htmlFor="quantity">Quantity:</label>
                                                                <input readOnly value={item.quantity} className="form-control quantity-input" />

                                                                <Button className="space" variant="primary rounded-pill " onClick={() => {
                                                                    CartController.addToCart(item, cart, setCart);
                                                                }}> + </Button>
                                                                <Button className="space" variant="primary rounded-pill" onClick={() => {
                                                                    CartController.removeFromCart(item, cart, setCart);
                                                                }}> - </Button>
                                                            </div>
                                                            <div className="col-md-3 price">
                                                                <span>${item.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartComponent;