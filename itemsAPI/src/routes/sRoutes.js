//import { runInNewContext } from "vm";
import {
    getItems,
    getItemsWithID,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/sController';


//routes to define endpoints in your application
const routes = (app) => {


    app.route('/myItems/items')
        .get((req, res, next) => {
            //middleware (express functions that have access to the resquest and respone objects and act on them)
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            //next() gets out of the middleware and allows use to get to the next function
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
