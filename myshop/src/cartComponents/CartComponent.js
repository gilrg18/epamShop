import React from 'react'
import { CartContext } from './CartContext'
import '../css/Cart.css'
import Cart from './Cart'
import CartSummary from './CartSummary'
const CartComponent = () => {

    const [cart] = React.useContext(CartContext);

    return (
        <section className="shopping-cart dark">
            <div className="container">
                <div className="block-heading">
                    <div>{cart.length === 0 && <div>{ }Empty Cart</div>}</div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <Cart></Cart>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <CartSummary></CartSummary>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartComponent;