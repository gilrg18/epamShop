
class Api {

    getItems = async () => {
        try {
            const data = await fetch('/myItems/items/');
            const items = await data.json();
            console.log(items);
            return items;
        } catch (e) {
            console.log(`error: ${e}`)
            return null;
        }

    };

}

export default new Api();