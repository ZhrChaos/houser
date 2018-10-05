require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
const massive = require('massive');

app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/houses', controller.getAll)
app.post('/houses', controller.create)
app.delete('/houses/:id', controller.delete)


const PORT = process.env.PORT;
app.listen(PORT, console.log(`listening on port ${PORT}`))