import Toasts from './toasts/Toasts'

class Api {

    max = {
        NAME_LENGTH: 59,
        DESCRIPTION_LENGTH: 249,
        PRICE: 10000
    }

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
        if (1 <= itemID && itemID <= 4) {
            Toasts.error('This item cannot be deleted')
        } else {
            await fetch(`/myItems/items/${itemID}`, {
                method: 'DELETE'
            });
            Toasts.sucess(`Item with id ${itemID} has been deleted`)
        }
    };


    addItem = async (item, newKey, props, handleClose) => {
        item.itemID = newKey;
        try {
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            this.handleErrors(item,newPrice);
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
            let newPrice = Number(parseFloat(item.price).toFixed(2))
            this.handleErrors(item, newPrice);
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


    handleErrors(item, newPrice){
            if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
                Toasts.error("Items must not have empty values")
                throw new Error("Items must not have empty values")
            }
            if(item.itemName.length > this.max.NAME_LENGTH){
                Toasts.error("Maximum name's length 60 exceeded")
                throw new Error("Maximum name's length exceeded")
            }
            if(item.itemDescription.length > this.max.DESCRIPTION_LENGTH){
                Toasts.error("Maximum description's length 250 exceeded")
                throw new Error("Maximum description's length exceeded")
            }
            if (isNaN(newPrice) || typeof newPrice !== 'number') {
                Toasts.error("Price must be a number");
                throw new Error("Price must be a number");
            }
            if (newPrice > this.max.PRICE) {
                Toasts.error("Maximum price 10,000 exceeded")
                throw new Error("Maximum price 10,000 exceeded");
            }
    }

}

export default new Api();