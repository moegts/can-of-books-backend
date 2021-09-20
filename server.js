'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
const MONGO_SERVER = process.env.MONGO_SERVER;
const {seederController} =  require("./controllers/Seeder.controller");
mongoose.connect(`${MONGO_SERVER}/CanOfBooks`, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/', (request, response) => response.send('WELCOME TO THE SERVER 🔥'));
app.get('/books', seederController)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
