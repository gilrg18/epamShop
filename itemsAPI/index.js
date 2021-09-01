
import express from 'express';
import routes from './src/routes/itemsRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import cors from 'cors';

// const express = require("express") 
// const routes = require('./src/routes/itemsRoutes')
// const userRoutes = require('./src/routes/userRoutes')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

routes(app);
userRoutes(app);


app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}.`),
    
);

app.listen(process.env.PORT || PORT, () =>
    console.log(`Your server is running on port ${PORT}.`)
);
