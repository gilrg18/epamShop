import express from 'express';
import routes from './src/routes/sRoutes';


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended:true }));
app.use(express.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}.`),
    
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}.`)
);
