'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const app = express();
require('dotenv').config();
app.use(cors());
// link to port
const PORT = process.env.PORT || 3001;
// get the mongo server link from the process.env. and if its not working will auto switch to 3001
const MONGO_SERVER = process.env.MONGO_SERVER;
const ATLAS_API = process.env.ATLAS_API;
app.use(express.json());
//conect to the book seeder controller so i can use it here in the server.js
const {seederController, createBookController, deleteBookController} =  require("./controllers/Seeder.controller"); //🔴
// like this we link mongoose
// also you need to add the folder you want to work on on your db list
mongoose.connect(`${ATLAS_API}`, { useNewUrlParser: true, useUnifiedTopology: true });
const {seedSeeder} =require("./models/Seeder.model");

app.post('/create-book', createBookController)
app.delete('/delete-book/:id', deleteBookController)

// server welcome just to be sure server working
app.get('/', (request, response) => response.send('WELCOME TO THE SERVER 🔥'));
// when we call the seeder books it will run the seederController
app.get('/books', seederController)

app.get('/seed-data',(req,res)=>{
    seedSeeder();
        res.json({
            "message":"book Object Created succefully"
        })
    })
// this will keep listen to the port and waiting for call
app.listen(PORT, () => console.log(`listening on ${PORT}`));

