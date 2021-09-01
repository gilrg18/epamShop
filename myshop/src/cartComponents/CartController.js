class CartController {

    addToCart = (item, cart, setCart) => {
        const itemToAdd = { itemID: item.itemID, itemName: item.itemName, price: item.price, itemDescription: item.itemDescription, image: item.image }
        const exist = cart.find(cartItem => cartItem.itemID === itemToAdd.itemID)
        if (exist) {
            setCart(
                cart.map(currentItem =>
                    currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity + 1 } : currentItem
                )
            );
        } else {
            setCart(currentState => [...currentState, { ...itemToAdd, quantity: 1 }]);
        }
    }

    removeFromCart = (item, cart, setCart) => {
        const exist = cart.find(cartItem => cartItem.itemID === item.itemID)
        if (exist.quantity === 1) {
            setCart(cart.filter(currentItem => currentItem.itemID !== item.itemID))
        } else {
            setCart(
                cart.map(currentItem =>
                    currentItem.itemID === exist.itemID ? { ...exist, quantity: exist.quantity - 1 } : currentItem
                )
            )
        }
    }


}

export default new CartController();