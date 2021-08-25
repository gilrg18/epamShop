import React from 'react';
import {Link} from "react-router-dom"

const ItemCard = (props) => {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card"  >
                <img src={props.image} height='250' className="card-img-top" alt='item' />
                <div className="card-body">
                    <h4 className="card-title">{props.itemName}</h4>
                    <p className="card-text">{props.itemDescription}</p>
                    <p className="card-text">${props.price}</p>
                    <Link to='/cart'>
                        <button type="button" className="btn btn-success">Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;