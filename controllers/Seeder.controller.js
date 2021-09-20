'use strict';
const {SeederModel} = require("../models/Seeder.model")

let seederController = (req,res)=>{
    console.log('🟢',req);
    let bookid = req.query.id
    SeederModel.findOne({_id:bookid}).then(data=>{
        res.json(data);
    })
    // SeederModel.find().then(data=>{
    //     res.json(data);
    // })
}

module.exports= {seederController}