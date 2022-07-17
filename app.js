require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require('./data/database');
const conversionRoutes = require('./routes/conversions');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(conversionRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
