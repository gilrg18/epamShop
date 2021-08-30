
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
        //  if (window.confirm(`Deleting item with id ${itemID}, are you sure?`)) {
        await fetch(`/myItems/items/${itemID}`, {
            method: 'DELETE'
        });
        Toasts.sucess(`Item with id ${itemID} has been deleted`)
        //}
    };

}

export default new Api();