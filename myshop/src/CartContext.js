import React from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) =>{
    const [cart, setCart] = React.useState([]);
    return(
        <CartContext.Provider value={[cart, setCart]}>
        {props.children}
        </CartContext.Provider>
    )
}