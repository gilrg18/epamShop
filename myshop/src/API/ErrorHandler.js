import Toasts from '../toasts/Toasts'

class ErrorHandler {

    max = {
        NAME_LENGTH: 59,
        DESCRIPTION_LENGTH: 249,
        PRICE: 10000
    }

    handleErrors(item, newPrice) {
        if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
            Toasts.error("Items must not have empty values")
            throw new Error("Items must not have empty values")
        }
        if (item.itemName.length > this.max.NAME_LENGTH) {
            Toasts.error("Maximum name's length 60 exceeded")
            throw new Error("Maximum name's length exceeded")
        }
        if (item.itemDescription.length > this.max.DESCRIPTION_LENGTH) {
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

export default new ErrorHandler();