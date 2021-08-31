import Toasts from './toasts/Toasts'

class Api {

    getItems = async () => {
        try {
            const data = await fetch('/myItems/items/');
            const items = await data.json();
            return items;
        } catch (e) {
            console.log(`error: ${e}`)
            return null;
        }

    };


    deleteItem = async (itemID) => {
        await fetch(`/myItems/items/${itemID}`, {
            method: 'DELETE'
        });
        Toasts.sucess(`Item with id ${itemID} has been deleted`)
    };

    
    addItem = async (item, newKey, props, handleClose) => {
        item.itemID = newKey;
        try {
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                Toasts.error("Items must not have empty values")
                throw new Error("Items must not have empty values")
            }
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            if (isNaN(newPrice) || typeof newPrice !== 'number') {
                Toasts.error("Price must be a number")
                throw new Error("Price must be a number");
            }
            if (newPrice > 10000) {
                Toasts.error("Maximum price 10,000 exceeded")
                throw new Error("Maximum price 10,000 exceeded");
            }
            await fetch(`/myItems/items/`, {
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
            console.log(`error: ${error}`)
        }
        handleClose();
    }


    updateItem = async (item, props, handleClose) => {
        try {
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                Toasts.error("Items must not have empty values")
                throw new Error("Items must not have empty values")
            }
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            if (isNaN(newPrice) || typeof newPrice !== 'number') {
                Toasts.error("Price must be a number");
                throw new Error("Price must be a number");
            }
            if (newPrice > 10000) {
                Toasts.error("Maximum price 10,000 exceeded")
                throw new Error("Maximum price 10,000 exceeded");
            }
            await fetch(`/myItems/items/${props.itemID}`, {
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
            console.log(`error: ${error}`)
        }
        handleClose();
    }


}

export default new Api();