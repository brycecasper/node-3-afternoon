require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(err => console.log(err));

app.use(express.json());

//ENDPOINTS
app.post('/api/product', ctrl.create)
app.get('/api/product', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.put('/api/product/:id', ctrl.update)
app.delete('/api/product/:id', ctrl.delete)

const port = SERVER_PORT;
app.listen(port, () => {
    console.log(`Running on ${port}`);
})