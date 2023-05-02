const express = require('express');
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost:27017/blood_bank")
    .then(() => console.log('Connected to Db!'))
    .catch(error => console.log(error))

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(3801,() => console.log("Listening at localhost: 3801"))

module.exports = app