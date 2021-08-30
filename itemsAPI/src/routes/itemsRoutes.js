
import {
    getItems,
    getItemsWithID,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/itemsController';


//routes to define endpoints
const routes = (app) => {


    app.route('/myItems/items')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getItems)

        //posts new item
        .post((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();

        }, createItem)



    app.route('/myItems/items/:itemID')
        //get specific item
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getItemsWithID)


        //put request
        .put((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, updateItem)

        //delete request
        .delete((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, deleteItem)
}

export default routes;
