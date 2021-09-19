'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
const MONGO_SERVER = process.env.MONGO_SERVER;
mongoose.connect(`${MONGO_SERVER}/canOfBooks`, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/test', (request, response) => {

  response.send('test request received')

})



app.listen(PORT, () => console.log(`listening on ${PORT}`));
