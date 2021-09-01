import React from 'react'
import { CartContext } from './CartContext'
import { Button } from 'react-bootstrap'
import CartController from '../cartComponents/CartController'
const Cart = (props) => {
    const [cart, setCart] = React.useContext(CartContext);

    return (
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

    );
}

export default Cart;

