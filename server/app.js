const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Import routes
const vehiclesRoute = require('./routes/vehicles');
const categoriesRoute = require('./routes/categories');

app.use('/vehicles', vehiclesRoute);
app.use('/categories', categoriesRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => app.listen(5001))
    .catch((err) => console.log(err));