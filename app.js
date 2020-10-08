const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require('dotenv/config')
const app = express();

app.use(cors());
app.use(bodyParser.json());

//database connection

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => {console.log('connected to DB');}
 );


 const playersRoute = require('./routes/players');

 app.use('/players', playersRoute);




app.get('/', (req, res) => {
    res.send('first request mor15');
});


app.listen(3001, () => {
    console.log('listning to port 3001')
});
