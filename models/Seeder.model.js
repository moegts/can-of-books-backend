'use strict';

const mongoose = require("mongoose")
const {BookSchema} = require("./Book.model");

const SeederSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
})

const SeederModel =  mongoose.model('Seeder', SeederSchema);

let seedSeeder=()=>{
    let newbookOne = new SeederModel({
        title:"REACT",
        description:"learn REACT IN 2 Days #301",
        status:"Available ",
        email:"moegts@gmail.com",
    })
    let newbookTwo = new SeederModel({
        title:"NODE JS",
        description:"you can how to build server with node js with this book",
        status:"Not Available",
        email:"mo_gts92@hotmail.com",
    })
    let newbookThree = new SeederModel({
        title:"MONGODB",
        description:"you can build your own data base for your backend after reading this book",
        status:"Available",
        email:"mo_gts92@yahoo.com",
    })
    newbookOne.save();
    newbookTwo.save();
    newbookThree.save();
    }


module.exports={
    seedSeeder,
    SeederModel,
    SeederSchema
}