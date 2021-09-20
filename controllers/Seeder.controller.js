'use strict';
const {SeederModel} = require("../models/Seeder.model")
require("../models/Book.model")

let seederController = (req, res) => {
    SeederModel.find().then(data => {
        res.json(data);
    })
}

const createBookController = async (req, res) =>{
    let {title, description, email} = req.body;
    let newCreate = new SeederModel({
        title:title,
        description:description,
        email:email,
    })
    newCreate.save();
    let bookList = await SeederModel.find({});
    res.status(201).json(bookList);
}

const deleteBookController = (req, res) =>{
    let id = req.params.id;
    SeederModel.findByIdAndDelete(id, async (err, data) => {
        if (err) res.status(500).send("error 505");
        let bookList = await SeederModel.find({})
        res.json(bookList);
    })
}

module.exports= {seederController, createBookController, deleteBookController}