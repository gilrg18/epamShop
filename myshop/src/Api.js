
import Toasts from './toasts/Toasts'
// import Axios from 'axios';
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

    // login = (username, password, setLoggedIn) => {
    //     Axios.post('/login', {
    //         userID: username,
    //         password: password,
    //     }).then((response) => {
    //         if (response.data.message) {
    //             Toasts.error(response.data.message)
    //         } else {
    //             setLoggedIn(response.data[0].accountType)
    //         }
    //     })
    // }

}

export default new Api();