'use strict';
const {SeederModel} = require("../models/Seeder.model")

let seederController = (req,res)=>{
    SeederModel.find().then(data=>{
        res.json(data);
    })
}

module.exports= {seederController}