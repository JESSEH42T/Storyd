require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

    

const app = express();
app.use(bodyParser.json())

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then( db => {
        // console.log(db)
        app.set('db', db);
})
// app.use(express.static(__dirname + './../build'))



app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`))