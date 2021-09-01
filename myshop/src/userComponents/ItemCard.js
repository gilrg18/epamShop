import React from 'react';
import { Image } from 'react-bootstrap';
import { CartContext } from '../cartComponents/CartContext';
import Toasts from '../toasts/Toasts';

const ItemCard = (props) => {
    const { item, addToCart } = props;
    const [cart, setCart] = React.useContext(CartContext)

    return (
        <>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                <div className="card shadow"  >
                    <Image src={item.image} height='250' className="card-img-top " alt='item' rounded />
                    <div className="card-body">
                        <h4 className="card-title">{item.itemName}</h4>
                        <p className="card-text">{item.itemDescription}</p>
                        <p className="itemPrice">${item.price}</p>
                        <button onClick={() => {
                            addToCart(item, cart, setCart)
                            Toasts.sucess(`${item.itemName} added to Cart` )
                        } } type="button" className="btn btn-success btn-block rounded-pill shadow">Add to Cart</button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemCard;