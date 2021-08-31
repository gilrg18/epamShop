import React from 'react'
import { CartContext } from './CartContext'
import { Badge, Accordion, Button } from 'react-bootstrap'
const Cart = (props) => {
    const [cart, setCart] = React.useContext(CartContext);
    const { addToCart, removeFromCart } = props;

    const itemsPrice = cart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price) * currentItem.quantity, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    const totalItems = cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

    return (

         <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Cart    {totalItems ? (<Badge pill bg="danger">{totalItems}</Badge>) : (' ')}
                    </Accordion.Header>
                    <Accordion.Body >
                        <div>{cart.length === 0 && <div>{ }Empty Cart</div>}</div>

                        {cart.map((item) => {
                            return (
                                <div className=" mb-4 center" key={item.itemID}>
                                    <div>{item.itemName}</div>
                                    <img className="img" src={item.image} alt="img"></img>
                                    <div>
                                        <Button variant="primary rounded-pill " onClick={() => {
                                            addToCart(item, cart, setCart);
                                        }}> + </Button>
                                        {' '}
                                        <Button variant="primary rounded-pill" onClick={() => {
                                            removeFromCart(item, cart, setCart);
                                        }}> - </Button>
                                    </div>
                                    <div>{item.quantity} x ${item.price}</div>
                                </div>

                            )
                        })}
                        <hr></hr>
                        {cart.length !== 0 && (
                            <div className="center">

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
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>                     


    );
}

export default Cart;

