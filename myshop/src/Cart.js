import React from 'react'
import { CartContext } from './CartContext'
import { Badge, Accordion } from 'react-bootstrap'
const Cart = (props) => {
    const { addToCart, removeFromCart } = props;
    const [cart] = React.useContext(CartContext);
    const itemsPrice = cart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price) * currentItem.quantity, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    const totalItems = cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Cart    {totalItems ? (<Badge pill bg="danger">{totalItems}</Badge>) : (' ')}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>{cart.length === 0 && <div>{ }Empty Cart</div>}</div>
                        {cart.map((item) => {
                            return (
                                <div key={item.itemID}>
                                    <div>{item.itemName}</div>
                                    <div>
                                        <button onClick={() => {
                                            addToCart(item);
                                        }}> + </button>
                                        <button onClick={() => {
                                            removeFromCart(item);
                                        }}> - </button>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    );
}

export default Cart;