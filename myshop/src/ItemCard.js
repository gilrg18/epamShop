import React from 'react';
import { Image } from 'react-bootstrap';

const ItemCard = (props) => {
    const { item, addToCart } = props;

    return (
        <>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                <div className="card shadow"  >
                    <Image src={item.image} height='250' className="card-img-top " alt='item' rounded />
                    <div className="card-body">
                        <h4 className="card-title">{item.itemName}</h4>
                        <p className="card-text">{item.itemDescription}</p>
                        <p className="card-text">${item.price}</p>
                        <button onClick={() => {
                            addToCart(item)
                        } } type="button" className="btn btn-success btn-block rounded-pill shadow">Add to Cart</button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemCard;