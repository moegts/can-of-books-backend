# Project Name

**Author**: Team Heros
**Version**: 1.0.0

## Overview

- - -
         Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. This is small app to track what books have impacted you, and what’s recommended to read next.
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

- - -
     first you need to start  with the back end
     in the root path on Ubuntu do this comand to install mongodb
- - -

- `sudo service monogodb start`

- - -
     then do

- `mongo`

- - -
    - to check the database of mongo
     *empty folders will not show unless you fill it with data*

- `show dbs`

- - -
     to switch or create database folder

- `use FolderName`

- - -
     to see the collections

- `show collections`

- - -
     to check the collection

- `db.collectionName.find()`

- - -
    to create collection inside of folder
     *focus C Capital*

- `db.createCollection("test")`

- - -
     create object in mongodb

- `db.collections.insert()`

- - -
     to find collection objects

- `db.collectionName.find({})`

- - -

### now lets do the installation

     in the repo path of the backend do:

- `npm install express dotenv cors axios mongoose`

- - -

     add the .env file with PORT=3000
     also add node .gitignore

- `npm install express dotenv cors axios mongoose`

- - -
     we add this to conect mongo to our server
     * dont forget to add your appname the folder you create on monogodb shell
     * the app name should be exactly as it is in the database of mongo folder

~~~js
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});
~~~

- - -
     add controllers and models folders in the root of your repo

- - -
     here is how you can conect mongoose to your model

~~~js
const mongoose = require("mongoose")
~~~
- - -
     create schemas using mongodb

~~~js
const bookSchema = new mongoose.Schema({
    title:string,
    description:string
})

const bookModel =  mongoose.model('book', bookSchema);
~~~

- - -
     create one record at least in the data base like this

~~~js
let seedBook=()=>{
    let newBook = new bookModel({
        title:"Book title",
        description:"Book description"
    });
    newBook.save();
}

module.exports={
    bookSchema
}
~~~

- - -
     now dont forget to import it to the server.js or what ever your main file server is like this:

~~~js
const {seedBook} = require("./models/Book.model");
// use this next line once only (not good pracice)
app.get('/seed-data',(req.res)=>{
    seedBook();
    
    res.json({
        "messege";"Book Object Created successfully"
    })
})
~~~

- - -
     now if you check your mongodb shell and check your folder with the command:
`show collections`
- - -
     you will find no data
     but if you go and make a call using THUNDER CLIENT for example:
`http://localhost:8000/seed-data`

- - -
     now if you check it on the mongodb shell you should find it added after you did the call

- - -
     to use this model schema and not repeat your self (DRY) to import schema in the new model

~~~js
const mongoose = require("mongoose") // import mongoose
const {bookSchema} =  require('./Book.model'); // import schema (DRY)

const anotherSchema = new mongoose.Schema({
    name:string,
    books:[bookSchema]
})
// another here is the name you will find it on the folder after you do db.another.find({}) shell command
const AnotherModel =  mongoose.model('another', anotherSchema); // call & add it to mongoose model

let seedAnother=()=>{
    let bookslist = [
        { // we need to follow the first model we created
            title:"Book title 1",
            description:"lorem ipsum...... "
        },
        // after this point just copy and create some books
        { 
            title:"Book title 2",
            description:"lorem ipsum...... "
        },
        { 
            title:"Book title 3",
            description:"lorem ipsum...... "
        }
    ]
    
    let newAnother = new AnotherModel({ // here you need to pass the name and the list of the 3 books
        name: "Name Main",
        books: bookslist
    })
    newAnother.save(); // we exporting this in the server.js so we do the same thing and import it in server.js
}

module.exports={
    seedAnother,
    AnotherModel
}

~~~

~~~js
// dont forget to add the name to the app.get seed-data in the server.js
// so you can call the function with this URL or do what ever URL you need
app.get('/seed-data',(req.res)=>{
    seedAnother();
    
    res.json({
        "messege";"Another Object Created successfully"
    })
})
~~~
~~~js
// this is server.js
const {seedAnother} =  require('./models/Another.model'); // import schema (DRY)
~~~

~~~js
// dont forget to add it on the Book.model file in the exports module
module.exports={
    seedBook, // if u need this keep it if dont remove it
    bookSchema //here
}
~~~

- now you can check by runing the localhost and check the db.another.find({}) in shell command

- if everything okay lets now create controler
     create file in the controllers folder named Another.controller.js

```js
// first import the model of the controller inside here
const {AnotherModel} = require("../models/Another.model") // in order to query data from colliction you need to 

let anotherController = (req,res)=>{
    AnotherModel.find({}, data=>{
        res.json(data)
    })
}

module.exports= anotherController;
```

- now we go to the server.js and import the controler there

```js
const {anotherController} =  require(./controller/Another.controller);
```
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

- javascript
- Node js
- Mongodb
- React
- React Bootstrap
- API's
- Heroku
- Netlify
- Axios
- CSS

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

01-01-2001 4:59pm - Application now has a

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Estimates
<!-- See below -->

## Credit and Collaborations

[Eslam Akram](https://github.com/eslamakram)
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
