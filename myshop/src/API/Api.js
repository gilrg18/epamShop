import Toasts from '../toasts/Toasts'
import ErrorHandler from './ErrorHandler';
class Api {

    getItems = async () => {
        try {
            // const data = await fetch('/myItems/items/');
            const data = await fetch(' https://epam-shop.herokuapp.com/myItems/items/');
            const items = await data.json();
            return items;
        } catch (e) {
            return null;
        }

    };


    deleteItem = async (itemID) => {
        if (1 <= itemID && itemID <= 4) {
            Toasts.error('This item cannot be deleted')
        } else {
            // await fetch(`/myItems/items/${itemID}`, {
            await fetch(` https://epam-shop.herokuapp.com/myItems/items/${itemID}`, {
                method: 'DELETE'
            });
            Toasts.sucess(`Item with id ${itemID} has been deleted`)
        }
    };


    addItem = async (item, newKey, props, handleClose) => {
        item.itemID = newKey;
        try {
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            ErrorHandler.handleErrors(item, newPrice);
            // await fetch(`/myItems/items/`, {
            await fetch(` https://epam-shop.herokuapp.com/myItems/items/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    itemID: item.itemID,
                    itemName: item.itemName,
                    itemDescription: item.itemDescription,
                    price: newPrice
                })
            })
            const items = await this.getItems();
            props.setItems(items);
            Toasts.sucess(`Item ${item.itemName} has been added`)
        } catch (error) {
            return null;
        }
        handleClose();


    }


    updateItem = async (item, props, handleClose) => {
        try {
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            ErrorHandler.handleErrors(item, newPrice);
            // await fetch(`/myItems/items/${props.itemID}`, {
            await fetch(` https://epam-shop.herokuapp.com/myItems/items/${props.itemID}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    itemName: item.itemName,
                    itemDescription: item.itemDescription,
                    price: newPrice
                })
            })
            const items = await this.getItems();
            props.setItems(items)
            Toasts.sucess(`Item ${item.itemName} has been updated`)
        } catch (error) {
            return null;
        }
        handleClose();
    }


}

export default new Api();