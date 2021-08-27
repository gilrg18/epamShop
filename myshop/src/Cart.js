import React from 'react'

const Cart = (props) => {
    const{ cartItems, onAdd} = props;
    return (
        <>
            <h1 className="display-4 text-center mt-3">Cart Items</h1>
            <div>{cartItems.length === 0 && <div>{}Empty Cart</div>}</div>
            {cartItems.map((item)=>{
                <div key={item.itemID}>
                    <div>{item.itemName}</div>
                </div>
            })}
        </>
    );
}

export default Cart;