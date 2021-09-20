'use strict';

const mongoose = require("mongoose")
const {BookSchema} = require("./Book.model");

const SeederSchema = new mongoose.Schema({
    title:String,
    books:[BookSchema],
    description:String,
    status:String,
    email:String
})

const SeederModel =  mongoose.model('Seeder', SeederSchema);


let seedSeeder=()=>{
    let bookslist = [
        { // we need to follow the first model we created
            title:"REACT",
            description:"learn REACT IN 2 Days #301"
        },
        // after this point just copy and create some books
        { 
            title:"NODE JS",
            description:"you can how to build server with node js with this book "
        },
        { 
            title:"MONGODB",
            description:"you can build your own data base for your backend after reading this book "
        }
    ]
    
    let newSeeder = new SeederModel({ // here you need to pass the name and the list of the 3 books
        title: "MERN DEVS BOOKS",
        books: bookslist,
        description:"These books are the best to take you to be MERN DEV",
        status:"Active",
        email:"moegts@gmail.com"


    })
    newSeeder.save(); // we exporting this in the server.js so we do the same thing and import it in server.js
}

module.exports={
    seedSeeder,
    SeederModel
}