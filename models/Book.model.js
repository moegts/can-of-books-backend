'use strict';

const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
})

const bookModel =  mongoose.model('book', BookSchema);

// let seedBook=()=>{
//     let newBook = new bookModel({
//         title:"From Zero to Hero",
//         description:"book can tell how sunday is hard and painfull",
//         status:"Avilable exclusive",
//         email:"moegts@gmail.com"
//     }); 
// }

module.exports={BookSchema}