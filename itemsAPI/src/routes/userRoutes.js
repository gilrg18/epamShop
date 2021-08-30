import { login, registerUser } from '../controllers/usersController.js';
//const { login, registerUser } = require('../controllers/usersController')
const userRoutes = (app) => {

    app.route('/registerUser')
        .post((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, registerUser)

    app.route('/login')
        .post((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, login)

}

export default userRoutes;